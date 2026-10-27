<script lang="ts">
	import { Hover3d } from '$lib/index';

	const images = [
		{ src: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp', alt: 'Mountain lake' },
		{ src: '/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp', alt: 'Lake and boat' },
		{ src: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp', alt: 'Northern lights' }
	];
</script>

{#each images as image (image.src)}
	<Hover3d>
		<figure class="w-60 overflow-hidden rounded-2xl">
			<img src={image.src} alt={image.alt} class="aspect-3/4 w-full object-cover" />
		</figure>
	</Hover3d>
{/each}
