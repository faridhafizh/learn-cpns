import type { Group } from '../types'
import { tiuCategories } from './tiu'
import { tkpCategories } from './tkp'
import { twkCategories } from './twk'

export const groups: Group[] = [
  {
    id: 'tiu',
    label: 'TIU',
    subtitle: 'Tes Intelegensia Umum',
    categories: tiuCategories,
  },
  {
    id: 'twk',
    label: 'TWK',
    subtitle: 'Tes Wawasan Kebangsaan',
    categories: twkCategories,
  },
  {
    id: 'tkp',
    label: 'TKP',
    subtitle: 'Tes Karakteristik Pribadi',
    categories: tkpCategories,
  },
]

export const allCategories = groups.flatMap((group) => group.categories)

export const stats = {
  topics: allCategories.length,
  formulas: allCategories.reduce((total, category) => total + category.formulas.length, 0),
  examples: allCategories.reduce((total, category) => total + category.examples.length, 0),
}

export { tiuCategories, twkCategories, tkpCategories }
