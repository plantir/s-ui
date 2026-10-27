<script lang="ts">
	import { Aura, Badge, Button, Card } from '$lib/index';

	const features = [
		{ name: 'High-resolution image generation', included: true },
		{ name: 'Customizable style templates', included: true },
		{ name: 'Batch processing capabilities', included: true },
		{ name: 'AI-driven image enhancements', included: true },
		{ name: 'Seamless cloud integration', included: false },
		{ name: 'Real-time collaboration tools', included: false }
	];
</script>

<Aura variant="rainbow">
	<Card class="w-96 border-0 p-6">
		<Badge color="yellow" class="w-fit">Most Popular</Badge>
		<div class="mt-2 flex justify-between text-gray-900 dark:text-white">
			<h2 class="text-3xl font-bold">Premium</h2>
			<span class="text-xl">$29/mo</span>
		</div>
		<ul class="mt-6 flex flex-col gap-2 text-xs text-gray-700 dark:text-gray-300">
			{#each features as feature (feature.name)}
				<li class={feature.included ? '' : 'opacity-50'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="me-2 inline-block size-4 {feature.included ? 'text-green-500' : ''}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					<span class={feature.included ? '' : 'line-through'}>{feature.name}</span>
				</li>
			{/each}
		</ul>
		<Button class="mt-6 w-full">Subscribe</Button>
	</Card>
</Aura>
