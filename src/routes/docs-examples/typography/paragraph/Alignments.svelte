<script lang="ts">
  import { P } from "flowbite-svelte";

  const alignments = ["left", "center", "right"] as const;
  type Alignment = (typeof alignments)[number];
  let selected = $state<Alignment>("left");
</script>

<div class="mb-6 flex flex-wrap gap-2">
  {#each alignments as alignment}
    <button
      type="button"
      onclick={() => (selected = alignment)}
      aria-pressed={selected === alignment}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === alignment ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {alignment}
    </button>
  {/each}
</div>

<P align={selected}>
  Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have
  richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
