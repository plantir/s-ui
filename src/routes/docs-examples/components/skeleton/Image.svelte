<script lang="ts">
	import { ImagePlaceholder } from 's-ui';

	const sizes = ['sm', 'md', 'lg'] as const;
	type Size = (typeof sizes)[number];
	let selected = $state<Size>('md');
	let imgOnly = $state(false);
</script>

<div class="mb-6 flex flex-wrap items-center gap-2">
	{#each sizes as size}
		<button
			type="button"
			onclick={() => (selected = size)}
			aria-pressed={selected === size}
			class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === size
				? 'border-transparent bg-brand text-white'
				: 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-medium'}"
		>
			{size}
		</button>
	{/each}
	<button
		type="button"
		onclick={() => (imgOnly = !imgOnly)}
		aria-pressed={imgOnly}
		class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
      {imgOnly
			? 'border-transparent bg-brand text-white'
			: 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-medium'}"
	>
		imgOnly
	</button>
</div>

<ImagePlaceholder size={selected} {imgOnly} />
