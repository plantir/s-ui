<script lang="ts">
	import { Alert } from '$lib';
	import { InfoCircleSolid, EnvelopeSolid } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
</script>

<Alert color="primary" dismissable>
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	A simple info alert with an
	<a href="#a" class="font-semibold underline hover:text-primary-800 dark:hover:text-primary-900"
		>example link</a
	>
	. Give it a click if you like.
</Alert>
<Alert color="red" dismissable>
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	A simple danger alert with an
	<a href="#a" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900"
		>example link</a
	>
	. Give it a click if you like.
</Alert>
<Alert color="green" dismissable>
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	A simple success alert with an
	<a href="#a" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900"
		>example link</a
	>
	. Give it a click if you like.
</Alert>
<Alert color="orange" dismissable transition={fly}>
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	An alert with non default animation - fly away.
</Alert>
<Alert color="gray" dismissable closeIcon={EnvelopeSolid}>
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	An alert with the custom dismissal button.
</Alert>
