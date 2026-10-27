<script lang="ts">
	import { Aura, Card } from '$lib/index';

	const variants = ['dual', 'rainbow', 'holo', 'glow', 'gold', 'silver'] as const;
</script>

{#each variants as variant (variant)}
	<Aura {variant}>
		<Card class="border-0 p-6">
			<p class="text-gray-900 dark:text-white">This card has {variant} aura</p>
		</Card>
	</Aura>
{/each}
