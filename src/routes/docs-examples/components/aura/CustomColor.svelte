<script lang="ts">
	import { Aura, Card } from '$lib/index';
</script>

<Aura style="--aura-color: #ea580c">
	<Card class="border-0 p-6">
		<p class="text-gray-900 dark:text-white">This card has custom color aura</p>
	</Card>
</Aura>

<Aura class="bg-yellow-200" style="--aura-color: #ea580c">
	<Card class="border-0 p-6">
		<p class="text-gray-900 dark:text-white">This card has custom color and background aura</p>
	</Card>
</Aura>
