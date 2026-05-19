<script lang="ts">
  import { Tooltip, Button } from "$lib";
</script>

<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy="#disable-arrow">Tooltip content</Tooltip>
