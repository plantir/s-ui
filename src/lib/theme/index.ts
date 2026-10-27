import type { ClassValue } from 'clsx';
import * as themes from './themes';
export { default as ThemeProvider } from './ThemeProvider.svelte';

type ThemeSlots<T> = T extends { slots: infer S } ? S : undefined;

export type ThemeConfig = {
	[K in keyof typeof themes]?: [ThemeSlots<(typeof themes)[K]>] extends [undefined]
		? ClassValue
		: Partial<{ [L in keyof NonNullable<ThemeSlots<(typeof themes)[K]>>]: ClassValue }>;
};
