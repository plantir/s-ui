<script lang="ts">
	import { Toggle } from "$lib/index";
</script>

<Toggle>
	{#snippet offLabel()}
		dark mode
	{/snippet}
	light mode
</Toggle>
