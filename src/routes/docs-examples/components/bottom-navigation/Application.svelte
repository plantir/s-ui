<script lang="ts">
	import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from 's-ui';
	import {
		HomeOutline,
		WalletOutline,
		AdjustmentsVerticalOutline,
		UserCircleOutline,
		PlusOutline
	} from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="application" classes={{ content: 'grid-cols-5' }}>
	<BottomNavItem btnName="Home" appBtnPosition="left">
		<HomeOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<Tooltip arrow={false}>Home</Tooltip>
	<BottomNavItem btnName="Wallet" appBtnPosition="middle">
		<WalletOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<Tooltip arrow={false}>Wallet</Tooltip>
	<div class="flex items-center justify-center">
		<BottomNavItem
			btnName="Create new item"
			appBtnPosition="middle"
			class="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 font-medium hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:focus:ring-primary-800"
		>
			<PlusOutline class="text-white" />
		</BottomNavItem>
		<Tooltip arrow={false}>Create new item</Tooltip>
	</div>
	<BottomNavItem btnName="Settings" appBtnPosition="middle">
		<AdjustmentsVerticalOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<Tooltip arrow={false}>Settings</Tooltip>
	<BottomNavItem btnName="Profile" appBtnPosition="right">
		<UserCircleOutline class="mb-1 h-6 w-6 text-body group-hover:text-fg-brand" />
	</BottomNavItem>
	<Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
