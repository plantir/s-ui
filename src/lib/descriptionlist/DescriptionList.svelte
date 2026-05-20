<script lang="ts">
	import clsx from 'clsx';
	import { descriptionList } from './theme.js';
	import type { DescriptionListProps } from '$lib/types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let { children, tag, class: className, ...restProps }: DescriptionListProps = $props();

	const theme = $derived(getTheme('descriptionList'));

	let descCls = $derived(
		descriptionList({
			tag,
			class: clsx(theme, className)
		})
	);
</script>

<svelte:element this={tag} {...restProps} class={descCls}>
	{@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[DescriptionListProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L2044)
## Props
@prop children
@prop tag
@prop class: className
@prop ...restProps
-->
