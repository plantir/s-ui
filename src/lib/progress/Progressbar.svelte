<script lang="ts">
	import type { ProgressbarProps } from '$lib/types.js';
	import clsx from 'clsx';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { progressbar } from './theme.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { getCurrentThemeVariant } from '$lib/theme-selector/themeStore.svelte.js';
	let {
		progress = '45',
		precision = 0,
		tweenDuration = 400,
		animate = false,
		size = 'md',
		labelInside = false,
		labelOutside = '',
		easing = cubicOut,
		color = 'primary',
		class: className,
		classes,
		...restProps
	}: ProgressbarProps = $props();

	const theme = $derived(getTheme('progressbar'));

	const namedSizes = ['sm', 'md', 'lg', 'xl'] as const;
	type NamedSize = (typeof namedSizes)[number];
	const isNamedSize = $derived((namedSizes as readonly string[]).includes(size));
	const namedSize = $derived(isNamedSize ? (size as NamedSize) : undefined);
	const customSizeClass = $derived(isNamedSize ? undefined : size);

	let _progress = $derived(
		new Tween(0, {
			duration: animate ? tweenDuration : 0,
			easing
		})
	);
	const {
		base,
		label: labelInsideCls,
		inside,
		outside,
		span,
		progressCls
	} = $derived(
		progressbar({
			color,
			labelInside,
			size: namedSize,
			theme: getCurrentThemeVariant()
		})
	);

	$effect(() => {
		_progress.set(Number(progress));
	});
</script>

{#if labelOutside}
	<div {...restProps} class={outside({ class: clsx(theme?.outside, classes?.outside) })}>
		<span class={span({ class: clsx(theme?.span, classes?.span) })}>{labelOutside}</span>
		<span class={progressCls({ class: clsx(theme?.progressCls, classes?.progressCls) })}
			>{progress}%</span
		>
	</div>
{/if}
<div {...restProps} class={base({ class: clsx(theme?.base, className, customSizeClass) })}>
	{#if labelInside}
		<div
			class={labelInsideCls({ class: clsx(theme?.label, classes?.label) })}
			style="width: {_progress.current}%"
		>
			{_progress.current.toFixed(precision)}%
		</div>
	{:else}
		<div
			class={inside({ class: clsx(theme?.inside, classes?.label) })}
			style="width: {_progress.current}%"
		></div>
	{/if}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L1316)
## Props
@prop progress = "45"
@prop precision = 0
@prop tweenDuration = 400
@prop animate = false
@prop size = "md"
@prop labelInside = false
@prop labelOutside = ""
@prop easing = cubicOut
@prop color = "primary"
@prop class: className
@prop classes
@prop ...restProps
-->
