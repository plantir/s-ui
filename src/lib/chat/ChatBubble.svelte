<script lang="ts">
	import clsx from 'clsx';
	import { chatBubble } from './theme.js';
	import type { ChatBubbleProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { getChatContext } from '$lib/context';

	let { children, color = 'gray', class: className, ...restProps }: ChatBubbleProps = $props();

	const theme = $derived(getTheme('chatBubble'));
	const ctx = getChatContext();
	const placement = $derived(ctx?.placement ?? 'start');
</script>

<div {...restProps} class={chatBubble({ placement, color, class: clsx(theme, className) })}>
	{@render children?.()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[ChatBubbleProps]
## Props
@prop children
@prop color = "gray"
@prop class: className
@prop ...restProps
-->
