<script lang="ts">
	import { dropdownDivider } from './theme.js';
	import clsx from 'clsx';
	import type { DropdownDividerProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { class: className, ...restProps }: DropdownDividerProps = $props();

	const theme = $derived(getTheme('dropdownDivider'));
</script>

<div {...restProps} class={dropdownDivider({ class: clsx(theme, className) })}></div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L699)
## Props
@prop class: className
@prop ...restProps
-->
