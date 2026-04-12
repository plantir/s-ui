<script lang="ts">
	import './layout.css';
	import { Spinner } from '$lib';
	const { children } = $props();
	import { onMount } from 'svelte';
	let isLoaded = $state(false);
	onMount(() => {
		isLoaded = true;
	});
</script>

{#if isLoaded}
	{@render children()}
{:else}
	<div class="flex h-screen items-center justify-center">
		<Spinner />
	</div>
{/if}
