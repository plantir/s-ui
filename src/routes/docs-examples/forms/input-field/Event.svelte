<script lang="ts">
	import { Input } from "$lib/index";
</script>

<Input
	clearable
	clearableOnClick={() => {
		alert('Clicked close button!');
	}}
	class="my-4"
/>
