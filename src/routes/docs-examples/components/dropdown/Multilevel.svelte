<script lang="ts">
	import { Button, Dropdown, DropdownItem } from 's-ui';
	import { ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white" /></Button>
<Dropdown simple>
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem class="flex items-center justify-between">
		Dropdown<ChevronRightOutline class="ms-2 h-6 w-6 text-fg-brand" />
	</DropdownItem>
	<Dropdown simple placement="right-start">
		<DropdownItem>Overview</DropdownItem>
		<DropdownItem>My downloads</DropdownItem>
		<DropdownItem>Billing</DropdownItem>
	</Dropdown>
	<DropdownItem>Earnings</DropdownItem>
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>
