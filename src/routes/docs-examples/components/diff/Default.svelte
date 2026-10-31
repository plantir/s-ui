<script lang="ts">
	import { Diff } from '$lib/index';

	const src = '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp';
</script>

<Diff>
	{#snippet item1()}
		<img alt="Original" {src} />
	{/snippet}
	{#snippet item2()}
		<img alt="Blurred" {src} class="blur-sm" />
	{/snippet}
</Diff>
