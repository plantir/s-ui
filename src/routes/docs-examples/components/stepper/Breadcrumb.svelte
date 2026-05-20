<script lang="ts">
	import { BreadcrumbStepper } from 's-ui';
</script>

<BreadcrumbStepper
	steps={[
		{
			id: 1,
			label: 'Personal',
			shortLabel: 'Info',
			status: 'completed'
		},
		{
			id: 2,
			label: 'Account',
			shortLabel: 'Info',
			status: 'current'
		},
		{
			id: 3,
			label: 'Review',
			status: 'pending'
		}
	]}
/>
