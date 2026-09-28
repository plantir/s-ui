<script lang="ts">
	import { Progressbar } from "$lib/index";
</script>

<div class="my-4">
	<div class="mb-1 text-base font-medium text-heading">Small</div>
	<Progressbar progress="50" size="sm" />
</div>

<div class="my-4">
	<div class="mb-1 text-base font-medium text-heading">Default</div>
	<Progressbar progress="50" size="md" />
</div>

<div class="my-4">
	<div class="mb-1 text-lg font-medium text-heading">Large</div>
	<Progressbar progress="50" size="lg" />
</div>

<div class="my-4">
	<div class="mb-1 text-lg font-medium text-heading">Extra Large</div>
	<Progressbar progress="50" size="xl" />
</div>
