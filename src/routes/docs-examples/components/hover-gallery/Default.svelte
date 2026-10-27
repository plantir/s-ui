<script lang="ts">
	import { HoverGallery } from '$lib/index';

	const images = [
		{ src: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp', alt: 'Mountain lake' },
		{ src: '/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp', alt: 'Lake and boat' },
		{ src: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp', alt: 'Northern lights' },
		{ src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp', alt: 'Forest light' }
	];
</script>

<HoverGallery {images} class="aspect-square max-w-60 rounded-lg" />
