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
		GradientButton
	} from '$lib';
	import { page } from '$app/state';
	const theme: ThemeConfig = {
		alert: 'p-3'
	};
	let activeUrl = $derived(page.url.pathname);
</script>

<ThemeProvider {theme}>
	<div class="flex flex-col gap-4 p-8 pb-24">
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
		<h1>AlertProps</h1>
		<Alert color="cyan">Hello my friend</Alert>
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
				<Button></Button>
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
				<Button></Button>
			</div>
		</Alert>
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
	</div>
</ThemeProvider>
