export type Theme = 'light' | 'dark'

export const theme = $state({
  current: 'light' as Theme,
})

let mediaQuery: MediaQueryList | null = null
let mediaListener: ((event: MediaQueryListEvent) => void) | null = null

export function applyTheme(next: Theme, persist = true): void {
  theme.current = next
  document.documentElement.classList.toggle('dark', next === 'dark')
  if (persist) localStorage.setItem('theme', next)
}

export function toggleTheme(): void {
  applyTheme(theme.current === 'dark' ? 'light' : 'dark')
}

export function initTheme(): void {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.current = saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', theme.current === 'dark')

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaListener = (event) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(event.matches ? 'dark' : 'light', false)
    }
  }
  mediaQuery.addEventListener('change', mediaListener)
}

export function destroyTheme(): void {
  if (mediaQuery && mediaListener) {
    mediaQuery.removeEventListener('change', mediaListener)
  }
}
