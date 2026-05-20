<script lang="ts">
	import { Label, Fileupload } from 's-ui';

	let fileuploadprops = {
		id: 'user_avatar'
	};
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
