<script lang="ts">
	import { Search } from "$lib/index";
</script>

<Search
	clearable
	clearableOnClick={() => {
		alert('Clicked clear button!');
	}}
/>
