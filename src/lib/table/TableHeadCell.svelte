<script lang="ts">
	import clsx from 'clsx';
	import { tableHeadCell } from './theme.js';
	import type { TableHeadCellProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { children, class: className, ...restProps }: TableHeadCellProps = $props();

	const theme = $derived(getTheme('tableHeadCell'));
</script>

<th {...restProps} class={tableHeadCell({ class: clsx(theme, className) })}>
	{#if children}
		{@render children()}
	{/if}
</th>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[TableHeadCellProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L1819)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
