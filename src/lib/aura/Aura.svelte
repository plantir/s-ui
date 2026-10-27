<script lang="ts">
	import clsx from 'clsx';
	import './aura.css';
	import { aura } from './theme.js';
	import type { AuraProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let {
		children,
		variant = 'default',
		color = 'primary',
		size = 'md',
		rounded = 'lg',
		duration,
		class: className,
		style,
		...restProps
	}: AuraProps = $props();

	const theme = $derived(getTheme('aura'));

	const auraCls = $derived(aura({ variant, color, size, rounded, class: clsx(theme, className) }));

	const auraStyle = $derived(
		[duration ? `--aura-duration: ${duration}ms` : '', style].filter(Boolean).join('; ') ||
			undefined
	);
</script>

<div {...restProps} class={auraCls} style={auraStyle}>
	{@render children?.()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[AuraProps]
## Props
@prop children
@prop variant = "default"
@prop color = "primary"
@prop size = "md"
@prop rounded = "lg"
@prop duration
@prop class: className
@prop style
@prop ...restProps
-->
