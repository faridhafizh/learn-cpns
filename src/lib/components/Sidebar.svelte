<script lang="ts">
  import { groups } from '../data'
  import { closeSidebar, isDesktop, ui } from '../state/ui.svelte'
  import Icon from './Icon.svelte'

  function handleNavClick(id: string): void {
    ui.activeId = id
    if (!isDesktop()) closeSidebar()
  }
</script>

<aside
  id="sidebar"
  aria-hidden={!ui.sidebarOpen}
  class="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ease-in-out dark:border-brand-border dark:bg-brand-surface {ui.sidebarOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  <div class="flex items-center gap-3 px-6 py-6">
    <div
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-brand-border dark:bg-brand-card"
    >
      <img src="/logo-bkn-1.png" alt="Logo BKN" class="h-full w-full object-contain" />
    </div>
    <div>
      <h1
        class="font-heading text-lg font-bold tracking-tight text-brand-dark dark:text-white"
      >
        CPNS Materi
      </h1>
      <p class="text-[11px] font-medium text-slate-400 dark:text-brand-muted">TIU · TWK · TKP</p>
    </div>
  </div>

  <nav id="sidebar-nav" class="flex-1 space-y-1 overflow-y-auto px-3 py-2">
    {#each groups as group, groupIndex (group.id)}
      <p
        class="px-3 {groupIndex === 0 ? 'pt-2' : 'pt-5'} pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-brand-muted"
      >
        {group.label}
      </p>
      {#each group.categories as category (category.id)}
        <a
          href="#{category.id}"
          class="nav-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100 dark:text-brand-muted dark:hover:bg-brand-card"
          class:active={ui.activeId === category.id}
          data-target={category.id}
          onclick={() => handleNavClick(category.id)}
        >
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-white group-hover:text-brand-dark dark:bg-brand-card dark:text-brand-muted dark:group-hover:bg-brand-border dark:group-hover:text-brand-lime"
          >
            <Icon name={category.icon} />
          </span>
          <span class="flex-1">{category.short}</span>
        </a>
      {/each}
    {/each}
  </nav>

  <div class="border-t border-slate-200 p-4 dark:border-brand-border">
    <div
      class="relative overflow-hidden rounded-xl bg-brand-dark p-4 text-white dark:bg-brand-card"
    >
      <div class="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-brand-lime/20 blur-2xl"></div>
      <p class="relative text-xs font-medium text-brand-lime">Tips CPNS</p>
      <p class="relative mt-1 text-sm font-semibold leading-snug text-slate-200">
        Latihan TIU 10 soal/hari, kuasai TWK, dan asah TKP lewat studi kasus.
      </p>
    </div>
  </div>
</aside>
