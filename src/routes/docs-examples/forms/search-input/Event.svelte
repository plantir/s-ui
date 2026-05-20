<script lang="ts">
	import { Search } from 's-ui';
</script>

<Search
	clearable
	clearableOnClick={() => {
		alert('Clicked clear button!');
	}}
/>
