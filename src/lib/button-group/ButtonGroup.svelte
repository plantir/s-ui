<script lang="ts">
	import { buttonGroup } from './theme.js';
	import clsx from 'clsx';
	import type { ButtonGroupProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { setButtonGroupContext } from '$lib/context';

	let {
		children,
		size = 'md',
		disabled,
		class: className,
		...restProps
	}: ButtonGroupProps = $props();

	const theme = $derived(getTheme('buttonGroup'));

	let groupClass = $derived(buttonGroup({ size, class: clsx(theme, className) }));

	// Create a reactive context object
	// The object itself stays the same, but its properties are reactive
	const reactiveCtx = {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		}
	};

	setButtonGroupContext(reactiveCtx);
</script>

<div {...restProps} class={groupClass} role="group">
	{@render children()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[ButtonGroupProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L320)
## Props
@prop children
@prop size = "md"
@prop disabled
@prop class: className
@prop ...restProps
-->
