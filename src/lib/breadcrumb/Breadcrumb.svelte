<script lang="ts">
	import { breadcrumb } from './theme.js';
	import clsx from 'clsx';
	import type { BreadcrumbProps } from '../types.js';
	import { getTheme, warnThemeDeprecation } from '$lib/theme/themeUtils';
	import { untrack } from 'svelte';

	let {
		children,
		solid = false,
		class: className,
		classes,
		olClass,
		ariaLabel = 'Breadcrumb',
		...restProps
	}: BreadcrumbProps = $props();

	warnThemeDeprecation(
		'Breadcrumb',
		untrack(() => ({ olClass })),
		{ olClass: 'list' }
	);

	const styling = $derived(classes ?? { list: olClass });

	const theme = $derived(getTheme('breadcrumb'));

	const { base, list } = $derived(breadcrumb({ solid }));
	let classNav = $derived(base({ class: clsx(theme?.base, className) }));
	let classList = $derived(list({ class: clsx(theme?.list, styling.list) }));
</script>

<nav aria-label={ariaLabel} {...restProps} class={classNav}>
	<ol class={classList}>
		{@render children()}
	</ol>
</nav>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[BreadcrumbProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L302)
## Props
@prop children
@prop solid = false
@prop class: className
@prop classes
@prop olClass
@prop ariaLabel = "Breadcrumb"
@prop ...restProps
-->
