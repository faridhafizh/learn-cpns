<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let { onDone }: { onDone: () => void } = $props()

  let visible = $state(true)
  let mounted = $state(false)

  onMount(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let innerFrame = 0
    const frame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        mounted = true
      })
    })

    const timer = window.setTimeout(() => {
      visible = false
    }, 1500)

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(innerFrame)
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  })
</script>

{#if visible}
  <div
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-light px-6 dark:bg-brand-dark"
    role="status"
    aria-label="Memuat aplikasi"
    transition:fade={{ duration: 400 }}
    onoutroend={onDone}
  >
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/15 blur-3xl dark:bg-brand-lime/10"
      ></div>
    </div>

    <div
      class="relative flex flex-col items-center gap-5 transition-all duration-700 ease-spring motion-reduce:transition-none {mounted
        ? 'translate-y-0 scale-100 opacity-100'
        : 'translate-y-3 scale-90 opacity-0'}"
    >
      <div
        class="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-brand-lime/10 dark:border-brand-border dark:bg-brand-card"
      >
        <img src="/logo-bkn-1.png" alt="" class="h-full w-full object-contain" />
      </div>

      <div class="text-center">
        <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-lime">MATERI CPNS</p>
        <h1
          class="mt-1 font-heading text-2xl font-extrabold tracking-tight text-brand-dark dark:text-white"
        >
          Materi &amp; Soal CPNS
        </h1>
        <p class="mt-1 text-xs text-slate-500 dark:text-brand-muted">TIU · TWK · TKP</p>
      </div>

      <div
        class="mt-2 h-1 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-brand-border"
        aria-hidden="true"
      >
        <div
          class="h-full rounded-full bg-brand-gradient transition-[width] duration-[1200ms] ease-out motion-reduce:transition-none {mounted
            ? 'w-full'
            : 'w-0'}"
        ></div>
      </div>
    </div>
  </div>
{/if}
