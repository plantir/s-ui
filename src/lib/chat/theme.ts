import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type ChatVariants = VariantProps<typeof chat>;
export type ChatBubbleVariants = Omit<VariantProps<typeof chatBubble>, 'placement'>;

export const chat = tv({
	base: 'grid gap-x-3 py-1',
	variants: {
		placement: {
			start: 'grid-cols-[auto_1fr] justify-items-start',
			end: 'grid-cols-[1fr_auto] justify-items-end'
		}
	},
	defaultVariants: {
		placement: 'start'
	}
});

export const chatImage = tv({
	base: 'row-span-2 self-end',
	variants: {
		placement: {
			start: 'col-start-1',
			end: 'col-start-2'
		}
	},
	defaultVariants: {
		placement: 'start'
	}
});

export const chatHeader = tv({
	base: 'row-start-1 flex items-center gap-1 text-sm text-gray-900 dark:text-white',
	variants: {
		placement: {
			start: 'col-start-2',
			end: 'col-start-1'
		}
	},
	defaultVariants: {
		placement: 'start'
	}
});

export const chatFooter = tv({
	base: 'row-start-3 text-sm text-gray-500 dark:text-gray-400',
	variants: {
		placement: {
			start: 'col-start-2',
			end: 'col-start-1'
		}
	},
	defaultVariants: {
		placement: 'start'
	}
});

// The tail is a 0.75rem square with a quarter circle masked out, painted in the bubble's background color
export const chatBubble = tv({
	base: 'relative row-start-2 block w-fit max-w-[90%] min-h-10 min-w-10 rounded-2xl px-4 py-2 before:absolute before:bottom-0 before:size-3 before:bg-inherit',
	variants: {
		placement: {
			start:
				'col-start-2 rounded-es-none before:-start-3 before:[mask-image:radial-gradient(circle_at_0_0,transparent_0.72rem,#000_0.75rem)] rtl:before:[mask-image:radial-gradient(circle_at_100%_0,transparent_0.72rem,#000_0.75rem)]',
			end: 'col-start-1 rounded-ee-none before:-end-3 before:[mask-image:radial-gradient(circle_at_100%_0,transparent_0.72rem,#000_0.75rem)] rtl:before:[mask-image:radial-gradient(circle_at_0_0,transparent_0.72rem,#000_0.75rem)]'
		},
		color: {
			// primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
			gray: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white',
			primary: 'bg-primary-600 text-white',
			secondary: 'bg-secondary-600 text-white',
			red: 'bg-red-600 text-white',
			orange: 'bg-orange-500 text-white',
			amber: 'bg-amber-400 text-gray-900',
			yellow: 'bg-yellow-300 text-gray-900',
			lime: 'bg-lime-400 text-gray-900',
			green: 'bg-green-600 text-white',
			emerald: 'bg-emerald-600 text-white',
			teal: 'bg-teal-600 text-white',
			cyan: 'bg-cyan-600 text-white',
			sky: 'bg-sky-600 text-white',
			blue: 'bg-blue-600 text-white',
			indigo: 'bg-indigo-600 text-white',
			violet: 'bg-violet-600 text-white',
			purple: 'bg-purple-600 text-white',
			fuchsia: 'bg-fuchsia-600 text-white',
			pink: 'bg-pink-600 text-white',
			rose: 'bg-rose-600 text-white'
		}
	},
	defaultVariants: {
		placement: 'start',
		color: 'gray'
	}
});
