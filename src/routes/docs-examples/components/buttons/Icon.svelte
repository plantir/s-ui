<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex justify-center gap-2">
	<Button color="blue">
		<svg
			class="me-2 h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
		Prev
	</Button>
	<Button color="blue">
		Next
		<svg
			class="ms-2 h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</Button>
</div>
