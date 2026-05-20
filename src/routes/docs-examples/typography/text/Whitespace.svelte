<script lang="ts">
	import { P } from 's-ui';

	const modes = ['normal', 'nowrap', 'preline'] as const;
	type Whitespace = (typeof modes)[number];
	let selected = $state<Whitespace>('normal');
</script>

<div class="mb-6 flex flex-wrap gap-2">
	{#each modes as mode}
		<button
			type="button"
			onclick={() => (selected = mode)}
			aria-pressed={selected === mode}
			class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === mode
				? 'border-transparent bg-brand text-white'
				: 'border-default bg-neutral-primary-soft text-body hover:bg-neutral-secondary-medium'}"
		>
			{mode}
		</button>
	{/each}
</div>

<P whitespace={selected}
	>This is some text. This is some text. This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text. This is some text.</P
>
