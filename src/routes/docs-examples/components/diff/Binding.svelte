<script lang="ts">
	import { Button, Diff } from '$lib/index';

	const src = '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp';
	let position = $state(30);
</script>

<Diff bind:position class="aspect-4/3 max-w-xl rounded-lg">
	{#snippet item1()}
		<img alt="Color" {src} />
	{/snippet}
	{#snippet item2()}
		<img alt="Grayscale" {src} class="grayscale" />
	{/snippet}
</Diff>
<div class="flex items-center gap-3">
	<Button size="xs" color="alternative" onclick={() => (position = 0)}>0%</Button>
	<Button size="xs" color="alternative" onclick={() => (position = 50)}>50%</Button>
	<Button size="xs" color="alternative" onclick={() => (position = 100)}>100%</Button>
	<span class="text-sm text-gray-700 dark:text-gray-300">Position: {Math.round(position)}%</span>
</div>
