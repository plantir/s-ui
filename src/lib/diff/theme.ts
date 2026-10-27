import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type DiffVariants = VariantProps<typeof diff>;

export const diff = tv({
	slots: {
		base: 'relative block aspect-16/9 w-full cursor-ew-resize touch-pan-y overflow-hidden select-none',
		item1: 'absolute inset-0 z-10 *:size-full *:object-cover',
		item2: 'absolute inset-0 *:size-full *:object-cover',
		resizer:
			'pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_4px_rgba(0,0,0,0.4)]',
		handle:
			'pointer-events-auto absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/30 text-white shadow-md backdrop-blur-sm focus-visible:ring-4 focus-visible:ring-primary-500/50 focus-visible:outline-none'
	}
});
