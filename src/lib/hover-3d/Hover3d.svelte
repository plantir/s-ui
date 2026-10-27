<script lang="ts">
	import clsx from 'clsx';
	import { hover3d } from './theme.js';
	import type { Hover3dProps } from '../types.js';
	import { getTheme } from '$lib/theme/themeUtils';

	let {
		children,
		href,
		target,
		rel,
		tilt = 12,
		scale = 1.05,
		glare = true,
		rounded = '2xl',
		class: className,
		classes,
		onpointermove,
		onpointerleave,
		...restProps
	}: Hover3dProps = $props();

	const theme = $derived(getTheme('hover3d'));
	const styles = $derived(hover3d({ rounded }));

	let rotateX = $state(0);
	let rotateY = $state(0);
	let glareX = $state(50);
	let glareY = $state(50);
	let active = $state(false);

	const handlePointermove: Hover3dProps['onpointermove'] = (event) => {
		onpointermove?.(event);
		const rect = event.currentTarget.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) return;
		const x = (event.clientX - rect.left) / rect.width;
		const y = (event.clientY - rect.top) / rect.height;
		rotateY = (x - 0.5) * 2 * tilt;
		rotateX = (0.5 - y) * 2 * tilt;
		glareX = x * 100;
		glareY = y * 100;
		active = true;
	};

	const handlePointerleave: Hover3dProps['onpointerleave'] = (event) => {
		onpointerleave?.(event);
		rotateX = 0;
		rotateY = 0;
		active = false;
	};
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{...restProps}
	{href}
	target={href ? target : undefined}
	rel={href ? rel : undefined}
	role={href ? undefined : 'presentation'}
	onpointermove={handlePointermove}
	onpointerleave={handlePointerleave}
	class={styles.base({ class: clsx(theme?.base, className) })}
>
	<div
		class={styles.content({ class: clsx(theme?.content, classes?.content) })}
		style:--hover3d-rx="{rotateX}deg"
		style:--hover3d-ry="{rotateY}deg"
		style:--hover3d-scale={active ? scale : 1}
	>
		{@render children()}
		{#if glare}
			<div
				aria-hidden="true"
				class={styles.glare({ class: clsx(theme?.glare, classes?.glare) })}
				style:--hover3d-gx="{glareX}%"
				style:--hover3d-gy="{glareY}%"
			></div>
		{/if}
	</div>
</svelte:element>

<!--
@component
[Go to docs](https://s-ui.com/)
## Type
[Hover3dProps]
## Props
@prop children
@prop href
@prop target
@prop rel
@prop tilt = 12
@prop scale = 1.05
@prop glare = true
@prop rounded = "2xl"
@prop class: className
@prop classes
@prop ...restProps
-->
