import katex from 'katex'
import { tiuCategories } from '../src/lib/data/tiu'
import { parseMathText } from '../src/lib/utils/math'

let failures = 0

function validate(latex: string, label: string, displayMode = false): void {
  try {
    katex.renderToString(latex, {
      throwOnError: true,
      displayMode,
      strict: 'ignore',
      trust: false,
    })
  } catch (error) {
    failures += 1
    const message = error instanceof Error ? error.message : String(error)
    console.error(`✗ ${label}: ${message}`)
  }
}

for (const category of tiuCategories) {
  for (const formula of category.formulas) {
    if (!formula.latex) {
      failures += 1
      console.error(`✗ ${category.id} / ${formula.name}: latex kosong`)
      continue
    }
    validate(formula.latex, `${category.id} / ${formula.name}`, true)
  }

  for (const [index, example] of category.examples.entries()) {
    const fields = [example.q, example.answer, example.explain, ...(example.options ?? [])]

    for (const field of fields) {
      if ((field.match(/\$/g) ?? []).length % 2 !== 0) {
        failures += 1
        console.error(`✗ ${category.id} / contoh ${index + 1}: delimiter $ tidak seimbang`)
      }

      for (const segment of parseMathText(field)) {
        if (segment.type === 'math') {
          validate(segment.value, `${category.id} / contoh ${index + 1}`, segment.display)
        }
      }
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} masalah LaTeX ditemukan.`)
  process.exit(1)
}

console.log('✓ Semua LaTeX TIU valid.')
