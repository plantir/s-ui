<script lang="ts">
	import { Diff } from '$lib/index';
</script>

<Diff>
	{#snippet item1()}
		<div
			class="grid place-content-center bg-primary-600 text-7xl font-black text-white sm:text-9xl"
		>
			DAISY
		</div>
	{/snippet}
	{#snippet item2()}
		<div
			class="grid place-content-center bg-gray-200 text-7xl font-black text-gray-900 sm:text-9xl dark:bg-gray-700 dark:text-white"
		>
			DAISY
		</div>
	{/snippet}
</Diff>
