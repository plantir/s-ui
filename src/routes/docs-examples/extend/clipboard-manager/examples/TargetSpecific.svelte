<script lang="ts">
	import { ClipboardManager } from 's-ui';
</script>

<div id="article-content">
	<p>Your article content here...</p>
	<p>Users can select any text to save it.</p>
</div>

<ClipboardManager
	enableSelectionMenu={true}
	selectionTarget="#article-content"
	storageKey="specific-target"
/>
