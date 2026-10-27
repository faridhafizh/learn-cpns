<script lang="ts">
  import { icons, type IconName } from '../icons'

  interface Props {
    name: IconName
    class?: string
  }

  let { name, class: className = 'h-5 w-5' }: Props = $props()
</script>

<svg
  class={className}
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path stroke-linecap="round" stroke-linejoin="round" d={icons[name]} />
</svg>
