<script lang="ts">
	import { Aura, Button } from '$lib/index';

	const colors = [
		'primary',
		'secondary',
		'red',
		'orange',
		'green',
		'blue',
		'purple',
		'pink'
	] as const;
</script>

{#each colors as color (color)}
	<Aura {color}>
		<Button color="light">{color}</Button>
	</Aura>
{/each}
