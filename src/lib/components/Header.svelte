<script lang="ts">
  import { toggleSidebar, ui } from '../state/ui.svelte'
  import ThemeToggle from './ThemeToggle.svelte'
</script>

<header
  class="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-brand-border dark:bg-brand-dark/80"
>
  <div
    class="flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between lg:px-6"
  >
    <div class="flex items-center gap-3">
      <button
        id="sidebar-toggle"
        type="button"
        aria-label="Tampilkan atau sembunyikan sidebar"
        aria-controls="sidebar"
        aria-expanded={ui.sidebarOpen}
        onclick={toggleSidebar}
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-brand-border dark:bg-brand-card dark:text-slate-300 dark:hover:bg-brand-border dark:hover:text-brand-lime"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div>
        <p class="text-[10px] font-bold uppercase tracking-wider text-brand-lime">MATERI CPNS</p>
        <div class="flex items-baseline gap-2">
          <h2
            class="font-heading text-lg font-bold tracking-tight text-brand-dark dark:text-white sm:text-xl"
          >
            Materi &amp; Soal CPNS
          </h2>
        </div>
        <p class="mt-0.5 text-[11px] text-slate-500 dark:text-brand-muted sm:text-xs">
          TIU, TWK &amp; TKP lengkap dengan pembahasan.
        </p>
      </div>
    </div>

    <div
      class="flex w-full items-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-all focus-within:border-brand-lime focus-within:ring-2 focus-within:ring-brand-lime/20 dark:border-brand-border dark:bg-brand-card dark:focus-within:border-brand-lime dark:focus-within:ring-brand-lime/10 md:w-auto"
    >
      <div class="relative flex-1 md:w-56">
        <svg
          class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-brand-muted"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        <input
          id="search-input"
          type="search"
          placeholder="Cari materi &amp; soal..."
          aria-label="Cari materi dan soal"
          bind:value={ui.searchQuery}
          class="h-9 w-full bg-transparent py-0 pl-9 pr-3 text-xs text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-brand-muted"
        />
      </div>

      <div class="mx-1 h-5 w-px bg-slate-200 dark:bg-brand-border"></div>

      <ThemeToggle />
    </div>
  </div>
</header>
