<script lang="ts">
	import { HoverGallery } from '$lib/index';

	const images = [
		{ src: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp', alt: 'Mountain lake' },
		{ src: '/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp', alt: 'Lake and boat' },
		{ src: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp', alt: 'Northern lights' },
		{ src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp', alt: 'Forest light' }
	];
</script>

<div
	class="max-w-60 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
>
	<HoverGallery {images} class="aspect-square" />
	<div class="p-4">
		<h2 class="flex justify-between font-semibold text-gray-900 dark:text-white">
			Landscape print
			<span class="font-normal">$25</span>
		</h2>
		<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
			High quality fine art print on matte paper
		</p>
	</div>
</div>
