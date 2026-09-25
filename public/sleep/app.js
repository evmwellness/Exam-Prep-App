'use strict'

const SOUNDS = [
  { id: 'white', name: 'White noise', icon: '🌫️' },
  { id: 'fire', name: 'Crackling fire', icon: '🔥' },
  { id: 'waves', name: 'Ocean waves', icon: '🌊' },
  { id: 'rainforest', name: 'Rainforest', icon: '🌿' },
  { id: 'snow', name: 'Snow falling', icon: '❄️' },
  { id: 'wind', name: 'Gentle wind', icon: '🍃' },
  { id: 'bach', name: 'Bach', icon: '🎹', tag: 'Study music' },
]

const MIN = 60 * 1000
const HOUR = 60 * MIN
const BIG_TIMERS = [
  { id: '2h', ms: 2 * HOUR, big: '2 hours', small: 'Nap' },
  { id: '10h', ms: 10 * HOUR, big: '10 hours', small: 'Overnight' },
]
const CHIP_TIMERS = [
  { id: '15m', ms: 15 * MIN, label: '15 min' },
  { id: '25m', ms: 25 * MIN, label: '25 min' },
  { id: '30m', ms: 30 * MIN, label: '30 min' },
  { id: '45m', ms: 45 * MIN, label: '45 min' },
  { id: '1h', ms: HOUR, label: '1 hour' },
  { id: '90m', ms: 90 * MIN, label: '1½ hours' },
  { id: '3h', ms: 3 * HOUR, label: '3 hours' },
  { id: '8h', ms: 8 * HOUR, label: '8 hours' },
  { id: 'none', ms: null, label: 'No timer' },
  { id: 'custom', ms: null, label: 'Custom…' },
]
const FADE_MS = 30 * 1000
// A tiny silent WAV, played inside the tap handler so iOS lets us start audio
// later once the real sound has finished generating.
const SILENCE =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA='

const $ = (id) => document.getElementById(id)
const audio = $('audio')

// ---------- saved settings ----------

const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem('hush.' + key)
      return v === null ? fallback : JSON.parse(v)
    } catch {
      return fallback
    }
  },
  set(key, value) {
    try {
      localStorage.setItem('hush.' + key, JSON.stringify(value))
    } catch {
      /* private mode etc. — settings just won't be remembered */
    }
  },
}

const settings = {
  sound: store.get('sound', 'white'),
  timer: store.get('timer', '2h'),
  customH: store.get('customH', 1),
  customM: store.get('customM', 30),
  volume: store.get('volume', 0.8),
  dark: store.get('dark', true),
  wake: store.get('wake', false),
}
if (!SOUNDS.some((s) => s.id === settings.sound)) settings.sound = 'white'

// ---------- sound generation (in a worker) ----------

const worker = new Worker('sound-worker.js')
const urls = new Map()
const pending = new Map()
let nextId = 1

worker.onmessage = (e) => {
  const { id, name, wav, error } = e.data
  const p = pending.get(id)
  pending.delete(id)
  if (error) return p.reject(new Error(error))
  const url = URL.createObjectURL(new Blob([wav], { type: 'audio/wav' }))
  urls.set(name, url)
  p.resolve(url)
}

const inflight = new Map()
function soundUrl(name) {
  if (urls.has(name)) return Promise.resolve(urls.get(name))
  if (!inflight.has(name)) {
    const id = nextId++
    const promise = new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject })
      worker.postMessage({ id, name })
    }).finally(() => inflight.delete(name))
    inflight.set(name, promise)
  }
  return inflight.get(name)
}

// ---------- volume ----------

// iOS ignores audio.volume (hardware buttons only), so detect support.
const volumeWorks = (() => {
  const a = document.createElement('audio')
  a.volume = 0.5
  return a.volume === 0.5
})()
if (!volumeWorks) {
  $('volume-row').hidden = true
  $('volume-hint').hidden = false
}

function applyVolume(fadeFactor = 1) {
  if (volumeWorks) audio.volume = Math.max(0, Math.min(1, settings.volume * fadeFactor))
}

// ---------- player state ----------

// state: idle | loading | playing | paused | done
const player = { state: 'idle', endAt: null, remaining: null, loadToken: 0, switching: false }

function selectedTimerMs() {
  if (settings.timer === 'none') return null
  if (settings.timer === 'custom') {
    const ms = (Number(settings.customH) || 0) * HOUR + (Number(settings.customM) || 0) * MIN
    return ms > 0 ? ms : null
  }
  const t = [...BIG_TIMERS, ...CHIP_TIMERS].find((x) => x.id === settings.timer)
  return t ? t.ms : 2 * HOUR
}

async function start() {
  // Unlock audio playback synchronously inside the tap.
  const token = ++player.loadToken
  if (!urls.has(settings.sound)) {
    audio.src = SILENCE
    audio.play().catch(() => {})
  }
  const ms = selectedTimerMs()
  player.remaining = ms
  player.endAt = null
  setState('loading')
  try {
    const url = await soundUrl(settings.sound)
    if (token !== player.loadToken) return
    audio.src = url
    applyVolume()
    await audio.play()
    if (token !== player.loadToken) return
    player.endAt = ms ? Date.now() + ms : null
    setState('playing')
    updateMediaSession()
    if (settings.dark) enterDark()
    if (settings.wake) requestWake()
  } catch (err) {
    if (token !== player.loadToken) return
    console.error(err)
    setState('idle')
    $('status').textContent = 'Couldn’t start the sound — tap Start to try again.'
  }
}

function pause() {
  if (player.state !== 'playing') return
  player.remaining = player.endAt ? Math.max(0, player.endAt - Date.now()) : null
  player.endAt = null
  setState('paused')
  audio.pause()
  releaseWake()
}

async function resume() {
  if (player.state !== 'paused') return
  applyVolume()
  try {
    if (audio.paused) await audio.play()
    player.endAt = player.remaining ? Date.now() + player.remaining : null
    setState('playing')
    if (settings.wake) requestWake()
  } catch (err) {
    console.error(err)
  }
}

function stop(finished = false) {
  player.loadToken++
  player.endAt = null
  player.remaining = null
  setState(finished ? 'done' : 'idle')
  audio.pause()
  releaseWake()
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none'
  if (!finished) exitDark()
}

// Switching sound while playing keeps the timer running.
async function switchSound() {
  if (player.state !== 'playing' && player.state !== 'paused') return
  const token = ++player.loadToken
  try {
    const url = await soundUrl(settings.sound)
    if (token !== player.loadToken) return
    const wasPlaying = player.state === 'playing'
    player.switching = true
    audio.src = url
    if (wasPlaying) await audio.play()
    updateMediaSession()
  } catch (err) {
    console.error(err)
  } finally {
    player.switching = false
  }
}

function setState(s) {
  player.state = s
  const busy = s === 'playing' || s === 'paused'
  $('play').hidden = s === 'playing'
  $('play').disabled = s === 'loading'
  $('play').textContent = s === 'loading' ? 'Preparing sound…' : s === 'paused' ? 'Resume' : 'Start'
  $('running').hidden = !busy
  $('go-dark').hidden = s !== 'playing'
  if ('mediaSession' in navigator && busy) {
    navigator.mediaSession.playbackState = s === 'playing' ? 'playing' : 'paused'
  }
  render()
}

function fmt(ms) {
  const total = Math.ceil(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(s).padStart(2, '0')
  return h ? `${h}:${mm}:${ss}` : `${m}:${ss}`
}

function remainingMs() {
  if (player.state === 'playing') return player.endAt ? player.endAt - Date.now() : null
  if (player.state === 'paused') return player.remaining
  return null
}

function tick() {
  if (player.state === 'playing' && player.endAt) {
    const left = player.endAt - Date.now()
    if (left <= 0) {
      stop(true)
      return
    }
    applyVolume(left < FADE_MS ? left / FADE_MS : 1)
  }
  render()
}

function render() {
  const sound = SOUNDS.find((s) => s.id === settings.sound)
  const left = remainingMs()
  const status = $('status')
  if (player.state === 'playing' || player.state === 'paused') {
    const label = player.state === 'paused' ? 'Paused' : 'Playing'
    status.innerHTML =
      left === null
        ? `${label} · ${sound.name} · no timer`
        : `${label} · ${sound.name} · <strong>${fmt(left)}</strong> left`
  } else if (player.state === 'done') {
    status.textContent = 'Timer finished. Sweet dreams.'
  } else if (player.state === 'idle') {
    const ms = selectedTimerMs()
    status.textContent = ms ? `${sound.name} for ${fmtDuration(ms)}` : `${sound.name} · plays until you stop it`
  }
  $('dark-sound').textContent = sound.name
  $('dark-time').textContent =
    player.state === 'done' ? 'Finished' : player.state === 'paused' ? 'Paused' : left === null ? '' : fmt(left)
}

function fmtDuration(ms) {
  const h = Math.floor(ms / HOUR)
  const m = Math.round((ms % HOUR) / MIN)
  const parts = []
  if (h) parts.push(`${h} hour${h === 1 ? '' : 's'}`)
  if (m) parts.push(`${m} min`)
  return parts.join(' ')
}

// Timers are throttled in the background, so check on every source of
// wake-up we get: interval, audio progress events, and returning to the app.
setInterval(tick, 1000)
audio.addEventListener('timeupdate', tick)
document.addEventListener('visibilitychange', () => {
  tick()
  if (document.visibilityState === 'visible' && settings.wake && player.state === 'playing') requestWake()
})

// Paused/resumed from the lock screen, headphones, or another app taking over audio.
audio.addEventListener('pause', () => {
  if (player.state === 'playing' && !player.switching && !audio.ended) pause()
})
audio.addEventListener('play', () => {
  if (player.state === 'paused') resume()
})

// ---------- lock screen / control centre ----------

function updateMediaSession() {
  if (!('mediaSession' in navigator)) return
  const sound = SOUNDS.find((s) => s.id === settings.sound)
  navigator.mediaSession.metadata = new MediaMetadata({
    title: sound.name,
    artist: 'Hush sleep timer',
    artwork: [
      { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  })
}

if ('mediaSession' in navigator) {
  const set = (action, fn) => {
    try {
      navigator.mediaSession.setActionHandler(action, fn)
    } catch {
      /* action not supported */
    }
  }
  set('play', () => resume())
  set('pause', () => pause())
  set('stop', () => stop())
}

// ---------- black screen ----------

let fadeTimer = null

function showDarkInfo() {
  const info = $('dark-info')
  // Move the dim text each time so nothing sits in one place for hours.
  info.style.top = `${15 + Math.random() * 55}%`
  info.classList.remove('faded')
  clearTimeout(fadeTimer)
  fadeTimer = setTimeout(() => info.classList.add('faded'), 6000)
}

function enterDark() {
  $('dark').hidden = false
  document.querySelector('meta[name="theme-color"]').content = '#000000'
  showDarkInfo()
  const el = document.documentElement
  if (el.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(() => {})
}

function exitDark() {
  $('dark').hidden = true
  clearTimeout(fadeTimer)
  document.querySelector('meta[name="theme-color"]').content = '#0b1026'
  if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {})
}

$('dark').addEventListener('click', (e) => {
  if (e.target.closest('button')) return
  if ($('dark-info').classList.contains('faded')) showDarkInfo()
  else $('dark-info').classList.add('faded')
})
$('dark-exit').addEventListener('click', exitDark)
$('dark-stop').addEventListener('click', () => stop())
document.addEventListener('fullscreenchange', () => {
  // Leaving full screen with the back gesture also leaves the black screen.
  if (!document.fullscreenElement && !$('dark').hidden && player.state !== 'playing') exitDark()
})

// ---------- keep screen on ----------

let wakeLock = null
async function requestWake() {
  if (!('wakeLock' in navigator) || wakeLock) return
  try {
    wakeLock = await navigator.wakeLock.request('screen')
    wakeLock.addEventListener('release', () => (wakeLock = null))
  } catch {
    wakeLock = null
  }
}
function releaseWake() {
  if (wakeLock) wakeLock.release().catch(() => {})
  wakeLock = null
}
if (!('wakeLock' in navigator)) $('wake-row').hidden = true

// ---------- build the UI ----------

function radio(el, checked) {
  el.setAttribute('role', 'radio')
  el.setAttribute('aria-checked', String(checked))
  el.tabIndex = checked ? 0 : -1
}

function renderChoices() {
  const soundsEl = $('sounds')
  soundsEl.replaceChildren(
    ...SOUNDS.map((s) => {
      const b = document.createElement('button')
      b.className = 'sound'
      b.dataset.id = s.id
      radio(b, s.id === settings.sound)
      b.innerHTML = `<span class="icon" aria-hidden="true">${s.icon}</span><span class="name">${s.name}</span>${
        s.tag ? `<span class="tag">${s.tag}</span>` : ''
      }`
      b.addEventListener('click', () => chooseSound(s.id))
      return b
    }),
  )

  $('big-timers').replaceChildren(
    ...BIG_TIMERS.map((t) => {
      const b = document.createElement('button')
      b.className = 'preset'
      radio(b, t.id === settings.timer)
      b.innerHTML = `<span class="big">${t.big}</span><span class="small">${t.small}</span>`
      b.addEventListener('click', () => chooseTimer(t.id))
      return b
    }),
  )

  $('chips').replaceChildren(
    ...CHIP_TIMERS.map((t) => {
      const b = document.createElement('button')
      b.className = 'chip'
      radio(b, t.id === settings.timer)
      b.textContent = t.label
      b.addEventListener('click', () => chooseTimer(t.id))
      return b
    }),
  )
  // Timer buttons are one group spread over two rows: keep one tab stop.
  const anyTimerChecked = [...document.querySelectorAll('.preset, .chip')].some(
    (b) => b.getAttribute('aria-checked') === 'true',
  )
  if (!anyTimerChecked) document.querySelector('.preset').tabIndex = 0
  $('custom').hidden = settings.timer !== 'custom'
}

function chooseSound(id) {
  settings.sound = id
  store.set('sound', id)
  renderChoices()
  document.querySelector(`.sound[data-id="${id}"]`).focus()
  soundUrl(id).catch(() => {}) // warm up so Start is instant
  switchSound()
  render()
}

function chooseTimer(id) {
  settings.timer = id
  store.set('timer', id)
  renderChoices()
  // If already playing, the new choice restarts the countdown from now.
  if (player.state === 'playing') {
    const ms = selectedTimerMs()
    player.endAt = ms ? Date.now() + ms : null
    applyVolume()
  } else if (player.state === 'paused') {
    player.remaining = selectedTimerMs()
  }
  if (player.state === 'done') setState('idle')
  render()
}

// Arrow keys move between options within a radio group.
document.addEventListener('keydown', (e) => {
  const el = document.activeElement
  if (!el || el.getAttribute('role') !== 'radio') return
  const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }
  if (!(e.key in keys)) return
  e.preventDefault()
  const group = el.classList.contains('sound')
    ? [...document.querySelectorAll('.sound')]
    : [...document.querySelectorAll('.preset, .chip')]
  const next = group[(group.indexOf(el) + keys[e.key] + group.length) % group.length]
  next.click()
  next.focus()
})

const customH = $('custom-h')
const customM = $('custom-m')
customH.value = settings.customH
customM.value = settings.customM
function onCustom() {
  settings.customH = Math.max(0, Math.min(24, Math.floor(Number(customH.value) || 0)))
  settings.customM = Math.max(0, Math.min(59, Math.floor(Number(customM.value) || 0)))
  store.set('customH', settings.customH)
  store.set('customM', settings.customM)
  if (settings.timer === 'custom') chooseTimer('custom')
}
customH.addEventListener('change', onCustom)
customM.addEventListener('change', onCustom)

const vol = $('volume')
vol.value = settings.volume
vol.addEventListener('input', () => {
  settings.volume = Number(vol.value)
  store.set('volume', settings.volume)
  applyVolume()
})

const optDark = $('opt-dark')
optDark.checked = settings.dark
optDark.addEventListener('change', () => {
  settings.dark = optDark.checked
  store.set('dark', settings.dark)
})

const optWake = $('opt-wake')
optWake.checked = settings.wake
optWake.addEventListener('change', () => {
  settings.wake = optWake.checked
  store.set('wake', settings.wake)
  if (settings.wake && player.state === 'playing') requestWake()
  else releaseWake()
})

$('play').addEventListener('click', () => (player.state === 'paused' ? resume() : start()))
$('stop').addEventListener('click', () => stop())
$('go-dark').addEventListener('click', enterDark)

renderChoices()
setState('idle')
soundUrl(settings.sound).catch(() => {})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}))
}
