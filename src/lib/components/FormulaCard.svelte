<script lang="ts">
  import type { Formula } from '../types'
  import MathFormula from './MathFormula.svelte'

  interface Props {
    formula: Formula
  }

  let { formula }: Props = $props()
</script>

<div
  class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-brand-lime/50 hover:shadow-lg hover:shadow-brand-lime/5 dark:border-brand-border dark:bg-brand-card dark:hover:border-brand-lime/40"
>
  <div
    class="absolute inset-0 bg-gradient-to-br from-brand-lime/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  ></div>
  <p class="relative text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-brand-muted">
    {formula.name}
  </p>
  <div class="relative mt-2 text-base font-semibold text-brand-dark dark:text-white">
    <MathFormula latex={formula.latex} fallback={formula.expr} />
  </div>
  <p class="relative mt-1 text-xs text-slate-500 dark:text-brand-muted">{formula.note}</p>
</div>
