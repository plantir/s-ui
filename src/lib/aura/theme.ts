import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type AuraVariants = VariantProps<typeof aura>;

// `aura-spin`, `aura-glow` and `--aura-angle` are defined in ./aura.css
const spin =
	'bg-(image:--aura-gradient) animate-[aura-spin_var(--aura-duration,var(--tw-duration,4s))_linear_infinite]';

const blurredCopy =
	'before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-(image:--aura-gradient) before:opacity-50 before:blur-[calc(var(--aura-size)*3)]';

export const aura = tv({
	base: 'relative isolate inline-flex max-w-full bg-origin-border p-(--aura-size) [--aura-light:var(--aura-color,currentColor)] motion-reduce:animate-none motion-reduce:before:animate-none',
	variants: {
		variant: {
			default: [
				spin,
				'[--aura-gradient:conic-gradient(from_var(--aura-angle),transparent_0%,transparent_60%,var(--aura-light)_95%,transparent_100%)]'
			],
			dual: [
				spin,
				'[--aura-gradient:conic-gradient(from_var(--aura-angle),transparent_0%,transparent_15%,var(--aura-light)_45%,transparent_50%,transparent_65%,var(--aura-light)_95%,transparent_100%)]'
			],
			rainbow: [
				spin,
				blurredCopy,
				'[--aura-gradient:conic-gradient(from_var(--aura-angle),#ff0040,#ff8a00,#ffe500,#3dff00,#00d5ff,#5b5bff,#c400ff,#ff0040)]'
			],
			holo: [
				spin,
				blurredCopy,
				'[--aura-gradient:conic-gradient(from_var(--aura-angle),#a5f3fc,#c4b5fd,#f9a8d4,#fde68a,#86efac,#93c5fd,#a5f3fc)]'
			],
			gold: [
				spin,
				blurredCopy,
				'[--aura-gradient:conic-gradient(from_var(--aura-angle),#7a5a12,#f9e08b,#b8860b,#fff4c2,#8a6a1c,#e6c35c,#7a5a12)]'
			],
			silver: [
				spin,
				blurredCopy,
				'[--aura-gradient:conic-gradient(from_var(--aura-angle),#6b7280,#f3f4f6,#9ca3af,#ffffff,#4b5563,#e5e7eb,#6b7280)]'
			],
			glow: 'bg-(--aura-light) before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-(--aura-light) before:blur-[calc(var(--aura-size)*4)] before:animate-[aura-glow_var(--aura-duration,var(--tw-duration,2s))_ease-in-out_infinite]'
		},
		size: {
			xs: '[--aura-size:1px]',
			sm: '[--aura-size:2px]',
			md: '[--aura-size:3px]',
			lg: '[--aura-size:4px]',
			xl: '[--aura-size:6px]'
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-[calc(var(--radius-sm)+var(--aura-size))]',
			md: 'rounded-[calc(var(--radius-md)+var(--aura-size))]',
			lg: 'rounded-[calc(var(--radius-lg)+var(--aura-size))]',
			xl: 'rounded-[calc(var(--radius-xl)+var(--aura-size))]',
			'2xl': 'rounded-[calc(var(--radius-2xl)+var(--aura-size))]',
			full: 'rounded-full'
		},
		color: {
			// primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
			primary: '[--aura-color:var(--color-primary-500)]',
			secondary: '[--aura-color:var(--color-secondary-500)]',
			gray: '[--aura-color:var(--color-gray-500)]',
			red: '[--aura-color:var(--color-red-500)]',
			orange: '[--aura-color:var(--color-orange-500)]',
			amber: '[--aura-color:var(--color-amber-500)]',
			yellow: '[--aura-color:var(--color-yellow-400)]',
			lime: '[--aura-color:var(--color-lime-500)]',
			green: '[--aura-color:var(--color-green-500)]',
			emerald: '[--aura-color:var(--color-emerald-500)]',
			teal: '[--aura-color:var(--color-teal-500)]',
			cyan: '[--aura-color:var(--color-cyan-500)]',
			sky: '[--aura-color:var(--color-sky-500)]',
			blue: '[--aura-color:var(--color-blue-500)]',
			indigo: '[--aura-color:var(--color-indigo-500)]',
			violet: '[--aura-color:var(--color-violet-500)]',
			purple: '[--aura-color:var(--color-purple-500)]',
			fuchsia: '[--aura-color:var(--color-fuchsia-500)]',
			pink: '[--aura-color:var(--color-pink-500)]',
			rose: '[--aura-color:var(--color-rose-500)]'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'md',
		rounded: 'lg',
		color: 'primary'
	}
});
