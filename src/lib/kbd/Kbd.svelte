<script lang="ts">
	import { kbd } from './theme.js';
	import clsx from 'clsx';
	import type { KbdProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { children, class: className, ...restProps }: KbdProps = $props();

	const theme = $derived(getTheme('kbd'));

	const kbdCls = $derived(kbd({ class: clsx(theme, className) }));
</script>

<kbd {...restProps} class={kbdCls}>
	{@render children()}
</kbd>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[KbdProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L1110)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
