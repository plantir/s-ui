import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type Hover3dVariants = VariantProps<typeof hover3d>;

export const hover3d = tv({
	slots: {
		base: 'group/hover3d relative inline-block perspective-[1000px] focus-visible:outline-none',
		content:
			'relative transform-3d transition-transform duration-200 ease-out will-change-transform [transform:rotateX(var(--hover3d-rx,0deg))_rotateY(var(--hover3d-ry,0deg))_scale(var(--hover3d-scale,1))] group-focus-visible/hover3d:ring-4 group-focus-visible/hover3d:ring-primary-500/50 motion-reduce:[transform:none] *:block',
		glare:
			'pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-[radial-gradient(circle_at_var(--hover3d-gx,50%)_var(--hover3d-gy,50%),rgba(255,255,255,0.3),transparent_60%)] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover/hover3d:opacity-100 motion-reduce:hidden'
	},
	variants: {
		rounded: {
			none: { content: 'rounded-none' },
			md: { content: 'rounded-md' },
			lg: { content: 'rounded-lg' },
			xl: { content: 'rounded-xl' },
			'2xl': { content: 'rounded-2xl' },
			'3xl': { content: 'rounded-3xl' }
		}
	},
	defaultVariants: {
		rounded: '2xl'
	}
});
