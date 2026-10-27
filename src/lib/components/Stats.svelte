<script lang="ts">
  import { stats } from '../data'

  const cards = [
    {
      label: 'Total Topik',
      value: stats.topics,
      caption: 'TIU, TWK & TKP',
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    },
    {
      label: 'Total Materi',
      value: stats.formulas,
      caption: 'Rumus, fakta & tips',
      icon: 'M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z',
    },
    {
      label: 'Contoh Soal',
      value: stats.examples,
      caption: 'Dengan pembahasan',
      icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ]
</script>

<section class="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
  {#each cards as card (card.label)}
    <div
      class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-brand-lime/50 hover:shadow-lg hover:shadow-brand-lime/5 dark:border-brand-border dark:bg-brand-card dark:hover:border-brand-lime/40"
    >
      <div
        class="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-lime/10 blur-2xl transition-all group-hover:bg-brand-lime/20"
      ></div>
      <div class="relative flex items-center justify-between">
        <p class="text-sm font-medium text-slate-500 dark:text-brand-muted">{card.label}</p>
        <span class="rounded-lg bg-brand-lime/10 p-1.5 text-brand-lime dark:bg-brand-lime/10">
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d={card.icon} />
          </svg>
        </span>
      </div>
      <p
        class="relative mt-2 font-heading text-3xl font-extrabold tabular-nums text-brand-dark dark:text-white"
      >
        {card.value}
      </p>
      <p class="relative mt-1 text-xs text-slate-400 dark:text-brand-muted">{card.caption}</p>
    </div>
  {/each}
</section>
