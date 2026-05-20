<script lang="ts">
	import { Tags } from 's-ui';
	let tags: string[] = $state([]);
</script>

<Tags bind:value={tags} inputProps={{ id: 'my-tags-input' }} />
