<script lang="ts">
  import { onMount } from 'svelte'
  import Content from './lib/components/Content.svelte'
  import Header from './lib/components/Header.svelte'
  import Sidebar from './lib/components/Sidebar.svelte'
  import SplashScreen from './lib/components/SplashScreen.svelte'
  import Stats from './lib/components/Stats.svelte'
  import { destroyTheme, initTheme } from './lib/state/theme.svelte'
  import { closeSidebar, initUi, isDesktop, ui } from './lib/state/ui.svelte'

  let showSplash = $state(true)

  onMount(() => {
    initTheme()
    initUi()

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isDesktop() && ui.sidebarOpen) {
        closeSidebar()
      }
    }

    window.addEventListener('keydown', onKeydown)

    return () => {
      window.removeEventListener('keydown', onKeydown)
      destroyTheme()
    }
  })
</script>

{#if showSplash}
  <SplashScreen onDone={() => (showSplash = false)} />
{/if}

<button
  id="sidebar-backdrop"
  type="button"
  aria-label="Tutup sidebar"
  onclick={() => closeSidebar()}
  class="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden {ui.sidebarOpen ? '' : 'hidden'}"
></button>

<div class="flex min-h-screen">
  <Sidebar />

  <main
    id="main"
    class="flex-1 transition-[margin-left] duration-300 ease-in-out {ui.sidebarOpen
      ? 'lg:ml-64'
      : ''}"
  >
    <Header />

    <div class="px-6 py-8 lg:px-8">
      <Stats />
      <Content />
    </div>
  </main>
</div>
