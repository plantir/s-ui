<script lang="ts">
	import { Otp } from '$lib/index';

	const colors = [
		'gray',
		'primary',
		'secondary',
		'purple',
		'blue',
		'green',
		'yellow',
		'red'
	] as const;
</script>

{#each colors as color (color)}
	<Otp {color} aria-label="One-time code ({color})" />
{/each}
