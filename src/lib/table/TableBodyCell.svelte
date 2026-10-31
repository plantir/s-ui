<script lang="ts">
	import clsx from 'clsx';
	import { tableBodyCell } from './theme.js';
	import type { TableBodyCellProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import {  getCurrentThemeVariant } from '$lib/theme-selector/themeStore.svelte.js';

	let { children, class: className, colspan, onclick, ...restProps }: TableBodyCellProps = $props();

	const theme = $derived(getTheme('tableBodyCell'));
	let base  = $derived(
		tableBodyCell({
			theme: getCurrentThemeVariant(),
			class: clsx(theme, className)
		})
	);
</script>

<td {...restProps} class={base} colspan={colspan ?? 1}>
	{#if onclick}
		<button {onclick}>
			{#if children}
				{@render children()}
			{/if}
		</button>
	{:else if children}
		{@render children()}
	{/if}
</td>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[TableBodyCellProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L1803)
## Props
@prop children
@prop class: className
@prop colspan
@prop onclick
@prop ...restProps
-->
