<script lang="ts">
	import { Banner, Skeleton, ImagePlaceholder } from 's-ui';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner
	class="absolute top-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-base border border-default bg-neutral-primary-soft shadow-xs lg:max-w-7xl"
>
	<a
		href="https://s-ui.com/"
		class="mb-2 flex items-center border-default md:me-4 md:mb-0 md:border-e md:pe-4"
	>
		<img src="https://s-ui.com/images/s-ui-icon-logo.svg" class="me-2 h-6" alt="Flowbite Logo" />
		<span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
	</a>
	<p class="flex items-center text-sm font-normal text-body">
		Build websites even faster with components on top of Tailwind CSS
	</p>
</Banner>
