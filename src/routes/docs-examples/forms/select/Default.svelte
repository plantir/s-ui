<script lang="ts">
	import { Select, Label } from 's-ui';
	let selected = '';
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'de', name: 'Germany' },
		{ value: 'fr', name: 'France', disabled: true }
	];
</script>

<Label>
	Select an option
	<Select class="mt-2" items={countries} bind:value={selected} />
</Label>
