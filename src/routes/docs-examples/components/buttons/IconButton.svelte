<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex flex-wrap items-center gap-2">
	<Button class="!p-2" color="blue" aria-label="Previous">
		<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</Button>
	<Button class="!p-2" color="blue" aria-label="Next">
		<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</Button>
</div>
