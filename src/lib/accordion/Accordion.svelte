<script lang="ts">
	import type { AccordionContextType, AccordionProps } from '$lib/types';
	import { getTheme } from '$lib/theme/themeUtils';
	import clsx from 'clsx';
	import { setAccordionContext } from '$lib/context';
	import { accordion } from './theme';
	import { createSingleSelectionContext } from '$lib/utils/singleselection.svelte';
	import { untrack } from 'svelte';
	import { getCurrentThemeVariant } from '$lib/theme-selector/themeStore.svelte.js';

	let {
		children,
		flush,
		activeClass,
		inactiveClass,
		multiple = false,
		class: className,
		transitionType,
		transition,
		classes,
		...restProps
	}: AccordionProps = $props();

	const resolvedTransitionType = $derived(transitionType ?? transition);

	const theme = $derived(getTheme('accordion'));

	// Simple reactive state object
	const reactiveCtx: AccordionContextType = {
		get flush() {
			return flush;
		},
		get activeClass() {
			return activeClass ?? classes?.active;
		},
		get inactiveClass() {
			return inactiveClass ?? classes?.inactive;
		},
		get buttonClass() {
			return classes?.button;
		},
		get contentClass() {
			return classes?.content;
		},
		get transitionType() {
			return resolvedTransitionType;
		}
	};

	// Set context during initialization
	setAccordionContext(reactiveCtx);

	// Create selection context synchronously for proper nesting
	// Use untrack to explicitly capture only the initial value
	createSingleSelectionContext(untrack(() => multiple));

	const base = $derived(
		accordion({
			flush,
			class: clsx(theme, className, classes?.base),
			theme: getCurrentThemeVariant()
		})
	);
</script>

<div {...restProps} class={base}>
	{@render children()}
</div>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[AccordionProps](https://github.com/themesberg/s-ui/blob/main/src/lib/types.ts#L199)
## Props
@prop children
@prop flush
@prop activeClass
@prop inactiveClass
@prop multiple = false
@prop class: className
@prop transitionType
@prop ...restProps
-->
