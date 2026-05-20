<script lang="ts">
	import { Textarea } from 's-ui';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...'
	};
</script>

<Textarea {...textareaprops} class="w-full" />
