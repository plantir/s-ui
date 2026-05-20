<script lang="ts">
	import { Timeline, TimelineItem } from 's-ui';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<Timeline order="vertical">
	<TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
		{#snippet orientationSlot()}
			<span
				class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-softer ring-8 ring-buffer"
			>
				<CalendarWeekSolid class="h-4 w-4 text-fg-brand-strong" />
			</span>
		{/snippet}
		<p class="mb-4 pl-4 text-base font-normal text-body">
			Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and
			pre-order E-commerce & Marketing pages.
		</p>
	</TimelineItem>
	<TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
		{#snippet orientationSlot()}
			<span
				class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-softer ring-8 ring-buffer"
			>
				<CalendarWeekSolid class="h-4 w-4 text-fg-brand-strong" />
			</span>
		{/snippet}
		<p class="pl-4 text-base font-normal text-body">
			All of the pages and components are first designed in Figma and we keep a parity between the
			two versions even as we update the project.
		</p>
	</TimelineItem>
	<TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
		{#snippet orientationSlot()}
			<span
				class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-softer ring-8 ring-buffer"
			>
				<CalendarWeekSolid class="h-4 w-4 text-fg-brand-strong" />
			</span>
		{/snippet}
		<p class="pl-4 text-base font-normal text-body">
			Get started with dozens of web components and interactive elements built on top of Tailwind
			CSS.
		</p>
	</TimelineItem>
</Timeline>
