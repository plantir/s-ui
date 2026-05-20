<script lang="ts">
	import { Timeline, TimelineItem } from 's-ui';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<Timeline order="horizontal">
	<TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
		{#snippet orientationSlot()}
			<div class="flex items-center">
				<div
					class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-softer ring-0 ring-buffer sm:ring-8"
				>
					<CalendarWeekSolid class="h-4 w-4 text-fg-brand-strong" />
				</div>
				<div class="hidden h-px w-full bg-neutral-quaternary sm:flex"></div>
			</div>
		{/snippet}
		<p class="text-base font-normal text-body">
			Get started with dozens of web components and interactive elements.
		</p>
	</TimelineItem>
	<TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
		{#snippet orientationSlot()}
			<div class="flex items-center">
				<div
					class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-softer ring-0 ring-buffer sm:ring-8"
				>
					<CalendarWeekSolid class="h-4 w-4 text-fg-brand-strong" />
				</div>
				<div class="hidden h-px w-full bg-neutral-quaternary sm:flex"></div>
			</div>
		{/snippet}
		<p class="text-base font-normal text-body">
			Get started with dozens of web components and interactive elements.
		</p>
	</TimelineItem>
	<TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
		{#snippet orientationSlot()}
			<div class="flex items-center">
				<div
					class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-softer ring-0 ring-buffer sm:ring-8"
				>
					<CalendarWeekSolid class="h-4 w-4 text-fg-brand-strong" />
				</div>
				<div class="hidden h-px w-full bg-neutral-quaternary sm:flex"></div>
			</div>
		{/snippet}
		<p class="text-base font-normal text-body">
			Get started with dozens of web components and interactive elements.
		</p>
	</TimelineItem>
</Timeline>
