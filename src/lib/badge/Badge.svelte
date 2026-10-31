<script lang="ts">
	import type { BadgeProps, CloseButtonProps, ParamsType } from '../types.js';
	import CloseButton from '$lib/utils/CloseButton.svelte';
	import { getTheme } from '$lib/theme/themeUtils';
	import clsx from 'clsx';
	import { fade } from 'svelte/transition';
	import { badge } from './theme';
	import { createDismissableContext } from '$lib/utils/dismissable';
	import { getCurrentThemeVariant } from '$lib/theme-selector/themeStore.svelte.js';
	import { resolveColor } from '$lib/theme/semanticColor';

	let {
		children,
		icon,
		badgeStatus = $bindable(true),
		color = 'primary',
		size = 'sm',
		dismissable = false,
		class: className,
		border,
		href,
		target,
		rounded,
		transition = fade,
		params,
		transitionParams,
		classes,
		...restProps
	}: BadgeProps = $props();

	const styling = $derived(classes ?? {});

	// Theme context
	const theme = $derived(getTheme('badge'));

	const { base, linkClass } = $derived(
		badge({ color, size, rounded, border, theme: getCurrentThemeVariant() })
	);

	let ref: HTMLDivElement | undefined = $state(undefined);

	const close = () => {
		if (ref?.dispatchEvent(new Event('close', { bubbles: true, cancelable: true }))) {
			badgeStatus = false;
		}
	};

	createDismissableContext(close);
</script>

{#if badgeStatus}
	<div
		{...restProps}
		bind:this={ref}
		transition:transition={(params ?? transitionParams) as ParamsType}
		class={base({ class: clsx(theme?.base, className) })}
	>
		{#if href}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href is a user-supplied prop -->
			<a {href} {target} class={linkClass({ class: clsx(theme?.linkClass, styling.linkClass) })}>
				{@render children()}
			</a>
		{:else}
			{@render children()}
		{/if}

		{#if dismissable}
			{#if icon}
				<CloseButton
					class="ms-1.5 -me-1.5"
					color={resolveColor(color) as CloseButtonProps['color']}
					{size}
					ariaLabel="Remove badge"
				>
					{@render icon()}
				</CloseButton>
			{:else}
				<CloseButton
					class="ms-1.5 -me-1.5"
					color={resolveColor(color) as CloseButtonProps['color']}
					{size}
					ariaLabel="Remove badge"
				/>
			{/if}
		{/if}
	</div>
{/if}

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[BadgeProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L244)
## Props
@prop children
@prop icon
@prop badgeStatus = $bindable(true)
@prop color = "primary"
@prop large = false
@prop dismissable = false
@prop class: className
@prop border
@prop href
@prop target
@prop rounded
@prop transition = fade
@prop params
@prop classes
@prop ...restProps
-->
