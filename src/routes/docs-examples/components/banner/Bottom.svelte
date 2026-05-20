<script lang="ts">
	import { Banner, Skeleton, ImagePlaceholder, A } from 's-ui';
	import { SalePercentSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner type="bottom" class="absolute">
	<p class="flex items-center text-sm font-normal text-body">
		<span class="me-3 inline-flex rounded-full bg-neutral-quaternary p-1">
			<SalePercentSolid class="h-4 w-4 text-body" />
			<span class="sr-only">Discount coupon</span>
		</span>
		<span>
			Get 5% commission per sale <A href="https://flowbite.com">
				Become a partner <ArrowRightOutline class="ms-2 h-3 w-3" />
			</A>
		</span>
	</p>
</Banner>
