import type { ClassValue } from 'clsx';

type Slots<T extends { slots: Record<string, unknown> }> = Omit<T['slots'], 'base'>;

export type Classes<T extends { slots: Record<string, unknown> }> = Partial<{
	[K in keyof Slots<T>]: ClassValue;
}>;
