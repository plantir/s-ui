<script lang="ts">
  import { Tooltip, Button, P } from "$lib";
</script>

<Button id="specific-button-anywhere-on-page">Default tooltip</Button>
<P>hi mom</P>
<P>lorem ipsum, content blah blah, other stuff</P>
<Tooltip triggeredBy="#specific-button-anywhere-on-page">Tooltip content</Tooltip>
