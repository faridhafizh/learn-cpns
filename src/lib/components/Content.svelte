<script lang="ts">
  import { allCategories, groups } from '../data'
  import { ui } from '../state/ui.svelte'
  import { categoryMatches } from '../utils/search'
  import GroupSection from './GroupSection.svelte'

  const matches = $derived(
    new Map(
      allCategories.map((category) => [
        category.id,
        categoryMatches(category, ui.searchQuery),
      ]),
    ),
  )

  const hasMatches = $derived([...matches.values()].some(Boolean))
</script>

<div id="content" class="space-y-12">
  {#each groups as group (group.id)}
    {@const groupVisible = group.categories.some((category) => matches.get(category.id))}
    <div class:hidden={!groupVisible}>
      <GroupSection {group} {matches} />
    </div>
  {/each}

  {#if !hasMatches}
    <div
      class="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-brand-border dark:bg-brand-card"
    >
      <p class="font-heading text-base font-semibold text-brand-dark dark:text-white">
        Tidak ada materi yang cocok
      </p>
      <p class="mt-1 text-sm text-slate-500 dark:text-brand-muted">
        Coba kata kunci lain, misalnya “pecahan”, “Pancasila”, atau “pelayanan”.
      </p>
    </div>
  {/if}
</div>
