import type { KfpCase } from '../../types'
import { group1Cases } from './group1'
import { group2Cases } from './group2'
import { group3Cases } from './group3'
import { group4Cases } from './group4'
import { group5Cases } from './group5'

export const kfpCases: KfpCase[] = [
  ...group1Cases,
  ...group2Cases,
  ...group3Cases,
  ...group4Cases,
  ...group5Cases,
]
