<script lang="ts">
	import clsx from 'clsx';
	import { chat } from './theme.js';
	import type { ChatProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { setChatContext } from '$lib/context';

	let { children, placement = 'start', class: className, ...restProps }: ChatProps = $props();

	const theme = $derived(getTheme('chat'));

	setChatContext({
		get placement() {
			return placement;
		}
	});
</script>

<div {...restProps} class={chat({ placement, class: clsx(theme, className) })}>
	{@render children?.()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[ChatProps]
## Props
@prop children
@prop placement = "start"
@prop class: className
@prop ...restProps
-->
