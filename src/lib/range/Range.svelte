<script lang="ts">
	import { range } from './theme.js';
	import clsx from 'clsx';
	import type { RangeProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { getCurrentTheme } from '$lib/theme-selector/themeStore.svelte.js';

	let {
		value = $bindable(),
		appearance = 'auto',
		color = 'blue',
		size = 'md',
		inputClass,
		class: className,
		...restProps
	}: RangeProps = $props();

	const theme = $derived(getTheme('range'));
	// remove inputClass in next major version
	const inputCls = $derived(
		range({ appearance, color, size, theme:getCurrentTheme(), class: clsx(theme, inputClass, className) })
	);
</script>

<input type="range" bind:value {...restProps} class={inputCls} />

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[RangeProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L934)
## Props
@prop value = $bindable()
@prop appearance = "none"
@prop color = "blue"
@prop size = "md"
@prop inputClass
@prop class: className
@prop ...restProps
-->
