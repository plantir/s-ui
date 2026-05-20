<script lang="ts">
	import clsx from 'clsx';
	import { layout } from './theme.js';
	import type { LayoutProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { children, class: className, ...restProps }: LayoutProps = $props();

	const theme = $derived(getTheme('layout'));

	let divCls = $derived(layout({ class: clsx(theme, className) }));
</script>

<div {...restProps} class={divCls}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[LayoutProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L2105)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
