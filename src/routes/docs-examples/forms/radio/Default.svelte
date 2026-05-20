<script lang="ts">
	import { Radio } from 's-ui';
	let selectedValue = $state('2');
</script>

<Radio name="example1" value="1" bind:group={selectedValue}>Default radio</Radio>
<Radio name="example1" value="2" bind:group={selectedValue}>Checked state</Radio>
