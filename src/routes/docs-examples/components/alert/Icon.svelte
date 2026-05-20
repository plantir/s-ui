<script lang="ts">
	import { Alert } from 's-ui';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
</script>

<Alert color="primary">
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	<span class="font-medium">Info alert!</span>
	Change a few things up and try submitting again.
</Alert>
<Alert color="red">
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	<span class="font-medium">Danger alert!</span>
	Change a few things up and try submitting again.
</Alert>
<Alert color="green">
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	<span class="font-medium">Success alert!</span>
	Change a few things up and try submitting again.
</Alert>
<Alert color="orange">
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	<span class="font-medium">Warning alert!</span>
	Change a few things up and try submitting again.
</Alert>
<Alert color="gray">
	{#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
	<span class="font-medium">Dark alert!</span>
	Change a few things up and try submitting again.
</Alert>
