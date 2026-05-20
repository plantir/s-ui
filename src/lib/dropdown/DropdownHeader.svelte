<script lang="ts">
	import { dropdownHeader } from './theme.js';
	import clsx from 'clsx';
	import type { DropdownHeaderProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { children, class: className, ...restProps }: DropdownHeaderProps = $props();

	const theme = $derived(getTheme('dropdownHeader'));
</script>

<div {...restProps} class={dropdownHeader({ class: clsx(theme, className) })}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L701)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
