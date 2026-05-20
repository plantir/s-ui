<script lang="ts">
	import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from 's-ui';
	import {
		HomeOutline,
		WalletOutline,
		AdjustmentsVerticalOutline,
		UserCircleOutline
	} from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="border" classes={{ content: 'grid-cols-4' }}>
	<BottomNavItem btnName="Home">
		<HomeOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<BottomNavItem btnName="Wallet">
		<WalletOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<BottomNavItem btnName="Settings">
		<AdjustmentsVerticalOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<BottomNavItem btnName="Profile">
		<UserCircleOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
</BottomNav>
