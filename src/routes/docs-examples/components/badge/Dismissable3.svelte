<script lang="ts">
	import { Badge } from "$lib/index";

	function handleClose(event: Event) {
		event.preventDefault();
		alert('Badge dismissed');
	}
</script>

<Badge dismissable large onclose={handleClose}>Default</Badge>
