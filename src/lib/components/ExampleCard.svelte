<script lang="ts">
  import type { Example } from '../types'
  import MathText from './MathText.svelte'

  interface Props {
    example: Example
    open: boolean
    onToggle: () => void
  }

  let { example, open, onToggle }: Props = $props()
</script>

<div
  class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-brand-lime/30 hover:shadow-lg hover:shadow-brand-lime/5 dark:border-brand-border dark:bg-brand-card dark:hover:border-brand-lime/30"
>
  <div
    class="absolute left-0 top-0 h-full w-1 bg-brand-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  ></div>
  <p class="relative text-sm leading-relaxed text-slate-700 dark:text-slate-300">
    <MathText text={example.q} />
  </p>

  {#if example.options}
    <ul class="relative mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
      {#each example.options as option}
        <li><MathText text={option} /></li>
      {/each}
    </ul>
  {/if}

  <div class="relative mt-3 flex flex-wrap items-center gap-2">
    <span
      class="rounded-lg bg-brand-lime/10 px-2.5 py-1 text-xs font-semibold text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime"
    >
      Jawaban: <MathText text={example.answer} />
    </span>
    <button
      type="button"
      onclick={onToggle}
      class="rounded-lg bg-brand-lime/10 px-3 py-1.5 text-xs font-semibold text-brand-dark transition hover:bg-brand-lime/20 dark:bg-brand-lime/10 dark:text-brand-lime dark:hover:bg-brand-lime/20"
    >
      {open ? 'Sembunyikan Pembahasan' : 'Lihat Pembahasan'}
    </button>
  </div>

  {#if open}
    <div
      class="relative mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600 dark:bg-brand-surface/60 dark:text-slate-300"
    >
      <MathText text={example.explain} />
    </div>
  {/if}
</div>
