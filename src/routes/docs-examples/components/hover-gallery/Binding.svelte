<script lang="ts">
	import { HoverGallery } from '$lib/index';

	const images = [
		{ src: '/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp', alt: 'Desert road' },
		{ src: '/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp', alt: 'Mountains' },
		{ src: '/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp', alt: 'Travel' }
	];

	let index = $state(0);
</script>

<HoverGallery {images} bind:index indicators={false} class="aspect-video max-w-sm rounded-lg" />
<p class="text-sm text-gray-700 dark:text-gray-300">
	Showing {index + 1} of {images.length}: {images[index].alt}
</p>
