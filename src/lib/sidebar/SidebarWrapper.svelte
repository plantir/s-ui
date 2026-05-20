<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { children, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...restProps}>
	{@render children?.()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Props
@props: children: any;
-->
