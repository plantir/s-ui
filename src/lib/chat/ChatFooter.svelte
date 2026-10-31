<script lang="ts">
	import clsx from 'clsx';
	import { chatFooter } from './theme.js';
	import type { ChatPartProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { getChatContext } from '$lib/context';

	let { children, class: className, ...restProps }: ChatPartProps = $props();

	const theme = $derived(getTheme('chatFooter'));
	const ctx = getChatContext();
	const placement = $derived(ctx?.placement ?? 'start');
</script>

<div {...restProps} class={chatFooter({ placement, class: clsx(theme, className) })}>
	{@render children?.()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[ChatPartProps]
## Props
@prop children
@prop class: className
@prop ...restProps
-->
