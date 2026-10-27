<script lang="ts">
	import { Aura, Card } from '$lib/index';
</script>

<Aura variant="rainbow" duration={2000}>
	<Card class="border-0 p-6">
		<p class="text-gray-900 dark:text-white">2000ms duration aura</p>
	</Card>
</Aura>

<Aura variant="rainbow" class="duration-1000">
	<Card class="border-0 p-6">
		<p class="text-gray-900 dark:text-white">1000ms duration aura (Tailwind class)</p>
	</Card>
</Aura>
