<script lang="ts">
	import { Fileupload } from "$lib/index";
</script>

<Fileupload
	id="event"
	clearable
	clearableOnClick={() => {
		alert('Clicked close button!');
	}}
/>
