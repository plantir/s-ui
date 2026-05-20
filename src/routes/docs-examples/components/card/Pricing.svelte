<script lang="ts">
	import { Card, Button } from 's-ui';
	import { CheckCircleSolid } from 'flowbite-svelte-icons';
</script>

<Card class="p-4 sm:p-8 md:p-10">
	<h5 class="mb-4 text-xl font-medium text-body">Standard plan</h5>
	<div class="flex items-baseline text-heading">
		<span class="text-3xl font-semibold">$</span>
		<span class="text-5xl font-extrabold tracking-tight">49</span>
		<span class="ms-1 text-xl font-normal text-body">/month</span>
	</div>
	<!-- List -->
	<ul class="my-7 space-y-4">
		<li class="flex space-x-2 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-fg-brand" />
			<span class="text-base leading-tight font-normal text-body">2 team members</span>
		</li>
		<li class="flex space-x-2 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-fg-brand" />
			<span class="text-base leading-tight font-normal text-body">20GB Cloud storage</span>
		</li>
		<li class="flex space-x-2 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-fg-brand" />
			<span class="text-base leading-tight font-normal text-body">Integration help</span>
		</li>
		<li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-body-subtle" />
			<span class="text-base leading-tight font-normal text-body">Sketch Files</span>
		</li>
		<li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-body-subtle" />
			<span class="text-base leading-tight font-normal text-body">API Access</span>
		</li>
		<li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-body-subtle" />
			<span class="text-base leading-tight font-normal text-body">Complete documentation</span>
		</li>
		<li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
			<CheckCircleSolid class="h-4 w-4 text-body-subtle" />
			<span class="text-base leading-tight font-normal text-body">24×7 phone & email support</span>
		</li>
	</ul>
	<Button class="w-full">Choose plan</Button>
</Card>
