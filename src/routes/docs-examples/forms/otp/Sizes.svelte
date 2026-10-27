<script lang="ts">
	import { Otp } from '$lib/index';

	const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

{#each sizes as size (size)}
	<Otp {size} aria-label="One-time code ({size})" />
{/each}
