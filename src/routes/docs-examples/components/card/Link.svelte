<script lang="ts">
	import { Card } from 's-ui';
	import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<Card class="p-4 sm:p-6 md:p-8">
	<GiftBoxSolid class="mb-3 h-8 w-8 text-body" />
	<a href="/">
		<h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">Need a help in Claim?</h5>
	</a>
	<p class="mb-3 font-normal text-body">
		Go to this step by step guideline process on how to certify for your weekly benefits:
	</p>
	<a href="/" class="inline-flex items-center text-fg-brand hover:underline">
		See our guideline
		<ArrowUpRightFromSquareOutline class="ms-2.5 h-4 w-4" />
	</a>
</Card>
