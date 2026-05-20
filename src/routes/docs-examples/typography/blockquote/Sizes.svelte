<script lang="ts">
	import { Blockquote } from 's-ui';

	const sizes = ['sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const;
	type Size = (typeof sizes)[number];
	let selected = $state<Size>('xl');
</script>

<div class="mb-6 flex flex-wrap gap-2">
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
</div>

<Blockquote size={selected}>
	"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
	login screen to complex dashboard. Perfect choice for your next SaaS application."
</Blockquote>
