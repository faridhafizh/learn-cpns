<script lang="ts">
  import type { Category } from '../types'
  import { trackActive } from '../utils/active'
  import ExampleCard from './ExampleCard.svelte'
  import FormulaCard from './FormulaCard.svelte'
  import Icon from './Icon.svelte'

  interface Props {
    category: Category
    visible?: boolean
  }

  let { category, visible = true }: Props = $props()

  let openStates = $state<boolean[]>([])

  $effect.pre(() => {
    openStates = category.examples.map(() => false)
  })

  const anyClosed = $derived(openStates.some((open) => !open))

  function toggleExample(index: number): void {
    openStates[index] = !openStates[index]
  }

  function toggleAll(): void {
    const next = anyClosed
    openStates = openStates.map(() => next)
  }
</script>

<section
  id={category.id}
  class="scroll-mt-24"
  class:hidden={!visible}
  use:trackActive={category.id}
>
  <div class="mb-5 flex items-start gap-3">
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lime/10 text-brand-lime dark:bg-brand-lime/10"
    >
      <Icon name={category.icon} />
    </div>
    <div>
      <h3
        class="font-heading text-xl font-bold tracking-tight text-brand-dark dark:text-white"
      >
        {category.title}
      </h3>
      <p class="mt-0.5 text-sm text-slate-500 dark:text-brand-muted">{category.desc}</p>
    </div>
  </div>

  <div class="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
    {#each category.formulas as formula (formula.name)}
      <FormulaCard {formula} />
    {/each}
  </div>

  <div class="space-y-3">
    <div class="flex items-center justify-between">
      <p class="font-heading text-sm font-semibold text-brand-dark dark:text-slate-300">
        Contoh Soal &amp; Pembahasan
      </p>
      <button
        type="button"
        class="text-xs font-medium text-brand-lime transition hover:text-brand-lime/80 dark:text-brand-lime dark:hover:text-brand-lime/80"
        onclick={toggleAll}
      >
        {anyClosed ? 'Tampilkan semua pembahasan' : 'Sembunyikan semua pembahasan'}
      </button>
    </div>
    {#each category.examples as example, index (index)}
      <ExampleCard {example} open={openStates[index]} onToggle={() => toggleExample(index)} />
    {/each}
  </div>
</section>
