<script lang="ts">
	import { Badge } from 's-ui';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
</script>

<Badge dismissable large>
	Default
	{#snippet icon()}
		<button
			type="button"
			class="my-0.5 ms-1.5 -me-1.5 inline-flex items-center rounded-full bg-primary-500 p-0.5 text-sm text-white hover:bg-primary-900 hover:text-white dark:bg-primary-400 dark:text-primary-800 dark:hover:bg-primary-900 dark:hover:text-primary-300"
			aria-label="Remove"
		>
			<CloseCircleSolid class="h-4 w-4" />
			<span class="sr-only">Remove badge</span>
		</button>
	{/snippet}
</Badge>
