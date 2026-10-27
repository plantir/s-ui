<script lang="ts">
	import clsx from 'clsx';
	import { otp } from './theme.js';
	import type { OtpProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let {
		count = 4,
		value = $bindable(''),
		numeric = true,
		size = 'md',
		color = 'gray',
		joined = false,
		disabled = false,
		oncomplete,
		oninput,
		onfocus,
		onblur,
		onkeydown,
		onpointerup,
		class: className,
		classes,
		'aria-label': ariaLabel = 'One-time code',
		...restProps
	}: OtpProps = $props();

	const theme = $derived(getTheme('otp'));
	const styles = $derived(otp({ size, color, joined, disabled }));

	let focused = $state(false);

	const chars = $derived(Array.from({ length: count }, (_, i) => value[i] ?? ''));
	const activeIndex = $derived(Math.min(value.length, count - 1));

	function sanitize(raw: string) {
		const cleaned = numeric ? raw.replace(/\D/g, '') : raw.replace(/\s/g, '');
		return cleaned.slice(0, count);
	}

	// Characters are always appended or removed at the end, so the caret is pinned there
	function moveCaretToEnd(input: HTMLInputElement) {
		const end = input.value.length;
		input.setSelectionRange(end, end);
	}

	const handleInput: OtpProps['oninput'] = (event) => {
		const input = event.currentTarget;
		const next = sanitize(input.value);
		const wasComplete = value.length >= count;
		input.value = next;
		value = next;
		oninput?.(event);
		if (next.length === count && !wasComplete) oncomplete?.(next);
	};

	const handleFocus: OtpProps['onfocus'] = (event) => {
		focused = true;
		moveCaretToEnd(event.currentTarget);
		onfocus?.(event);
	};

	const handleBlur: OtpProps['onblur'] = (event) => {
		focused = false;
		onblur?.(event);
	};

	const handleKeydown: OtpProps['onkeydown'] = (event) => {
		if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
			event.preventDefault();
		}
		onkeydown?.(event);
	};

	const handlePointerup: OtpProps['onpointerup'] = (event) => {
		moveCaretToEnd(event.currentTarget);
		onpointerup?.(event);
	};
</script>

<label class={styles.base({ class: clsx(theme?.base, className) })}>
	<input
		{...restProps}
		type="text"
		autocomplete="one-time-code"
		inputmode={numeric ? 'numeric' : 'text'}
		maxlength={count}
		pattern={numeric ? `[0-9]{${count}}` : undefined}
		aria-label={ariaLabel}
		{disabled}
		{value}
		oninput={handleInput}
		onfocus={handleFocus}
		onblur={handleBlur}
		onkeydown={handleKeydown}
		onpointerup={handlePointerup}
		class={styles.input({ class: clsx(theme?.input, classes?.input) })}
	/>
	{#each chars as char, i (i)}
		{@const active = focused && i === activeIndex}
		<span
			aria-hidden="true"
			data-active={active ? '' : undefined}
			class={styles.cell({ class: clsx(theme?.cell, classes?.cell) })}
		>
			{#if char}
				{char}
			{:else if active}
				<span class={styles.caret({ class: clsx(theme?.caret, classes?.caret) })}></span>
			{/if}
		</span>
	{/each}
</label>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[OtpProps]
## Props
@prop count = 4
@prop value = $bindable("")
@prop numeric = true
@prop size = "md"
@prop color = "gray"
@prop joined = false
@prop disabled = false
@prop oncomplete
@prop class: className
@prop classes
@prop ...restProps
-->
