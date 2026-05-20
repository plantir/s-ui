<script lang="ts">
	import { A } from 's-ui';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import Figma from '$icons/Figma.svelte';
</script>

<A
	href="/"
	class="inline-flex items-center justify-center rounded-lg border border-default bg-neutral-secondary-soft p-5 text-base font-medium text-body hover:bg-neutral-tertiary hover:text-heading"
>
	<Figma />
	<span class="ms-3 w-full">Get started with our Figma Design System</span>
	<ArrowRightOutline class="ms-2 h-6 w-6" />
</A>
