<script lang="ts">
	import { Tags } from "$lib/index";
	let tags: string[] = $state([]);
</script>

<Tags bind:value={tags} inputProps={{ id: 'my-tags-input' }} />
