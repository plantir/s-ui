<script lang="ts">
	import { footerBrand } from './theme.js';
	import clsx from 'clsx';
	import type { FooterBrandProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let {
		children,
		aClass,
		spanClass,
		imgClass,
		href,
		src,
		alt,
		name,
		...restProps
	}: FooterBrandProps = $props();

	const theme = $derived(getTheme('footerBrand'));

	const { base, span, img } = $derived(footerBrand());
</script>

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href is a user-supplied prop -->
	<a {...restProps} {href} class={base({ class: clsx(theme?.base, aClass) })}>
		{#if src}
			<img {src} class={img({ class: clsx(theme?.img, imgClass) })} {alt} />
		{/if}
		{#if name}
			<span class={span({ class: clsx(theme?.span, spanClass) })}>{name}</span>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<img {src} class={img({ class: clsx(imgClass) })} {alt} />
{/if}

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[FooterBrandProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L733)
## Props
@prop children
@prop aClass
@prop spanClass
@prop imgClass
@prop href
@prop src
@prop alt
@prop name
@prop ...restProps
-->
