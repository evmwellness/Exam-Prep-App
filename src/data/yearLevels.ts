import type { YearLevel } from '../types'

// The cumulative letter/finger progression. Each stage only introduces keys
// the previous stage hasn't already taught, so every word list below stays
// strictly inside what's been taught by that point - no hunt-and-peck required.
const PREP_KEYS = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';']
const YEAR1_NEW = ['g', 'h', 'r', 'v', 't', 'b', 'y', 'n', 'u', 'm', 'e', 'c', 'i', ',']
const YEAR2_NEW = ['w', 'x', 'o', '.', 'q', 'z', 'p', "'"]

const PREP_CUMULATIVE = [...PREP_KEYS]
const YEAR1_CUMULATIVE = [...PREP_CUMULATIVE, ...YEAR1_NEW]
const YEAR2_CUMULATIVE = [...YEAR1_CUMULATIVE, ...YEAR2_NEW] // full alphabet + core punctuation
const YEAR3_CUMULATIVE = [...YEAR2_CUMULATIVE]
const YEAR4_NEW = ['!', '?', '"']
const YEAR4_CUMULATIVE = [...YEAR3_CUMULATIVE, ...YEAR4_NEW]
const YEAR5_NEW = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const YEAR5_CUMULATIVE = [...YEAR4_CUMULATIVE, ...YEAR5_NEW]

export const YEAR_LEVELS: YearLevel[] = [
  {
    id: 'prep',
    order: 0,
    label: 'Prep',
    shortLabel: 'Prep',
    ageHint: 'Ages 5-6',
    color: 'from-outback to-orange-400',
    accent: 'text-outback',
    mascot: 'lion',
    description: "Meet Larry the Lion and find your Home Row Den!",
    keyGroup: {
      title: 'The Home Row Den',
      newKeys: PREP_KEYS,
      reviewKeys: [],
      fingers: 'Left pinky on A, ring on S, middle on D, index on F. Right index on J, middle on K, ring on L, pinky on ; . Feel the little bumps on F and J!',
      tip: 'Larry says: this is the ONLY thing to learn today - rest your paws gently on these 8 keys and always come back home after every letter. No peeking, no other keys yet!',
    },
    cumulativeKeys: PREP_CUMULATIVE,
    wordList: ['dad', 'sad', 'ask', 'all', 'fall', 'salad', 'flask', 'lads', 'adds', 'asks', 'fads', 'add', 'ads', 'lad', 'flasks', 'salads'],
    sentenceList: ['Add a flask.', 'Dad asks Sal.', 'A sad lad asks.'],
    reading: {
      title: "Larry's Big Red Ball",
      paragraphs: [
        'Larry the Lion has a big red ball. Larry can hop. Larry can run. The ball can go up.',
        'Larry and his friends play in the sun. "Look at my ball!" said Larry. It is a fun day.',
      ],
      questions: [
        {
          question: 'What colour is the ball?',
          options: ['Blue', 'Red', 'Green'],
          correctIndex: 1,
        },
        {
          question: 'What can Larry do?',
          options: ['Swim only', 'Hop and run', 'Fly'],
          correctIndex: 1,
        },
      ],
      keySentence: 'Dad asks Sal.',
      typingInstruction: "Great reading! This sentence isn't from the story - it's a workout for your home row fingers instead.",
    },
  },
  {
    id: 'year1',
    order: 1,
    label: 'Year 1',
    shortLabel: 'Yr 1',
    ageHint: 'Ages 6-7',
    color: 'from-billabong to-teal-400',
    accent: 'text-billabong',
    mascot: 'platypus',
    description: 'Splash with Percy the Platypus and reach for new keys!',
    keyGroup: {
      title: "Percy's Pond Reach",
      newKeys: YEAR1_NEW,
      reviewKeys: PREP_KEYS,
      fingers: 'Left index reaches to G, R, T, V, B. Right index reaches to H, Y, U, N, M. Left middle reaches to E and C. Right middle reaches to I and the comma.',
      tip: 'Percy says: quick recap first - hands back on A S D F and J K L ; ! Now let’s paddle out to these new keys using only our index and middle fingers.',
    },
    cumulativeKeys: YEAR1_CUMULATIVE,
    wordList: ['the', 'and', 'said', 'have', 'like', 'came', 'day', 'made', 'ball', 'fish', 'tree', 'girl', 'duck', 'they', 'are', 'his', 'her', 'hug', 'run', 'fun', 'sun', 'big', 'bag', 'sat', 'hat', 'cat', 'rat', 'mask', 'grab', 'drum', 'five', 'give', 'time', 'name', 'game', 'gate', 'safe', 'same', 'snake'],
    sentenceList: [
      'The cat sat in the sun.',
      'Give the duck a big hug.',
      'Her cat likes fish.',
      'Sam and Dave ran fast.',
      'The girl had a red hat.',
      'He can hit the drum and run.',
    ],
    reading: {
      title: 'Percy Finds a Pond',
      paragraphs: [
        'Percy the Platypus went for a swim. He came to a pond with a big tree by the water.',
        'A duck and a frog were playing there. "Come and swim with us!" said the duck. Percy was very happy.',
        'They all played in the pond until the sun went down. It was the best day.',
      ],
      questions: [
        {
          question: 'Who does Percy meet at the pond?',
          options: ['A duck and a frog', 'A lion and an emu', 'Two fish'],
          correctIndex: 0,
        },
        {
          question: 'What is by the water?',
          options: ['A house', 'A big tree', 'A boat'],
          correctIndex: 1,
        },
        {
          question: 'How did Percy feel?',
          options: ['Sad', 'Very happy', 'Tired'],
          correctIndex: 1,
        },
      ],
      keySentence: 'The duck and fish are friends.',
      typingInstruction: "Great reading! Here's a sentence using only the letters you've learned so far.",
    },
  },
  {
    id: 'year2',
    order: 2,
    label: 'Year 2',
    shortLabel: 'Yr 2',
    ageHint: 'Ages 7-8',
    color: 'from-gum to-emerald-400',
    accent: 'text-gum',
    mascot: 'emu',
    description: "Race with Ellie the Emu and complete the whole keyboard!",
    keyGroup: {
      title: 'All Four Fingers Unite',
      newKeys: YEAR2_NEW,
      reviewKeys: YEAR1_CUMULATIVE,
      fingers: 'Left ring reaches W and X. Right ring reaches O and the full stop. Left pinky reaches Q and Z. Right pinky reaches P and the apostrophe.',
      tip: "Ellie says: bring in your ring and pinky fingers now - that's all four fingers on each hand working together. Finish these and you'll know the WHOLE keyboard!",
    },
    cumulativeKeys: YEAR2_CUMULATIVE,
    wordList: ['because', 'before', 'again', 'always', 'animal', 'around', 'better', 'brother', 'carry', 'could', 'does', 'every', 'family', 'favourite', 'friend', 'group', 'happened', 'important', 'listen', 'never', 'often', 'people', 'picture', 'question', 'remember', 'special', 'together', 'would', 'write', 'circle'],
    sentenceList: [
      'Our family always remembers to say thank you.',
      'Every animal in the group needs a friend.',
      'Percy the platypus swims around the billabong.',
      'It is important to listen before you write.',
      'Could you carry the picture to the library?',
      'My favourite question is always about space.',
      'Larry and Ellie played together before lunch.',
      'People often forget how special the outback is.',
    ],
    reading: {
      title: "Ellie's Fast Race",
      paragraphs: [
        "Every spring, the animals around the billabong have a special race. Ellie the Emu always wins because her legs are so fast.",
        'This year, her friend Larry the Lion wanted to try. "I would like to race you," said Larry. Ellie thought it would be a great question to answer.',
        'They lined up together. On the count of three, they ran around the circle track. It was close, but Ellie remembered to keep her head down and finished just before Larry.',
        '"That was important practice," said Ellie. "Next time, you might be better than me!" Larry laughed and they walked home as friends.',
      ],
      questions: [
        {
          question: 'Why does Ellie always win the race?',
          options: ['She cheats', 'Her legs are fast', 'She starts early'],
          correctIndex: 1,
        },
        {
          question: 'Who asks to race Ellie this year?',
          options: ['Percy the Platypus', 'Larry the Lion', 'A duck'],
          correctIndex: 1,
        },
        {
          question: 'How does the story end?',
          options: ['They stop being friends', 'They walk home as friends', 'Larry wins'],
          correctIndex: 1,
        },
      ],
      keySentence: 'I would like to race you, said Larry.',
    },
  },
  {
    id: 'year3',
    order: 3,
    label: 'Year 3',
    shortLabel: 'Yr 3',
    ageHint: 'Ages 8-9',
    color: 'from-sky to-blue-400',
    accent: 'text-sky',
    mascot: 'lion',
    description: 'Larry shows you how to team up with the Shift key for capitals!',
    keyGroup: {
      title: 'Shift Into Capitals',
      newKeys: ['Shift'],
      reviewKeys: YEAR2_CUMULATIVE,
      fingers: 'Hold Shift down with a pinky while another finger taps the letter - together they make a Capital Letter! You already know every letter, so this is just a new team-up trick.',
      tip: 'Larry says: teamwork between fingers is just like teamwork between friends - it makes everything easier.',
    },
    cumulativeKeys: YEAR3_CUMULATIVE,
    wordList: ['although', 'believe', 'calendar', 'chocolate', 'different', 'environment', 'February', 'government', 'guarantee', 'immediately', 'knowledge', 'library', 'mosquito', 'necessary', 'opportunity', 'particular', 'receive', 'restaurant', 'separate', 'surprise', 'their', 'there', 'through', 'thought', 'various', 'weather', 'Wednesday', 'journey', 'island', 'treasure'],
    sentenceList: [
      'Although it was raining, the explorers began their journey.',
      'The government built a new library near the island.',
      'I could not believe how different the weather became.',
      'Ellie the emu ran through the calendar of seasons.',
      'Their treasure map showed a mosquito-filled swamp.',
      'It is necessary to receive permission before you leave.',
      'The restaurant served chocolate cake on Wednesday.',
      'Through every storm, the crew stayed together.',
    ],
    reading: {
      title: 'The Billabong Treasure',
      paragraphs: [
        'Larry, Percy and Ellie found an old, torn map hidden inside a hollow log. It showed a journey through the bush to a hidden island in the middle of the billabong.',
        '"Although the weather looks stormy, I believe we have a great opportunity," said Larry, brushing mud from his mane. Percy thought it was a particular kind of treasure - one made of shiny yabbie shells.',
        'They travelled through tall grass, past buzzing mosquitoes, until they reached the water. Percy paddled the others across on his back, one at a time, being very careful and calm.',
        'On the island, they found a small chest. Inside was not gold, but something better: a photo of the three of them as babies, and a note that read, "Friendship is the greatest treasure of all."',
      ],
      questions: [
        {
          question: 'Where did the friends find the map?',
          options: ['In a hollow log', 'Under a rock', 'In the library'],
          correctIndex: 0,
        },
        {
          question: 'How does Percy help the group?',
          options: ['He flies them across', 'He paddles them across', 'He builds a bridge'],
          correctIndex: 1,
        },
        {
          question: 'What was the real treasure?',
          options: ['Gold coins', 'A photo and a note about friendship', 'A chocolate cake'],
          correctIndex: 1,
        },
      ],
      keySentence: 'Friendship is the greatest treasure of all.',
    },
  },
  {
    id: 'year4',
    order: 4,
    label: 'Year 4',
    shortLabel: 'Yr 4',
    ageHint: 'Ages 9-10',
    color: 'from-purple-500 to-fuchsia-400',
    accent: 'text-purple-600',
    mascot: 'platypus',
    description: 'Percy leads an expedition into punctuation and longer words!',
    keyGroup: {
      title: 'Punctuation Power',
      newKeys: YEAR4_NEW,
      reviewKeys: YEAR3_CUMULATIVE,
      fingers: "The apostrophe is a right-pinky reach you already know. ! and ? live above 1 and / and need Shift too - a small stretch for your pinkies.",
      tip: 'Percy says: punctuation gives your sentences feeling - try typing with excitement and curiosity!',
    },
    cumulativeKeys: YEAR4_CUMULATIVE,
    wordList: ['accommodate', 'achieve', 'actually', 'address', 'appreciate', 'argument', 'beginning', 'business', 'category', 'cemetery', 'committee', 'definitely', 'disappear', 'embarrass', 'existence', 'foreign', 'independent', 'occasion', 'occurred', 'parliament', 'possession', 'privilege', 'rhythm', 'schedule', 'sincerely', 'twelfth', 'vehicle', 'yacht', 'explorer', 'ancient'],
    sentenceList: [
      'The committee will definitely address the argument today!',
      'Larry tried to accommodate every guest at the ceremony.',
      "Percy's business began with a single ancient map.",
      "The explorer's vehicle disappeared into the foreign mist.",
      'By twelfth grade, she could recite the whole schedule.',
      'Parliament debated the rhythm of the new anthem.',
      'I appreciate your existence in this small category.',
      "Sincerely, the yacht captain thanked the entire crew.",
    ],
    reading: {
      title: 'The Outback Expedition',
      paragraphs: [
        'Percy the Platypus had always wanted to lead an expedition into the ancient red centre of Australia. He planned the entire journey on a battered old schedule, marking each waterhole and cave along the way.',
        'His crew included Larry, Ellie, and a new friend, a foreign traveller named Zara the Zebra Finch, who had a wonderful sense of rhythm and always sang while they walked.',
        'On the third day, a fierce storm caused their vehicle - an old wooden cart - to become bogged in red mud. "We will definitely need to work together!" said Percy, and the whole committee of friends pushed until it was free.',
        'By the twelfth hour of their journey, they reached an enormous cave covered in ancient paintings. Ellie explained that the paintings were a great privilege to see, showing stories from long, long ago. Percy carefully sketched them into his journal, appreciating every detail, before they began the long journey home.',
      ],
      questions: [
        {
          question: 'What does Percy use to plan the trip?',
          options: ['A phone', 'An old schedule', 'A map app'],
          correctIndex: 1,
        },
        {
          question: 'Who is Zara?',
          options: ['A lion', 'A zebra finch who sings', 'A platypus'],
          correctIndex: 1,
        },
        {
          question: 'What happens on day three?',
          options: ['They find treasure', 'Their cart gets bogged in mud', 'They go home early'],
          correctIndex: 1,
        },
        {
          question: 'What do they find in the cave?',
          options: ['Ancient paintings', 'A waterfall', 'Nothing'],
          correctIndex: 0,
        },
      ],
      keySentence: 'We will definitely need to work together!',
    },
  },
  {
    id: 'year5',
    order: 5,
    label: 'Year 5',
    shortLabel: 'Yr 5',
    ageHint: 'Ages 10-11',
    color: 'from-rose-500 to-amber-400',
    accent: 'text-rose-600',
    mascot: 'emu',
    description: 'Ellie helps you master numbers and a full NAPLAN-style story!',
    keyGroup: {
      title: 'Numbers for the Exam',
      newKeys: YEAR5_NEW,
      reviewKeys: YEAR4_CUMULATIVE,
      fingers: 'Each number shares a finger with the letter below it - 4 and 5 use your left index, 6 and 7 use your right index, and so on down the row.',
      tip: "Ellie says: exam writing sometimes needs a date, an age or an address - numbers finish off your keyboard skills. You're ready for it!",
    },
    cumulativeKeys: YEAR5_CUMULATIVE,
    wordList: ['accidentally', 'accompany', 'achievement', 'acknowledge', 'aggressive', 'ancient', 'apparent', 'appropriate', 'bureau', 'colleague', 'conscience', 'conscientious', 'controversy', 'correspond', 'deficient', 'desperate', 'exceed', 'exhausted', 'familiar', 'fascinate', 'forty', 'gauge', 'harass', 'humorous', 'immediately', 'incidentally', 'jeopardy', 'persistent', 'resilient', 'determined'],
    sentenceList: [
      'Ellie accidentally dropped the ancient gauge near the bureau.',
      'Her colleague was aggressive about the controversial achievement.',
      'Despite feeling exhausted, the determined explorer pressed on.',
      'I acknowledge that forty years is a long journey.',
      'The persistent platypus refused to jeopardise the mission.',
      'His conscience would not let the desperate plan continue.',
      'We correspond every fortnight about our resilient community.',
      'The humorous emu fascinated everyone at the reunion.',
    ],
    reading: {
      title: 'The NAPLAN Adventure',
      paragraphs: [
        "Every Year 5 student in Australia faces a special challenge called NAPLAN, where they must write a whole story in a short amount of time. Ellie the Emu knows this feeling well - it's just like a big race, except the finish line is a finished story!",
        '"The secret," Ellie explained to a nervous group of students, "is to stay calm, plan for a minute or two, and then let your fingers run as fast as your imagination." She reminded them that good writers use capital letters for names and the start of sentences, and punctuation like full stops, question marks and commas to help the reader breathe.',
        'Ellie, Larry and Percy had all practised together for months: first learning the home row, then new letters, then whole words, and finally entire sentences with numbers and punctuation. Now, forty minutes on the clock felt like plenty of time.',
        '"You have trained every day," said Ellie, "and just like a marathon runner, you are ready. Take a breath, hold your fingers steady on the home row, and begin your story whenever you feel ready."',
      ],
      questions: [
        {
          question: 'What is NAPLAN compared to in the story?',
          options: ['A sleep', 'A big race', 'A holiday'],
          correctIndex: 1,
        },
        {
          question: "What is Ellie's secret to exam writing?",
          options: ['Rushing without planning', 'Staying calm, planning, then writing fast', 'Skipping punctuation'],
          correctIndex: 1,
        },
        {
          question: 'What have the three friends practised in order?',
          options: [
            'Only numbers',
            'Home row, new letters, words, then sentences',
            'Only reading',
          ],
          correctIndex: 1,
        },
      ],
      keySentence: 'Take a breath, hold your fingers steady, and begin your story.',
    },
    exam: {
      prompt:
        "NAPLAN Writing Task: Write a narrative about a surprising journey. Read the model story below, then type it out under exam conditions to practise your speed and accuracy!",
      story:
        "The old wooden gate creaked open by itself, and Maya froze on the spot. She had walked past this paddock every day for forty weeks, but she had never noticed the narrow, overgrown path behind it before. Curious, she stepped through, her heart beating quickly.\n\nThe path wound past ancient gum trees and disappeared into a shadowy gully. Just as she was about to turn back, a flash of orange darted between the rocks. \"Hello?\" Maya called out, surprised. To her amazement, a small lion cub limped out, favouring one paw.\n\nMaya knew she had to help. She found a soft leaf, wrapped it gently around the cub's paw, and carried him all the way home. Her family could not believe what she had found! They named him Larry, and from that day on, he never left her side.\n\nMaya often wondered what would have happened if she had not opened that gate. Sometimes, she realised, the most important adventures begin with a single, curious step.",
      timeLimitSeconds: 360,
    },
  },
]

export function getYearLevel(id: string): YearLevel | undefined {
  return YEAR_LEVELS.find((y) => y.id === id)
}

export function nextYearLevel(id: string): YearLevel | undefined {
  const current = getYearLevel(id)
  if (!current) return undefined
  return YEAR_LEVELS.find((y) => y.order === current.order + 1)
}
