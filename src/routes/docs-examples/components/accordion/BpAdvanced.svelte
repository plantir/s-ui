<script lang="ts">
  import { AccordionItem, useCurrentBreakpoint, useBreakpoints, P } from "$lib";
  const breakpoints = useBreakpoints();
  const getCurrentBreakpoint = useCurrentBreakpoint();
  const currentBp = $derived(getCurrentBreakpoint());
</script>

<AccordionItem open={breakpoints.lg}>
  {#snippet header()}Desktop Only (Current: {currentBp}){/snippet}
  <P>This opens only on large screens and above.</P>
</AccordionItem>
