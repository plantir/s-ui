<script lang="ts">
	import clsx from 'clsx';
	import { diff } from './theme.js';
	import type { DiffProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let {
		item1,
		item2,
		position = $bindable(50),
		step = 1,
		label = 'Comparison position',
		class: className,
		classes,
		onpointerdown,
		onpointermove,
		onpointerup,
		onpointercancel,
		...restProps
	}: DiffProps = $props();

	const theme = $derived(getTheme('diff'));
	const styles = $derived(diff());

	let dragging = $state(false);

	const clamped = $derived(Math.min(100, Math.max(0, position)));

	function setPosition(value: number) {
		position = Math.min(100, Math.max(0, value));
	}

	function setFromPointer(element: HTMLElement, clientX: number) {
		const rect = element.getBoundingClientRect();
		if (rect.width === 0) return;
		setPosition(((clientX - rect.left) / rect.width) * 100);
	}

	const handlePointerdown: DiffProps['onpointerdown'] = (event) => {
		onpointerdown?.(event);
		if (event.button !== 0) return;
		const element = event.currentTarget;
		dragging = true;
		element.setPointerCapture(event.pointerId);
		setFromPointer(element, event.clientX);
		element.querySelector<HTMLElement>('[role="slider"]')?.focus({ preventScroll: true });
		event.preventDefault();
	};

	const handlePointermove: DiffProps['onpointermove'] = (event) => {
		onpointermove?.(event);
		if (dragging) setFromPointer(event.currentTarget, event.clientX);
	};

	const handlePointerup: DiffProps['onpointerup'] = (event) => {
		onpointerup?.(event);
		dragging = false;
	};

	const handlePointercancel: DiffProps['onpointercancel'] = (event) => {
		onpointercancel?.(event);
		dragging = false;
	};

	function handleKeydown(event: KeyboardEvent) {
		const amount = event.shiftKey ? step * 10 : step;
		const actions: Record<string, () => void> = {
			ArrowLeft: () => setPosition(clamped - amount),
			ArrowDown: () => setPosition(clamped - amount),
			ArrowRight: () => setPosition(clamped + amount),
			ArrowUp: () => setPosition(clamped + amount),
			PageDown: () => setPosition(clamped - step * 10),
			PageUp: () => setPosition(clamped + step * 10),
			Home: () => setPosition(0),
			End: () => setPosition(100)
		};
		const action = actions[event.key];
		if (!action) return;
		event.preventDefault();
		action();
	}
</script>

<figure
	{...restProps}
	onpointerdown={handlePointerdown}
	onpointermove={handlePointermove}
	onpointerup={handlePointerup}
	onpointercancel={handlePointercancel}
	class={styles.base({ class: clsx(theme?.base, className) })}
>
	<div
		class={styles.item1({ class: clsx(theme?.item1, classes?.item1) })}
		style:clip-path="inset(0 {100 - clamped}% 0 0)"
	>
		{@render item1()}
	</div>
	<div class={styles.item2({ class: clsx(theme?.item2, classes?.item2) })}>
		{@render item2()}
	</div>
	<div
		class={styles.resizer({ class: clsx(theme?.resizer, classes?.resizer) })}
		style:left="{clamped}%"
	>
		<div
			role="slider"
			tabindex="0"
			aria-label={label}
			aria-orientation="horizontal"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={Math.round(clamped)}
			aria-valuetext="{Math.round(clamped)}%"
			onkeydown={handleKeydown}
			class={styles.handle({ class: clsx(theme?.handle, classes?.handle) })}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-5"
				aria-hidden="true"
			>
				<path d="m9 7-5 5 5 5" />
				<path d="m15 7 5 5-5 5" />
			</svg>
		</div>
	</div>
</figure>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[DiffProps]
## Props
@prop item1
@prop item2
@prop position = $bindable(50)
@prop step = 1
@prop label = "Comparison position"
@prop class: className
@prop classes
@prop ...restProps
-->
