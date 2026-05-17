<script lang="ts">
	import { Button, Spinner } from 'flowbite-svelte';
</script>

<div class="flex flex-wrap justify-center gap-2">
	<Button disabled color="blue">
		<Spinner class="me-2" size="4" />
		Loading…
	</Button>
</div>
