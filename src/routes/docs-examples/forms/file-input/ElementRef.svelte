<script lang="ts">
	import { Fileupload } from 's-ui';
</script>

<Fileupload
	id="event"
	clearable
	clearableOnClick={() => {
		alert('Clicked close button!');
	}}
/>
