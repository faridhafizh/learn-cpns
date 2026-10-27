import katex from 'katex'

export interface MathSegment {
  type: 'text' | 'math'
  value: string
  display: boolean
}

export function renderLatex(latex: string, displayMode = false): string {
  return katex.renderToString(latex, {
    displayMode,
    throwOnError: false,
    strict: 'ignore',
    trust: false,
    output: 'htmlAndMathml',
  })
}

export function parseMathText(text: string): MathSegment[] {
  const pattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g
  const segments: MathSegment[] = []
  let lastIndex = 0

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0

    if (index > lastIndex) {
      segments.push({
        type: 'text',
        value: text.slice(lastIndex, index),
        display: false,
      })
    }

    const token = match[0]
    const display = token.startsWith('$$')
    segments.push({
      type: 'math',
      value: display ? token.slice(2, -2) : token.slice(1, -1),
      display,
    })
    lastIndex = index + token.length
  }

  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      value: text.slice(lastIndex),
      display: false,
    })
  }

  return segments
}
