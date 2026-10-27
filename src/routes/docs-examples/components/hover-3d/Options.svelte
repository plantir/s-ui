<script lang="ts">
	import { Hover3d } from '$lib/index';

	const src = '/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp';
</script>

<Hover3d tilt={5} scale={1} glare={false} rounded="lg">
	<figure class="w-60 overflow-hidden rounded-lg">
		<img {src} alt="Subtle tilt" class="aspect-3/4 w-full object-cover" />
	</figure>
</Hover3d>
<Hover3d tilt={25} scale={1.1}>
	<figure class="w-60 overflow-hidden rounded-2xl">
		<img {src} alt="Strong tilt" class="aspect-3/4 w-full object-cover" />
	</figure>
</Hover3d>
