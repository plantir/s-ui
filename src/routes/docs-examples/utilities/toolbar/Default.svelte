<script lang="ts">
	import { Toolbar, ToolbarButton } from 's-ui';
	import { HomeOutline, EnvelopeOutline, ImageOutline } from 'flowbite-svelte-icons';
</script>

<Toolbar>
	<ToolbarButton><HomeOutline class="h-6 w-6" /></ToolbarButton>
	<ToolbarButton><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
	<ToolbarButton><ImageOutline class="h-6 w-6" /></ToolbarButton>
</Toolbar>
