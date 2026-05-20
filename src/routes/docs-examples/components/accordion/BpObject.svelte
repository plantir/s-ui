<script lang="ts">
	import { AccordionItem, useBreakpoints, P } from 's-ui';
	const breakpoints = useBreakpoints();
</script>

<AccordionItem open={breakpoints.md}>
	{#snippet header()}Opens on medium screens+{/snippet}
	<P>Content for tablets and desktop users.</P>
</AccordionItem>
