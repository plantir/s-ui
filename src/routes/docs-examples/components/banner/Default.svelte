<script lang="ts">
	import { Banner, Skeleton, ImagePlaceholder } from 's-ui';
	import { BullhornSolid } from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
	<p class="me-8 flex items-center text-sm font-normal text-body md:me-0">
		<span class="me-3 inline-flex rounded-full bg-neutral-quaternary p-1">
			<BullhornSolid class="h-3 w-3 text-body" />
			<span class="sr-only">Light bulb</span>
		</span>
		<span>
			New brand identity has been launched for the <a
				href="https://flowbite.com"
				class="inline font-medium text-fg-brand underline decoration-solid decoration-2 underline-offset-2 hover:no-underline"
			>
				Flowbite Library
			</a>
		</span>
	</p>
</Banner>
