<script lang="ts">
	import { Heading } from 's-ui';
	import CompoDescription from '../../utils/CompoDescription.svelte';

	type Props = {
		category: string;
		breadcrumb_title: string;
		title: string;
		description: string;
	};

	let { category, breadcrumb_title, title, description }: Props = $props();
</script>

<div class="border-b border-gray-200 pb-8 dark:border-gray-800">
	{#if breadcrumb_title}
		<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
			{category}
			<span class="mx-1 text-gray-400">/</span>
			{breadcrumb_title}
		</p>
	{/if}
	<Heading
		class="mb-2 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
		tag="h1"
	>
		{title}
	</Heading>
	<CompoDescription>{description}</CompoDescription>
</div>
