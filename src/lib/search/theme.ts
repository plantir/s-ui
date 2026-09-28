import { tv, type VariantProps } from 'tailwind-variants';
import type { Classes } from '$lib/theme/themeUtils';

// Variants
export type SearchVariants = VariantProps<typeof search> & Classes<typeof search>;

export const search = tv({
	slots: {
		base: 'relative w-full',
		left: 'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none',
		icon: 'text-gray-500 dark:text-gray-400',
		content: 'absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400',
		input:
			'block [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
		close: 'absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black',
		svg: ''
	},
	variants: {
		theme: {
			fluent: {
				base: 'after:content-[""] after:absolute after:bottom-0 after:start-0 after:w-full after:h-0.5 after:bg-primary-600 after:rounded-b after:scale-x-0 after:origin-center after:transition-transform after:duration-200 focus-within:after:scale-x-100',
				input: 'focus:ring-0'
			},
			default: {}
		},
		size: {
			sm: {
				input: 'text-xs p-2 ps-9 pe-9 ',
				icon: 'w-3 h-3'
				// leftDiv: 'ps-2.5',
			},
			md: {
				input: 'text-sm p-2.5 ps-10 pe-10',
				icon: 'w-4 h-4'
				// leftDiv: 'ps-10',
			},
			lg: {
				input: 'sm:text-base p-3 ps-11 pe-11',
				icon: 'w-6 h-6'
				// leftDiv: 'ps-11',
			}
		}
	},
	compoundVariants: [
		{
			theme: 'fluent',
			class: {
				input: [
					// Fluent UI: side borders NeutralStroke1, bottom NeutralStrokeAccessible
					'border-(color:--colorNeutralStroke1) border-b-(color:--colorNeutralStrokeAccessible)',
					'focus:border-(color:--colorNeutralStroke1)',
					'dark:border-(color:--colorNeutralStroke1) dark:border-b-(color:--colorNeutralStrokeAccessible)',
					'dark:focus:border-(color:--colorNeutralStroke1)'
				]
			}
		}
	],
	defaultVariants: {
		size: 'lg'
	}
});
