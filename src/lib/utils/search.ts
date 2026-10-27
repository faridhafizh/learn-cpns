import type { Category } from '../types'

export function stripMath(text: string): string {
  return text
    .replace(/\$\$?/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function categoryMatches(category: Category, query: string): boolean {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return true

  const parts: string[] = [category.title, category.short, category.desc]

  for (const formula of category.formulas) {
    parts.push(formula.name, formula.expr, formula.note)
  }

  for (const example of category.examples) {
    parts.push(example.q, example.answer, example.explain)
    if (example.options) parts.push(...example.options)
  }

  return stripMath(parts.join(' ')).toLowerCase().includes(normalizedQuery)
}
