<script lang="ts">
	import { footerLink } from './theme.js';
	import clsx from 'clsx';
	import type { FooterLinkProps } from '$lib/types.js';
	import { getTheme, warnThemeDeprecation } from '$lib/theme/themeUtils';
	import { untrack } from 'svelte';

	let {
		children,
		liClass,
		aClass,
		href,
		classes,
		class: className,
		...restProps
	}: FooterLinkProps = $props();

	warnThemeDeprecation(
		'FooterLink',
		untrack(() => ({ liClass, aClass })),
		{ liClass: 'class', aClass: 'link' }
	);

	// link, bySpan
	const styling = $derived(classes ?? { link: aClass });

	const theme = $derived(getTheme('footerLink'));

	const { base, link } = footerLink();
</script>

<li class={base({ class: clsx(theme?.base, className ?? liClass) })}>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href is a user-supplied prop -->
	<a {...restProps} {href} class={link({ class: clsx(theme?.link, styling.link) })}>
		{@render children()}
	</a>
</li>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L764)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop classes
@prop class: className
@prop ...restProps
-->
