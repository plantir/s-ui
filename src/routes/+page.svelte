<script lang="ts">
	import {
		Alert,
		ThemeProvider,
		type ThemeConfig,
		AccordionItem,
		Accordion,
		Avatar,
		Badge,
		Banner,
		BottomNav,
		BottomNavItem,
		Breadcrumb,
		BreadcrumbItem,
		ButtonGroup,
		Button,
		Card,
		GradientButton,
		Carousel,
		Controls,
		CarouselIndicators,
		Clipboard,
		DarkMode,
		Datepicker,
		DeviceMockup,
		Ios,
		Thumbnails,
		Drawer,
		Android,
		Modal,
		CloseButton,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		KanbanBoard,
		Kbd,
		Listgroup,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		PaginationNav,
		Popover,
		Progressbar,
		MegaMenu,
		Dropdown,
		DropdownItem,
		Rating,
		Star,
		Heart,
		Thumbup,
		type RatingIconProps,
		Skeleton,
		ImagePlaceholder,
		ListPlaceholder,
		TestimonialPlaceholder,
		TextPlaceholder,
		VideoPlaceholder,
		WidgetPlaceholder,
		CardPlaceholder,
		SpeedDialTrigger,
		SpeedDial,
		SpeedDialButton,
		isDark
	} from 's-ui';
	const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) =>
		Heart(anchor, { ..._props, ...props });

	import {
		ChevronDownOutline,
		ShareNodesSolid,
		PrinterSolid,
		DownloadSolid,
		FileCopySolid,
		ImageOutline,
		ArrowRightOutline,
		CalendarWeekSolid,
		QuoteSolid,
		CheckCircleSolid,
		CloseCircleSolid,
		AppleSolid,
		FacebookSolid,
		DiscordSolid,
		DropboxSolid
	} from 'flowbite-svelte-icons';
	let menu = [
		{ name: 'About us', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact us', href: '/contact' },
		{ name: 'Library', href: '/library' },
		{ name: 'Newsletter', href: '/news' },
		{ name: 'Support Center', href: '/support' },
		{ name: 'Resources', href: '/resource' },
		{ name: 'Playground', href: '/play' },
		{ name: 'Terms', href: '/terms' },
		{ name: 'Pro Version', href: '/pro' },
		{ name: 'License', href: '/license' }
	];
	import { page } from '$app/state';
	import { slide, blur } from 'svelte/transition';
	import Toast from '$lib/toast/Toast.svelte';
	import Timeline from '$lib/timeline/Timeline.svelte';
	import TimelineItem from '$lib/timeline/TimelineItem.svelte';
	import Activity from '$lib/timeline/Activity.svelte';
	import ActivityItem from '$lib/timeline/ActivityItem.svelte';
	import Group from '$lib/timeline/Group.svelte';
	import GroupItem from '$lib/timeline/GroupItem.svelte';
	import Tour from '$lib/tour/Tour.svelte';
	import A from '$lib/a/A.svelte';
	import Blockquote from '$lib/blockquote/Blockquote.svelte';
	import DescriptionList from '$lib/descriptionlist/DescriptionList.svelte';
	import Heading from '$lib/heading/Heading.svelte';
	import P from '$lib/paragraph/P.svelte';
	import Hr from '$lib/hr/Hr.svelte';
	import Img from '$lib/img/Img.svelte';
	import Layout from '$lib/layout/Layout.svelte';
	import List from '$lib/list/List.svelte';
	import Li from '$lib/list/Li.svelte';
	import Mark from '$lib/mark/Mark.svelte';
	import Secondary from '$lib/secondary/Secondary.svelte';
	import Span from '$lib/span/Span.svelte';
	import Video from '$lib/video/Video.svelte';
	import Label from '$lib/label/Label.svelte';
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import CheckboxButton from '$lib/checkbox/CheckboxButton.svelte';
	import ThemeSelector from '$lib/theme-selector/ThemeSelector.svelte';
	import Tabs from '$lib/tabs/Tabs.svelte';
	import TabItem from '$lib/tabs/TabItem.svelte';
	let popupModal = $state(false);
	let buttons = [
		{ name: 'Profile', mycustomfield: 'data1' },
		{ name: 'Settings', mycustomfield: 'data2', current: true },
		{ name: 'Messages', mycustomfield: 'data3' },
		{ name: 'Download', mycustomfield: 'data4', disabled: false, attrs: { type: 'submit' } }
	];
	const theme: ThemeConfig = {
		alert: 'p-3'
	};
	let open = $state(false);
	let selectedDate = $state<Date | undefined>(undefined);
	let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
		from: undefined,
		to: undefined
	});
	let columns = $state([
		{
			id: 1,
			title: 'Column 1',
			cards: [
				{ id: '1', title: 'Card 1' },
				{ id: '2', title: 'Card 2' },
				{ id: '3', title: 'Card 3' },
				{ id: '4', title: 'Card 4' },
				{ id: '5', title: 'Card 5' },
				{ id: '6', title: 'Card 6' },
				{ id: '7', title: 'Card 7' },
				{ id: '8', title: 'Card 8' }
			]
		},
		{
			id: 2,
			title: 'Column 2',
			cards: [
				{ id: '9', title: 'Card 9' },
				{ id: '10', title: 'Card 10' },
				{ id: '11', title: 'Card 11' },
				{ id: '12', title: 'Card 12' },
				{ id: '13', title: 'Card 13' },
				{ id: '14', title: 'Card 14' },
				{ id: '15', title: 'Card 15' },
				{ id: '16', title: 'Card 16' }
			]
		}
	]);
	let value = $state('npm install flowbite');
	let success = $state(false);
	const images = [
		{
			alt: 'Cosmic timetraveler',
			src: 'https://s-ui.com/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			alt: 'Cosmic timetraveler',
			src: 'https://s-ui.com/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		}
	];
	let activeUrl = $derived(page.url.pathname);
	let index = $state(0);
	let open5 = $state(false);
	let placement: 'right' | 'left' | 'top' | 'bottom' = $state('right');
	let currentPage = $state(1);
	const totalPages = 20;
	const handlePageChange = (page: number) => {
		currentPage = page;
	};
	let activities = [
		{
			id: 'activity-1',
			title:
				'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
			date: 'just now',
			alt: 'image alt here',
			src: 'https://s-ui.com/images/profile-picture-2.webp'
		},
		{
			id: 'activity-2',
			title: 'We don’t serve their kind here! What? Your droids. ',
			date: '2 hours ago',
			alt: 'image alt here',
			src: 'https://s-ui.com/images/profile-picture-2.webp',
			text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
		},
		{
			id: 'activity-3',
			title: 'They’ll have to wait outside. We don’t want them here. ',
			date: '1 day ago',
			alt: 'image alt here',
			src: 'https://s-ui.com/images/profile-picture-3.webp'
		}
	];
	let groupTimelines = [
		{
			id: 'group-1',
			name: '<span class="font-medium">Laura Romeros</span> likes <span class="font-medium">Bonnie Green\'s</span> post in <span class="font-medium"> How to start with Flowbite library</span>',
			title:
				'<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
			src: 'https://s-ui.com/images/profile-picture-1.webp',
			alt: 'alt here',
			href: '/',
			isPrivate: true,
			comment: '"I wanted to share a webinar zeroheight."'
		},
		{
			id: 'group-2',
			name: '<span class="font-medium">Jese Leos</span> likes <span class="font-medium">Bonnie Green\'s</span> post in <span class="font-medium"> How to start with Flowbite library</span>',
			title:
				'<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
			src: 'https://s-ui.com/images/profile-picture-2.webp',
			alt: 'alt here',
			href: '/',
			isPrivate: true,
			comment: '"I wanted to share a webinar zeroheight."'
		}
	];
	let tour = $state({
		active: false,
		currentStep: 0,
		steps: [
			{
				target: '#accordion',
				title: 'Accordion',
				description:
					'Accordion is a vertically stacked set of panels, only one of which can be expanded at a time.',
				placement: 'top'
			},
			{
				target: '#alert',
				title: 'Alert',
				description: 'Alert is a message that provides information to the user.',
				placement: 'top'
			},
			{
				target: '#avatar',
				title: 'Avatar',
				description: 'Avatar is a graphical representation of a user.'
			},
			{
				target: '#tour',
				title: 'Tour',
				description: 'Tour is a guided tour of the application.',
				placement: 'top'
			}
		]
	});
	const startTour = () => {
		tour.currentStep = 0;
		tour.active = true;
	};
	let checkbox_choices = [
		{ value: 'svelte', label: 'svelte' },
		{ value: 'vue', label: 'Vue JS' },
		{ value: 'react', label: 'React', checked: true },
		{ value: 'angular', label: 'Angular' }
	];
	let checkbox_group = $state([]);
</script>

<ThemeProvider {theme}>
	<div class="flex h-screen items-center justify-center">
		<Button size="xl" href="/docs/components/buttons">See Docs</Button>
	</div>
	<div class="flex flex-col gap-4 p-8 pb-24">
		<div id="accordion">
			<h1>accordion</h1>
			<Accordion>
				<AccordionItem>
					{#snippet header()}
						Accordion Item 1
					{/snippet}
					Hello
				</AccordionItem>
				<AccordionItem>
					{#snippet header()}
						Accordion Item 2
					{/snippet}
					Hello
				</AccordionItem>
			</Accordion>
		</div>
		<div id="alert">
			<h1>AlertProps</h1>
			<Alert>Hello my enemy</Alert>
			<Alert color="blue" dismissable closeIcon={CloseButton}>Hello my friend</Alert>
			<Alert color="gray" border={true}>
				<div class="flex items-center gap-2">
					<i class="icon">
						<svg
							fill="currentColor"
							aria-hidden="true"
							width="1em"
							height="1em"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM9.5 8.91a.5.5 0 0 1 1 0V13.6a.5.5 0 0 1-1 0V8.9Zm-.25-2.16a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
								fill="currentColor"
							></path>
						</svg>
					</i>
					<p>Message providing information to the user with actionable insights.</p>
					<CloseButton></CloseButton>
				</div>
			</Alert>
			<Alert color="indigo" border={true} rounded={false}>
				<div class="flex items-center gap-2">
					<svg
						class="icon"
						fill="currentColor"
						aria-hidden="true"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM9.5 8.91a.5.5 0 0 1 1 0V13.6a.5.5 0 0 1-1 0V8.9Zm-.25-2.16a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
							fill="currentColor"
						></path>
					</svg>
					<p>Message providing information to the user with actionable insights.</p>
					<CloseButton></CloseButton>
				</div>
			</Alert>
		</div>

		<div id="avatar">
			<h1>avatar</h1>
			<div class="flex gap-x-1">
				<Avatar>A</Avatar>
				<Avatar>R</Avatar>
				<Avatar>M</Avatar>
				<Avatar>I</Avatar>
				<Avatar dot={{ color: 'green', placement: 'top-left' }}>N</Avatar>
			</div>
			<div class="flex gap-x-1">
				<Avatar size="xs">A</Avatar>
				<Avatar size="sm">R</Avatar>
				<Avatar size="md">M</Avatar>
				<Avatar size="lg">I</Avatar>
				<Avatar size="xl">N</Avatar>
			</div>
			<div class="flex gap-x-1">
				<Avatar stacked dot={{ color: 'green', placement: 'top-left' }}>A</Avatar>
				<Avatar stacked dot={{ color: 'green', placement: 'top-left' }}>R</Avatar>
				<Avatar stacked dot={{ color: 'green', placement: 'top-left' }}>M</Avatar>
				<Avatar stacked dot={{ color: 'green', placement: 'top-left' }}>I</Avatar>
				<Avatar stacked dot={{ color: 'green', placement: 'top-left' }}>N</Avatar>
			</div>
		</div>
		<h1>badge</h1>
		<div>
			<Badge>Default</Badge>
			<Badge color="amber">Amber</Badge>
			<Badge color="red">Red</Badge>
			<Badge color="green">Green</Badge>
			<Badge color="yellow">Yellow</Badge>
			<Badge color="indigo">Indigo</Badge>
			<Badge color="violet">Violet</Badge>
			<Badge color="purple">Purple</Badge>
			<Badge color="fuchsia">Fuchsia</Badge>
			<Badge color="pink">Pink</Badge>
			<Badge color="rose">Rose</Badge>
		</div>
		<div>
			<Badge
				size="xs"
				color="blue"
				classes={{ linkClass: 'text-green-500' }}
				href="https://www.google.com">Default xs</Badge
			>
			<Badge size="sm">Default sm</Badge>
			<Badge size="md">Default md</Badge>
			<Badge size="lg">Default lg</Badge>
			<Badge size="md" classes={{}} href="https://www.google.com" dismissable>Default xl</Badge>
		</div>
		<h1>banner</h1>
		<Banner class="absolute">
			<p
				class="me-8 flex items-center text-sm font-normal text-gray-500 md:me-0 dark:text-gray-400"
			>
				<span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
					<span class="sr-only">Light bulb</span>
				</span>
				<span>
					New brand identity has been launched for the <a
						href="https://flowbite.com"
						class="inline font-medium text-primary-600 underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:text-primary-500 dark:decoration-1"
					>
						Flowbite Library
					</a>
				</span>
			</p>
		</Banner>

		<h1>bottom-navigation</h1>
		<BottomNav
			{activeUrl}
			navType="application"
			position="fixed"
			classes={{ inner: 'grid-cols-4' }}
			activeClass="text-cyan-700"
		>
			<BottomNavItem btnName="Home" href="/" appBtnPosition="left">Home</BottomNavItem>
			<BottomNavItem btnName="Wallet" href="/wallet" appBtnPosition="middle">Wallet</BottomNavItem>
			<BottomNavItem btnName="Settings" href="/settings" appBtnPosition="middle"
				>Settings</BottomNavItem
			>
			<BottomNavItem btnName="Profile" href="/profile" appBtnPosition="right">Profile</BottomNavItem
			>
		</BottomNav>
		<h1>breadcrumb</h1>
		<Breadcrumb classes={{ list: 'text-red-500' }} solid>
			<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
			<BreadcrumbItem>Profile</BreadcrumbItem>
		</Breadcrumb>
		<Breadcrumb aria-label="Solid background breadcrumb example" solid>
			<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/">Projects</BreadcrumbItem>
			<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
		</Breadcrumb>

		<h1>button group</h1>
		<ButtonGroup class="*:ring-primary-700!">
			<Button>Profile</Button>
			<Button>Settings</Button>
			<Button>Messages</Button>
		</ButtonGroup>
		<h1>buttons</h1>
		<div class="flex gap-x-1">
			<Button>Default</Button>
			<Button color="alternative">Alternative</Button>
			<Button color="dark">Dark</Button>
			<Button color="light">Light</Button>
			<Button color="blue">Blue</Button>
			<Button color="green">Green</Button>
			<Button color="red">Red</Button>
			<Button color="yellow">Yellow</Button>
			<Button color="purple">Purple</Button>
		</div>
		<div class="flex gap-x-1">
			<Button pill>Default</Button>
			<Button pill color="alternative">Alternative</Button>
			<Button pill color="dark">Dark</Button>
			<Button pill color="light">Light</Button>
			<Button pill color="blue">Blue</Button>
			<Button pill color="green">Green</Button>
			<Button pill color="red">Red</Button>
			<Button pill color="yellow">Yellow</Button>
			<Button pill color="purple">Purple</Button>
		</div>
		<div class="flex gap-x-1">
			<GradientButton color="blue">Blue</GradientButton>
			<GradientButton color="green">Green</GradientButton>
			<GradientButton color="cyan">Cyan</GradientButton>
			<GradientButton color="teal">Teal</GradientButton>
			<GradientButton color="lime">Lime</GradientButton>
			<GradientButton color="red">Red</GradientButton>
			<GradientButton color="pink">Pink</GradientButton>
		</div>
		<div class="flex gap-x-1">
			<GradientButton color="purpleToBlue">Purple to Blue</GradientButton>
			<GradientButton color="cyanToBlue">Cyan to Blue</GradientButton>
			<GradientButton color="greenToBlue">Green to Blue</GradientButton>
			<GradientButton color="purpleToPink">Purple to Pink</GradientButton>
			<GradientButton color="pinkToOrange">Pink to Orange</GradientButton>
			<GradientButton color="tealToLime">Teal to Lime</GradientButton>
			<GradientButton color="redToYellow">Red to Yellow</GradientButton>
		</div>
		<h1>card</h1>
		<Card href="/cards" class="p-4 sm:p-6 md:p-8">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Noteworthy technology acquisitions 2021
			</h5>
			<p class="leading-tight font-normal text-gray-700 dark:text-gray-400">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
		</Card>
		<h1>carousel</h1>
		<div class="max-w-4xl space-y-4">
			<Carousel {images} bind:index>
				<Controls />
				<CarouselIndicators />
			</Carousel>
			<Thumbnails {images} bind:index />
		</div>
		<h1>clipboard</h1>
		<div class="flex gap-x-1">
			<input bind:value class="w-64" />
			<Clipboard bind:value bind:success class="w-24">
				{#if success}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						color="currentColor"
						class="h-5 w-5 shrink-0"
						viewBox="0 0 24 24"
						aria-hidden="true"
						><!----><!----><path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5 11.917 9.724 16.5 19 7.5"
							stroke-width="2"
						></path></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-5 w-5 shrink-0"
						viewBox="0 0 24 24"
						aria-hidden="true"
						><!----><!----><path
							fill-rule="evenodd"
							d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Z"
							clip-rule="evenodd"
						></path></svg
					>
				{/if}
			</Clipboard>
		</div>
		<h1>dark mode</h1>
		<div class="flex gap-x-1">
			<DarkMode class="border text-primary-500 dark:border-gray-800 dark:text-primary-600" />
		</div>
		<h1>datepicker</h1>
		<div class="mb-64 md:w-1/2">
			<Datepicker bind:value={selectedDate} />
			<p class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p>
		</div>
		<div class="md:w-1/2">
			<Datepicker inline bind:value={selectedDate} />
			<p class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p>
		</div>
		<div class="mb-64 md:w-1/2">
			<Datepicker dateFormat={{ year: 'numeric', month: 'short', day: '2-digit' }} />
		</div>
		<div class="mb-64 md:w-1/2">
			<Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="blue" />
			<p class="mt-4">
				Selected range:
				{dateRange.from ? dateRange.from.toLocaleDateString() : 'None'} -
				{dateRange.to ? dateRange.to.toLocaleDateString() : 'None'}
			</p>
		</div>
		<h1>device mockup</h1>
		<DeviceMockup
			device="android"
			classes={{
				leftBot: 'bg-red-500',
				right: 'bg-blue-500',
				leftMid: 'bg-purple-500',
				leftTop: 'bg-yellow-500'
			}}
		>
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
				class="h-[572px] w-[272px] dark:hidden"
				alt="default example 1"
			/>
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
				class="hidden h-[572px] w-[272px] dark:block"
				alt="default example 2"
			/>
		</DeviceMockup>
		<Ios
			classes={{
				leftBot: 'bg-red-500',
				right: 'bg-blue-500',
				top: 'bg-green-500',
				leftTop: 'bg-yellow-500',
				slot: 'bg-pink-500'
			}}
		>
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
				class="h-[572px] w-[272px] dark:hidden"
				alt="default example 1"
			/>
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
				class="hidden h-[572px] w-[272px] dark:block"
				alt="default example 2"
			/>
		</Ios>
		<Android
			classes={{
				leftBot: 'bg-red-500',
				right: 'bg-blue-500',
				top: 'bg-green-500',
				leftTop: 'bg-yellow-500',
				leftMid: 'bg-purple-500',
				slot: 'bg-pink-500'
			}}
		>
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
				class="h-[572px] w-[272px] dark:hidden"
				alt="default example 1"
			/>
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
				class="hidden h-[572px] w-[272px] dark:block"
				alt="default example 2"
			/>
		</Android>

		<h1>drawer</h1>
		<div class="text-center">
			<Button onclick={() => (open = true)}>Show drawer</Button>
		</div>

		<Drawer bind:open aria-labelledby="drawer-label">
			<p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
				Supercharge your hiring by taking advantage of our for Flowbite Docs + Job Board. Unlimited
				access to over 190K top-ranked candidates and the #1 design job board.
			</p>
			<div class="grid grid-cols-2 gap-2">
				<Button color="light" href="/">Learn more</Button>
				<Button href="/" class="px-4">Get access</Button>
			</div>
		</Drawer>
		<div class="text-center">
			<Button onclick={() => ((placement = 'top'), (open5 = true))}>Top drawer</Button>
			<div class="my-2 space-x-6">
				<Button onclick={() => ((placement = 'left'), (open5 = true))}>Left drawer</Button>
				<Button onclick={() => ((placement = 'right'), (open5 = true))}>Right drawer</Button>
			</div>
			<Button onclick={() => ((placement = 'bottom'), (open5 = true))}>Bottom drawer</Button>
		</div>

		<Drawer {placement} bind:open={open5}>
			<h5
				class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
			>
				Info
			</h5>
			<p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
				Supercharge your hiring by taking advantage of our e for Flowbite Docs + Job Board.
				Unlimited access to over 190K top-ranked candidates and the #1 design job board.
			</p>
			<div class="grid grid-cols-2 gap-2">
				<Button color="light" href="/">Learn more</Button>
				<Button href="/" class="px-4">Get access</Button>
			</div>
		</Drawer>
		<h1>modal</h1>
		<div class="flex">
			<Button onclick={() => (popupModal = true)}>Pop-up modal</Button>
		</div>

		<Modal form bind:open={popupModal} size="xs" transition={slide} permanent>
			<div class="text-center">
				<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					Are you sure you want to delete this product?
				</h3>
				<div class="space-x-2">
					<Button type="submit" value="yes" color="red">Yes, I'm sure</Button>
					<Button type="submit" value="no" color="alternative">No, cancel</Button>
				</div>
			</div>
		</Modal>
		<h1>footer</h1>
		<Footer>
			<FooterCopyright href="/" by="Flowbite™" year={2022} />
			<FooterLinkGroup
				class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
			>
				<FooterLink href="/">About</FooterLink>
				<FooterLink href="/">Privacy Policy</FooterLink>
				<FooterLink href="/">Licensing</FooterLink>
				<FooterLink href="/">Contact</FooterLink>
			</FooterLinkGroup>
		</Footer>
		<h1>dropdown</h1>
		<div class="flex">
			<Button
				>Dropdown button<ChevronDownOutline
					class="ms-2 h-6 w-6 text-white dark:text-white"
				/></Button
			>
			<Dropdown simple>
				<DropdownItem>Dashboard</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Earnings</DropdownItem>
				<DropdownItem>Sign out</DropdownItem>
			</Dropdown>
		</div>
		<h1>kanban</h1>
		<KanbanBoard bind:columns></KanbanBoard>
		<h1>kbd</h1>
		<div class="flex">
			<Kbd>Ctrl</Kbd>+<Kbd>C</Kbd> <span class="ml-2 text-gray-500">to copy</span>
		</div>
		<div class="flex">
			<Kbd>Ctrl</Kbd>+<Kbd>V</Kbd> <span class="ml-2 text-gray-500">to paste</span>
		</div>
		<h1>list-group</h1>
		<div class="flex">
			<Listgroup
				rounded={true}
				horizontal={false}
				active
				items={buttons}
				onclick={(e) => alert(Object.entries(e?.detail ?? {}))}
			></Listgroup>
		</div>
		<h1>navbar</h1>
		<Navbar>
			<NavBrand href="/">
				<img src="/images/s-ui-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Flowbite</span
				>
			</NavBrand>
			<NavHamburger />
			<NavUl>
				<NavLi href="/">Home</NavLi>
				<NavLi class="cursor-pointer">
					Mega menu<ChevronDownOutline
						class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
					/>
				</NavLi>
				<MegaMenu items={menu}>
					{#snippet children({ item })}
						<a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500"
							>{item.name}</a
						>
					{/snippet}
				</MegaMenu>
				<NavLi href="/services">Services</NavLi>
				<NavLi href="/services">Products</NavLi>
				<NavLi href="/services">Contact</NavLi>
			</NavUl>
		</Navbar>
		<h1>pagination</h1>
		<div class="flex">
			<PaginationNav color="" {currentPage} {totalPages} onPageChange={handlePageChange} />
		</div>
		<h1>popover</h1>
		<div class="flex">
			<Button>Default popover</Button>
			<Popover class="w-64 text-sm font-light " title="Popover title" placement="right">
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
		<h1>progress</h1>
		<div class="flex">
			<Progressbar color="cyan" progress="50" />
		</div>
		<h1>rating</h1>
		<div class="flex">
			<!-- <Rating id="example-1" icon={Star} total={5} size={50} rating={1.4} />
			<Rating id="example-1b" icon={Thumbup} total={5} size={50} rating={4.66} />
			<Rating
				id="example-1b"
				icon={wrapper({ fillColor: '#008800', strokeColor: '#008800' })}
				total={5}
				size={50}
				rating={4.72}
			/> -->
		</div>
		<h1>skeleton</h1>
		<Skeleton size="sm" class="my-8" />
		<Skeleton size="2xl" class="mt-8 mb-2.5" />
		<ImagePlaceholder size="sm" class="my-8" />
		<CardPlaceholder size="sm" class="my-8" />
		<ListPlaceholder itemNumber={5} size="md" class="my-8" />
		<TestimonialPlaceholder class="my-8" />
		<TextPlaceholder size="sm" class="my-8" />
		<VideoPlaceholder size="sm" class="my-8" />
		<WidgetPlaceholder class="my-8" />

		<h1>speed dial</h1>
		<SpeedDialTrigger
			color={$isDark ? 'cyanToBlue' : 'pinkToOrange'}
			gradient
			class="fixed inset-e-6 bottom-6"
		/>
		<SpeedDial>
			<SpeedDialButton name="Share">
				<ShareNodesSolid class="h-6 w-6" />
			</SpeedDialButton>
			<SpeedDialButton name="Print">
				<PrinterSolid class="h-6 w-6" />
			</SpeedDialButton>
			<SpeedDialButton name="Download">
				<DownloadSolid class="h-6 w-6" />
			</SpeedDialButton>
			<SpeedDialButton name="Copy">
				<FileCopySolid class="h-6 w-6" />
			</SpeedDialButton>
		</SpeedDial>
		<h1>toast</h1>
		<Toast color="orange" dismissable={true} transition={blur}>
			{#snippet icon()}
				<ImageOutline class="h-6 w-6" />
			{/snippet}
			test
		</Toast>
		<h1>timeline</h1>
		<Timeline>
			<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
					and pre-order E-commerce & Marketing pages.
				</p>
				<Button color="alternative">Learn more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					All of the pages and components are first designed in Figma and we keep a parity between
					the two versions even as we update the project.
				</p>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Get started with dozens of web components and interactive elements built on top of
					Tailwind CSS.
				</p>
			</TimelineItem>
		</Timeline>
		<h1>activity</h1>
		<Activity>
			<ActivityItem {activities} />
		</Activity>
		<h1>group</h1>
		<Group date="January 13th, 2022">
			<GroupItem timelines={groupTimelines} />
		</Group>
		<div id="tour">
			<h1>tour</h1>
			<div>
				<Button onclick={startTour}>Start Tour</Button>
			</div>
		</div>
		<Tour bind:active={tour.active} bind:currentStep={tour.currentStep} steps={tour.steps} />
		<h1>a</h1>
		<A href="/" color="primary">Link</A>
		<A href="/" color="amber">Link</A>
		<A href="/" color="green">Link</A>
		<h1>blockquote</h1>
		<Blockquote size="base">
			"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."
		</Blockquote>
		<h1>description list</h1>
		<DescriptionList tag="dd">
			<dt>Description list</dt>
			<dd>A list of terms and their definitions.</dd>
		</DescriptionList>
		<h1>heading</h1>
		<Heading tag="h1">Heading 1</Heading>
		<Heading tag="h2">Heading 2</Heading>
		<Heading tag="h3">Heading 3</Heading>
		<Heading tag="h4">Heading 4</Heading>
		<Heading tag="h5">Heading 5</Heading>
		<Heading tag="h6">Heading 6</Heading>
		<h1>hr & paragraph</h1>
		<P>
			Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.
		</P>
		<Hr class="h-1 w-64">
			<QuoteSolid class="h-6 w-6 text-gray-700 dark:text-gray-300" />
		</Hr>
		<P>
			Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.
		</P>
		<h1>img</h1>
		<Img src="https://s-ui.com/images/examples/image-1@2x.jpg" alt="default example 1" />
		<h1>layout</h1>
		<Layout>
			<h1>Header</h1>
			<h1>Main</h1>
			<h1>Footer</h1>
		</Layout>
		<h1>list</h1>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li icon>
				<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
				At least 10 characters (and up to 100 characters)
			</Li>
			<Li icon>
				<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
				At least one lowercase character
			</Li>
			<Li icon>
				<CloseCircleSolid class="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
				Inclusion of at least one special character, e.g., ! @ # ?
			</Li>
		</List>
		<h1>mark</h1>
		<P>this is a <Mark>marked</Mark> text</P>
		<h1>secondary</h1>
		<p>this is a <Secondary>secondary</Secondary> text</p>
		<h1>span</h1>
		<P>this is a <Span gradient="blueToGreen" highlight="lime" underline>span</Span> text</P>
		<h1>video</h1>
		<Video src="https://s-ui.com/videos/flowbite.mp4" controls />
		<h1>label</h1>
		<Label color="primary">Label</Label>
		<h1>checkbox</h1>
		<Checkbox>Default checkbox</Checkbox>
		<Checkbox checked color="blue">Checked state</Checkbox>
		<Checkbox indeterminate>Indeterminate state</Checkbox>
		<Hr></Hr>
		<p class="my-2">Choices: {checkbox_group.join(', ')}</p>
		<div class="flex gap-2">
			<Checkbox
				bind:group={checkbox_group}
				choices={checkbox_choices}
				color="green"
				classes={{ div: 'p-1' }}
			/>
		</div>
		<h1>checkbox button</h1>
		<div>
			<CheckboxButton bind:group={checkbox_group} value="Apple"
				><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton
			>
			<CheckboxButton bind:group={checkbox_group} value="Facebook"
				><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton
			>
			<CheckboxButton bind:group={checkbox_group} value="Discord"
				><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton
			>
			<CheckboxButton bind:group={checkbox_group} value="Dropbox"
				><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton
			>
		</div>

		<ButtonGroup>
			<CheckboxButton bind:group={checkbox_group} value="Apple"
				><AppleSolid class="h-6 w-6" />Apple</CheckboxButton
			>
			<CheckboxButton bind:group={checkbox_group} value="Facebook"
				><FacebookSolid class="h-6 w-6" />Facebook</CheckboxButton
			>
			<CheckboxButton bind:group={checkbox_group} value="Discord"
				><DiscordSolid class="h-6 w-6" />Discord</CheckboxButton
			>
			<CheckboxButton bind:group={checkbox_group} value="Dropbox"
				><DropboxSolid class="h-6 w-6" />Dropbox</CheckboxButton
			>
		</ButtonGroup>
		<ThemeSelector />

		<div class="mt-6">
			<Tabs tabStyle="underline">
				<TabItem open title="Home">
					<p>Home</p>
				</TabItem>
				<TabItem title="Settings">
					<p>Settings</p>
				</TabItem>
			</Tabs>
		</div>
	</div>
</ThemeProvider>
