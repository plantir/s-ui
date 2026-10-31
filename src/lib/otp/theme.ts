import { tv, type VariantProps } from 'tailwind-variants';
// Variants
export type OtpVariants = VariantProps<typeof otp>;

export const otp = tv({
	slots: {
		base: 'relative inline-flex cursor-text items-center gap-2',
		input:
			'absolute inset-0 z-20 h-full w-full cursor-text opacity-0 caret-transparent disabled:cursor-not-allowed',
		cell: 'relative flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 font-medium text-gray-900 transition-[border-color,box-shadow] data-active:z-10 data-active:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
		caret: 'h-1/2 w-px animate-pulse bg-current'
	},
	variants: {
		size: {
			xs: { cell: 'size-8 text-sm' },
			sm: { cell: 'size-9 text-base' },
			md: { cell: 'size-11 text-lg' },
			lg: { cell: 'size-13 text-xl' },
			xl: { cell: 'size-16 text-2xl' }
		},
		joined: {
			true: {
				base: 'gap-0',
				cell: '-ms-px rounded-none first-of-type:ms-0 first-of-type:rounded-s-lg last-of-type:rounded-e-lg'
			}
		},
		disabled: {
			true: { base: 'cursor-not-allowed opacity-50' }
		},
		color: {
			// primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
			gray: { cell: 'data-active:border-gray-500 data-active:ring-gray-500/30' },
			primary: {
				cell: 'border-primary-300 data-active:border-primary-500 data-active:ring-primary-500/30 dark:border-primary-700'
			},
			secondary: {
				cell: 'border-secondary-300 data-active:border-secondary-500 data-active:ring-secondary-500/30 dark:border-secondary-700'
			},
			red: {
				cell: 'border-red-300 data-active:border-red-500 data-active:ring-red-500/30 dark:border-red-700'
			},
			orange: {
				cell: 'border-orange-300 data-active:border-orange-500 data-active:ring-orange-500/30 dark:border-orange-700'
			},
			amber: {
				cell: 'border-amber-300 data-active:border-amber-500 data-active:ring-amber-500/30 dark:border-amber-700'
			},
			yellow: {
				cell: 'border-yellow-300 data-active:border-yellow-400 data-active:ring-yellow-400/30 dark:border-yellow-700'
			},
			lime: {
				cell: 'border-lime-300 data-active:border-lime-500 data-active:ring-lime-500/30 dark:border-lime-700'
			},
			green: {
				cell: 'border-green-300 data-active:border-green-500 data-active:ring-green-500/30 dark:border-green-700'
			},
			emerald: {
				cell: 'border-emerald-300 data-active:border-emerald-500 data-active:ring-emerald-500/30 dark:border-emerald-700'
			},
			teal: {
				cell: 'border-teal-300 data-active:border-teal-500 data-active:ring-teal-500/30 dark:border-teal-700'
			},
			cyan: {
				cell: 'border-cyan-300 data-active:border-cyan-500 data-active:ring-cyan-500/30 dark:border-cyan-700'
			},
			sky: {
				cell: 'border-sky-300 data-active:border-sky-500 data-active:ring-sky-500/30 dark:border-sky-700'
			},
			blue: {
				cell: 'border-blue-300 data-active:border-blue-500 data-active:ring-blue-500/30 dark:border-blue-700'
			},
			indigo: {
				cell: 'border-indigo-300 data-active:border-indigo-500 data-active:ring-indigo-500/30 dark:border-indigo-700'
			},
			violet: {
				cell: 'border-violet-300 data-active:border-violet-500 data-active:ring-violet-500/30 dark:border-violet-700'
			},
			purple: {
				cell: 'border-purple-300 data-active:border-purple-500 data-active:ring-purple-500/30 dark:border-purple-700'
			},
			fuchsia: {
				cell: 'border-fuchsia-300 data-active:border-fuchsia-500 data-active:ring-fuchsia-500/30 dark:border-fuchsia-700'
			},
			pink: {
				cell: 'border-pink-300 data-active:border-pink-500 data-active:ring-pink-500/30 dark:border-pink-700'
			},
			rose: {
				cell: 'border-rose-300 data-active:border-rose-500 data-active:ring-rose-500/30 dark:border-rose-700'
			}
		}
	},
	defaultVariants: {
		size: 'md',
		joined: false,
		disabled: false,
		color: 'gray'
	}
});
