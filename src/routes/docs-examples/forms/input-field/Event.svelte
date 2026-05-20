<script lang="ts">
	import { Input } from 's-ui';
</script>

<Input
	clearable
	clearableOnClick={() => {
		alert('Clicked close button!');
	}}
	class="my-4"
/>
