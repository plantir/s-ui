<script lang="ts">
	import { fade } from 'svelte/transition';
	import { alert } from './theme.js';
	import clsx from 'clsx';
	import type { AlertProps, ParamsType } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';
	import { createDismissableContext } from '$lib/utils/dismissable';
	let {
		children,
		icon,
		alertStatus = $bindable(true),
		closeIcon: CloseIcon,
		color = 'primary',
		rounded = true,
		border,
		listContent,
		borderAccent,
		closeButtonProps,
		class: className,
		dismissable,
		transition = fade,
		params,
		...restProps
	}: AlertProps = $props();

	// Theme context
	const theme = $derived(getTheme('alert'));

	let divCls = $derived(
		alert({
			color,
			listContent,
			borderAccent,
			rounded,
			border,
			icon: !!icon,
			dismissable,
			class: clsx(theme, className)
		})
	);

	function close() {
		alertStatus = false;
	}

	createDismissableContext(close);
</script>

{#if alertStatus}
	<div role="alert" {...restProps} transition:transition={params as ParamsType} class={divCls}>
		{#if icon}
			{@render icon()}
		{/if}

		{#if icon || dismissable}
			<div>
				{@render children()}
			</div>
		{:else}
			{@render children()}
		{/if}

		{#if dismissable}
			<button
				type="button"
				class={clsx('ms-auto inline-flex cursor-pointer', closeButtonProps?.class)}
				aria-label={closeButtonProps?.ariaLabel ?? 'Close alert'}
				onclick={close}
			>
				{#if CloseIcon}
					<CloseIcon />
				{:else}
					<span aria-hidden="true">×</span>
				{/if}
			</button>
		{/if}
	</div>
{/if}
<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[AlertProps]
## Props
@prop children
@prop icon
@prop alertStatus = $bindable(true)
@prop closeIcon: CloseIcon
@prop color = "primary"
@prop rounded = true
@prop border
@prop class: className
@prop dismissable
@prop transition = fade
@prop params
@prop ...restProps
-->
