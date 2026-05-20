<script lang="ts">
	import { Tags, Button } from 's-ui';
	let tags: string[] = $state([]);

	const available = [
		'svelte',
		'react',
		'vue',
		'angular',
		'javascript',
		'typescript',
		'flowbite',
		's-ui',
		'tailwindcss'
	];

	const handleClick = () => {
		alert(`Submitted: ${tags.join(', ')}`);
	};
</script>

<form class="mx-auto space-y-4">
	<Tags
		class="mt-5 mb-3"
		bind:value={tags}
		unique={true}
		availableTags={available}
		allowNewTags={false}
		showHelper
		showAvailableTags
		placeholder="Add tag"
	/>

	{#if tags.length > 0}
		<div class="rounded bg-neutral-tertiary p-4">
			<strong>Selected Tags:</strong>
			<pre>{JSON.stringify(tags, null, 2)}</pre>
		</div>
	{/if}

	<Button onclick={handleClick}>Submit</Button>
</form>
