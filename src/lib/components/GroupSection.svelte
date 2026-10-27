<script lang="ts">
  import type { Group } from '../types'
  import CategorySection from './CategorySection.svelte'

  interface Props {
    group: Group
    matches: Map<string, boolean>
  }

  let { group, matches }: Props = $props()
</script>

<div class="content-group space-y-10">
  <div class="flex items-center gap-4 border-b-2 border-brand-lime/20 pb-4">
    <div
      class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-lime/10 font-heading text-lg font-extrabold text-brand-lime"
    >
      {group.label}
    </div>
    <div>
      <p class="text-[10px] font-bold uppercase tracking-wider text-brand-lime">{group.label}</p>
      <h2 class="font-heading text-xl font-bold tracking-tight text-brand-dark dark:text-white">
        {group.subtitle}
      </h2>
    </div>
  </div>
  <div class="space-y-12">
    {#each group.categories as category (category.id)}
      <CategorySection {category} visible={matches.get(category.id) ?? true} />
    {/each}
  </div>
</div>
