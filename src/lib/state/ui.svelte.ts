import { allCategories } from '../data'

export const ui = $state({
  sidebarOpen: false,
  searchQuery: '',
  activeId: '',
})

export function isDesktop(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
}

export function applySidebar(open: boolean, persist = true): void {
  ui.sidebarOpen = open
  if (persist) localStorage.setItem('sidebar', open ? 'open' : 'closed')
}

export function toggleSidebar(): void {
  applySidebar(!ui.sidebarOpen)
}

export function closeSidebar(): void {
  applySidebar(false)
}

export function initUi(): void {
  const saved = localStorage.getItem('sidebar')
  const initialOpen = saved ? saved === 'open' : isDesktop()
  applySidebar(initialOpen, false)
  if (!ui.activeId) ui.activeId = allCategories[0]?.id ?? ''
}
