<script lang="ts">
	import { Carousel, Controls, CarouselIndicators } from 's-ui';
	import images from './imageData/images.json';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let image: HTMLImgAttributes | undefined = $state();
</script>

<div class="max-w-4xl space-y-4">
	<Carousel {images} onchange={(detail) => (image = detail)}>
		<Controls />
		<CarouselIndicators />
	</Carousel>

	<div class="my-2 h-10 rounded-sm bg-neutral-quaternary p-2 text-center text-heading">
		{image?.alt}
	</div>
</div>
