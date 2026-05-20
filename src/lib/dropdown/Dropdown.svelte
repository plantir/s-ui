<script lang="ts">
	import type { DropdownProps } from '$lib/types.js';
	import Popper from '$lib/utils/Popper.svelte';
	import DropdownGroup from './DropdownGroup.svelte';
	import { getTheme } from '$lib/theme/themeUtils';
	import clsx from 'clsx';
	import { setDropdownContext } from '$lib/context';
	import { dropdown } from './theme.js';

	let {
		children,
		simple = false,
		placement = 'bottom',
		offset = 2,
		class: className,
		activeUrl = '',
		isOpen = $bindable(false),
		onclose,
		...restProps
	}: DropdownProps = $props();

	const theme = $derived(getTheme('dropdown'));

	const base = $derived(dropdown({ class: clsx(theme, className) }));

	// Create reactive context using getter
	const context = {
		get activeUrl() {
			return activeUrl ?? '';
		}
	};

	setDropdownContext(context);
</script>

<!-- Dropdown menu -->

<Popper {...restProps} {placement} {offset} bind:isOpen class={base} {onclose}>
	{#if simple}
		<DropdownGroup>
			{@render children()}
		</DropdownGroup>
	{:else}
		{@render children()}
	{/if}
</Popper>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[DropdownProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L693)
## Props
@prop children
@prop simple = false
@prop placement = "bottom"
@prop offset = 2
@prop class: className
@prop activeUrl = ""
@prop isOpen = $bindable(false)
@prop onclose
@prop ...restProps
-->
