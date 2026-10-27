import { ui } from '../state/ui.svelte'

export function trackActive(node: HTMLElement, id: string) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) ui.activeId = id
      }
    },
    { rootMargin: '-20% 0px -70% 0px' },
  )

  observer.observe(node)

  return {
    destroy() {
      observer.disconnect()
    },
  }
}
