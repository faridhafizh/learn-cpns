<script lang="ts">
  import { renderLatex } from '../utils/math'

  interface Props {
    latex?: string
    fallback: string
  }

  let { latex, fallback }: Props = $props()

  const html = $derived(latex ? renderLatex(latex, true) : '')
</script>

{#if latex}
  <div class="katex-wrap formula-math">{@html html}</div>
{:else}
  <p class="formula-text">{fallback}</p>
{/if}
