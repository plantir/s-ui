<script lang="ts">
	import { Radio } from 's-ui';
	let selectedValue = $state('2');
</script>

<Radio name="disabled-state" disabled value="1" bind:group={selectedValue}>Disabled radio</Radio>
<Radio name="disabled-state" disabled value="2" bind:group={selectedValue}>Disabled checked</Radio>
