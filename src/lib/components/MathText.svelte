<script lang="ts">
  import { parseMathText, renderLatex } from '../utils/math'

  interface Props {
    text: string
  }

  let { text }: Props = $props()

  const segments = $derived(parseMathText(text))
</script>

{#each segments as segment}
  {#if segment.type === 'math'}
    {#if segment.display}
      <div class="katex-wrap my-2">{@html renderLatex(segment.value, true)}</div>
    {:else}
      <span class="katex-inline">{@html renderLatex(segment.value, false)}</span>
    {/if}
  {:else}
    {segment.value}
  {/if}
{/each}
