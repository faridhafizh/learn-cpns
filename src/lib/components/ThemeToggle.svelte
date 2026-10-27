<script lang="ts">
  import { theme, toggleTheme } from '../state/theme.svelte'
</script>

<button
  type="button"
  aria-label="Ubah tema terang/gelap"
  aria-pressed={theme.current === 'dark'}
  onclick={toggleTheme}
  class="relative mr-1 flex h-7 w-[64px] shrink-0 items-center justify-between rounded-full bg-slate-200/60 p-0.5 transition-colors duration-500 hover:bg-slate-200 dark:bg-brand-surface dark:hover:bg-brand-border"
>
  <span
    class="absolute top-0.5 h-6 w-6 rounded-full transition-all duration-500 ease-spring {theme.current ===
    'dark'
      ? 'left-[34px] bg-brand-lime shadow-lg shadow-brand-lime/30'
      : 'left-0.5 bg-white shadow-sm'}"
  ></span>
  <span
    class="relative z-10 flex h-6 w-6 items-center justify-center transition-all duration-500 {theme.current ===
    'dark'
      ? 'text-brand-muted'
      : 'text-amber-500'}"
  >
    <svg
      class="h-3.5 w-3.5 transition-transform duration-500 {theme.current === 'dark'
        ? 'rotate-90 scale-50'
        : 'rotate-0 scale-100'}"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </span>
  <span
    class="relative z-10 flex h-6 w-6 items-center justify-center transition-all duration-500 {theme.current ===
    'dark'
      ? 'text-brand-dark'
      : 'text-slate-400'}"
  >
    <svg
      class="h-3.5 w-3.5 transition-transform duration-500 {theme.current === 'dark'
        ? 'rotate-0 scale-100'
        : '-rotate-90 scale-50'}"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  </span>
</button>
