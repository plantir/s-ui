<script lang="ts">
	import { Card, Clipboard, Tooltip } from 's-ui';
	import { CheckOutline, ClipboardCleanOutline } from 'flowbite-svelte-icons';

	let value = $state('');

	function onclick(ev: MouseEvent): void {
		const target = ev.target as HTMLElement;
		const codeBlock = target.ownerDocument.querySelector('#contact-details');
		if (codeBlock) {
			value = codeBlock.textContent || '';
		}
	}
</script>

<Card class="relative p-5">
	<h2 class="mb-2 text-lg font-semibold text-heading">Contact details</h2>
	<address
		class="relative grid grid-cols-2 rounded-base border border-default bg-neutral-secondary p-4 not-italic"
	>
		<div class="hidden space-y-2 leading-loose text-body sm:block">
			Name <br />
			Email
			<br />
			Phone Number
		</div>
		<div id="contact-details" class="space-y-2 leading-loose font-medium text-heading">
			Bonnie Green <br />
			name@flowbite.com
			<br />
			+ 12 345 67890
		</div>
	</address>
	<Clipboard
		{onclick}
		bind:value
		embedded
		color="alternative"
		class="absolute end-2 top-2 h-8 px-2.5 font-medium focus:ring-0"
	>
		{#snippet children(success)}
			<Tooltip isOpen={success}>{success ? 'Copied' : 'Copy to clipboard'}</Tooltip>
			{#if success}<CheckOutline class="h-4 w-4" />{:else}<ClipboardCleanOutline
					class="h-4 w-4"
				/>{/if}
		{/snippet}
	</Clipboard>
</Card>
