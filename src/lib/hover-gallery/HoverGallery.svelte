<script lang="ts">
	import clsx from 'clsx';
	import { hoverGallery } from './theme.js';
	import type { HoverGalleryProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let {
		images,
		index = $bindable(0),
		indicators = true,
		class: className,
		classes,
		onpointermove,
		onpointerleave,
		...restProps
	}: HoverGalleryProps = $props();

	const theme = $derived(getTheme('hoverGallery'));
	const styles = $derived(hoverGallery());

	const handlePointermove: HoverGalleryProps['onpointermove'] = (event) => {
		onpointermove?.(event);
		const rect = event.currentTarget.getBoundingClientRect();
		if (rect.width === 0 || images.length === 0) return;
		const x = (event.clientX - rect.left) / rect.width;
		index = Math.min(images.length - 1, Math.max(0, Math.floor(x * images.length)));
	};

	const handlePointerleave: HoverGalleryProps['onpointerleave'] = (event) => {
		onpointerleave?.(event);
		index = 0;
	};
</script>

<figure
	{...restProps}
	onpointermove={handlePointermove}
	onpointerleave={handlePointerleave}
	class={styles.base({ class: clsx(theme?.base, className) })}
>
	{#each images as { class: imageClass, ...image }, i (i)}
		<img
			{...image}
			data-active={i === index ? '' : undefined}
			aria-hidden={i === index ? undefined : 'true'}
			class={styles.image({ class: clsx(theme?.image, classes?.image, imageClass) })}
		/>
	{/each}
	{#if indicators && images.length > 1}
		<div
			aria-hidden="true"
			class={styles.indicators({ class: clsx(theme?.indicators, classes?.indicators) })}
		>
			{#each { length: images.length }, i (i)}
				<span
					data-active={i === index ? '' : undefined}
					class={styles.indicator({ class: clsx(theme?.indicator, classes?.indicator) })}
				></span>
			{/each}
		</div>
	{/if}
</figure>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[HoverGalleryProps]
## Props
@prop images
@prop index = $bindable(0)
@prop indicators = true
@prop class: className
@prop classes
@prop ...restProps
-->
