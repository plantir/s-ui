<script lang="ts">
	import { thumbnail } from './theme.js';
	import type { ThumbnailProps } from '../types.js';
	import clsx from 'clsx';
	import { getTheme } from '$lib/theme/themeUtils';

	let { selected, class: className, ...restProps }: ThumbnailProps = $props();

	const theme = $derived(getTheme('thumbnail'));
</script>

<img {...restProps} class={thumbnail({ selected, class: clsx(theme, className) })} />

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[ThumbnailProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L502)
## Props
@prop selected
@prop class: className
@prop ...restProps
-->
