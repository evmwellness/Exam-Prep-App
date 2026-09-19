import type { AktQuestion } from '../../types'
import { group1Questions } from './group1'
import { group2Questions } from './group2'
import { group3Questions } from './group3'
import { group4Questions } from './group4'
import { group5Questions } from './group5'
import { group6Questions } from './group6'

export const aktQuestions: AktQuestion[] = [
  ...group1Questions,
  ...group2Questions,
  ...group3Questions,
  ...group4Questions,
  ...group5Questions,
  ...group6Questions,
]
