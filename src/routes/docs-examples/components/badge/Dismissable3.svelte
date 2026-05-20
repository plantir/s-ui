<script lang="ts">
	import { Badge } from 's-ui';

	function handleClose(event: Event) {
		event.preventDefault();
		alert('Badge dismissed');
	}
</script>

<Badge dismissable large onclose={handleClose}>Default</Badge>
