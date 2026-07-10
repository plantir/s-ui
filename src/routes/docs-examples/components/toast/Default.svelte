<script lang="ts">
	import { Toast } from "$lib/index";
	import { FireOutline } from 'flowbite-svelte-icons';
</script>

<Toast color="brand">
	{#snippet icon()}
		<FireOutline class="h-6 w-6" />
	{/snippet}
	Set yourself free.
</Toast>
