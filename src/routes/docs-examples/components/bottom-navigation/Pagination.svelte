<script lang="ts">
	import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from 's-ui';
	import {
		FileCirclePlusOutline,
		BookmarkOutline,
		AngleLeftOutline,
		AngleRightOutline,
		AdjustmentsVerticalOutline,
		UserCircleOutline
	} from 'flowbite-svelte-icons';
	const navIconClass = 'group-hover:text-fg-brand text-body mb-1 h-6 w-6';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="pagination" classes={{ content: 'grid-cols-6' }}>
	<BottomNavItem btnName="New document">
		<FileCirclePlusOutline class={navIconClass} />
	</BottomNavItem>
	<Tooltip arrow={false}>New document</Tooltip>
	<BottomNavItem btnName="Bookmark">
		<BookmarkOutline class={navIconClass} />
	</BottomNavItem>
	<Tooltip arrow={false}>Bookmark</Tooltip>
	<div class="col-span-2 flex items-center justify-center">
		<div
			class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-base bg-neutral-tertiary text-body"
		>
			<button
				type="button"
				class="inline-flex h-8 items-center justify-center rounded-s-base bg-neutral-tertiary px-1 hover:bg-neutral-tertiary-medium focus:ring-2 focus:ring-default focus:outline-hidden"
			>
				<AngleLeftOutline class="ms-1 h-2 w-2" />
				<span class="sr-only">Previous page</span>
			</button>
			<span class="mx-1 shrink-0 text-sm font-medium">1 of 345</span>
			<button
				type="button"
				class="inline-flex h-8 items-center justify-center rounded-e-base bg-neutral-tertiary px-1 hover:bg-neutral-tertiary-medium focus:ring-2 focus:ring-default focus:outline-hidden"
			>
				<AngleRightOutline class="me-1 h-2 w-2" />
				<span class="sr-only">Next page</span>
			</button>
		</div>
	</div>
	<BottomNavItem btnName="Settings">
		<AdjustmentsVerticalOutline class={navIconClass} />
	</BottomNavItem>
	<Tooltip arrow={false}>Settings</Tooltip>
	<BottomNavItem btnName="Profile">
		<UserCircleOutline class={navIconClass} />
	</BottomNavItem>
	<Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
