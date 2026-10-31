<script lang="ts">
	import { Aura, Button } from '$lib/index';

	const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

{#each sizes as size (size)}
	<Aura {size}>
		<Button color="light">{size.toUpperCase()}</Button>
	</Aura>
{/each}
