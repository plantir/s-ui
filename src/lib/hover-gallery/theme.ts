import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type HoverGalleryVariants = VariantProps<typeof hoverGallery>;

export const hoverGallery = tv({
	slots: {
		base: 'group/gallery relative grid overflow-hidden',
		image:
			'col-start-1 row-start-1 size-full object-cover opacity-0 transition-opacity duration-200 data-active:opacity-100',
		indicators:
			'pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1 px-3 opacity-0 transition-opacity duration-200 group-hover/gallery:opacity-100',
		indicator:
			'h-1 max-w-6 flex-1 rounded-full bg-white/50 shadow-sm transition-colors data-active:bg-white'
	}
});
