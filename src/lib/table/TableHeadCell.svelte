<script lang="ts">
	import clsx from 'clsx';
	import { tableHeadCell } from './theme.js';
	import type { TableHeadCellProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { getCurrentTheme } from '$lib/theme-selector/themeStore.svelte.js';

	let { children, class: className, ...restProps }: TableHeadCellProps = $props();

	const theme = $derived(getTheme('tableHeadCell'));
	let base = $derived(tableHeadCell({ theme: getCurrentTheme() as 'fluent' | 'default', class: clsx(theme, className) }));
</script>

<th {...restProps} class={base}>
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
