<script lang="ts">
	import clsx from 'clsx';
	import { navbarContainer } from './theme.js';
	import type { NavContainerProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { children, fluid, class: className, ...restProps }: NavContainerProps = $props();

	const theme = $derived(getTheme('navbarContainer'));
</script>

<div {...restProps} class={navbarContainer({ fluid, class: clsx(theme, className) })}>
	{@render children?.()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[NavContainerProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L1199)
## Props
@prop children
@prop fluid
@prop class: className
@prop ...restProps
-->
