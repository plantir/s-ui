<script lang="ts">
	import { Tabs, TabItem } from 's-ui';
</script>

<Tabs
	tabStyle="full"
	class="flex divide-x divide-default rounded-base shadow-xs rtl:divide-x-reverse"
>
	<TabItem class="w-full" open>
		{#snippet titleSlot()}
			<span>Profile</span>
		{/snippet}
		<p class="text-sm text-body">
			<b>Profile:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem class="w-full">
		{#snippet titleSlot()}
			<span>Dashboard</span>
		{/snippet}
		<p class="text-sm text-body">
			<b>Dashboard:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem class="w-full">
		{#snippet titleSlot()}
			<span>Settings</span>
		{/snippet}
		<p class="text-sm text-body">
			<b>Settings:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem class="w-full">
		{#snippet titleSlot()}
			<span>Users</span>
		{/snippet}
		<p class="text-sm text-body">
			<b>Users:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
</Tabs>
