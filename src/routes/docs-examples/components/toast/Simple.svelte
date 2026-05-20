<script lang="ts">
	import { Toast } from 's-ui';
	import { PaperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<Toast dismissable={false}>
	{#snippet icon()}
		<PaperPlaneOutline class="h-5 w-5 rotate-45 text-fg-brand" />
	{/snippet}
	<div class="ps-4 text-sm font-normal">Message sent successfully.</div>
</Toast>
