<script lang="ts">
	import { TextPlaceholder } from 's-ui';

	const sizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
	type Size = (typeof sizes)[number];
	let selected = $state<Size>('md');
</script>

<div class="mb-6 flex flex-wrap gap-2">
	{#each sizes as size}
		<button
			onclick={() => (selected = size)}
			class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === size
				? 'border-transparent bg-brand text-white'
				: 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-medium'}"
		>
			{size}
		</button>
	{/each}
</div>

<TextPlaceholder size={selected} />
