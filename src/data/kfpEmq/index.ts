import type { EmqTheme } from '../../types'
import { group1Themes } from './group1'
import { group2Themes } from './group2'
import { group3Themes } from './group3'
import { group4Themes } from './group4'
import { group5Themes } from './group5'

export const kfpEmqThemes: EmqTheme[] = [
  ...group1Themes,
  ...group2Themes,
  ...group3Themes,
  ...group4Themes,
  ...group5Themes,
]
