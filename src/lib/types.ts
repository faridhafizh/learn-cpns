import type { IconName } from './icons'

export type GroupId = 'tiu' | 'twk' | 'tkp'

export interface Formula {
  name: string
  expr: string
  latex?: string
  note: string
}

export interface Example {
  q: string
  options?: string[]
  answer: string
  explain: string
}

export interface Category {
  id: string
  title: string
  short: string
  icon: IconName
  desc: string
  formulas: Formula[]
  examples: Example[]
}

export interface Group {
  id: GroupId
  label: string
  subtitle: string
  categories: Category[]
}
