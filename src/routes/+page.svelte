<script lang="ts">
	import {
		Alert,
		ThemeProvider,
		type ThemeConfig,
		AccordionItem,
		Accordion,
		Avatar,
		Badge
	} from '$lib';
	import Button from './Button.svelte';
	const theme: ThemeConfig = {
		alert: 'p-3'
	};
</script>

<ThemeProvider {theme}>
	<div class="flex flex-col gap-4 p-8">
		<h1>accordion</h1>
		<Accordion>
			<AccordionItem>
				{#snippet header()}
					<h2 class="text-lg font-medium">Accordion Item 1</h2>
				{/snippet}
				Hello
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}
					<h2 class="text-lg font-medium">Accordion Item 1</h2>
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
			<Badge color="amber">Gray</Badge>
			<Badge color="red">Red</Badge>
			<Badge color="green">Green</Badge>
			<Badge color="yellow">Yellow</Badge>
			<Badge color="indigo">Indigo</Badge>
			<Badge color="purple">Purple</Badge>
			<Badge color="pink">Pink</Badge>
		</div>
	</div>
</ThemeProvider>
