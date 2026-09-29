import type { Classes } from '$lib/theme/slots';
import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type AccordionVariants = VariantProps<typeof accordion>;
export type AccordionItemVariants = VariantProps<typeof accordionItem> &
	Classes<typeof accordionItem>;

export const accordion = tv({
	base: 'w-full',
	variants: {
		theme: {
			fluent: '',
			default: ''
		},
		color: {
			primary: 'text-primary-500 dark:text-primary-400',
			secondary: 'text-secondary-500 dark:text-secondary-400'
		},
		flush: {
			true: '',
			false: 'border border-gray-200 dark:border-gray-700 rounded-t-xl'
		}
	},
	compoundVariants: [
		{
			theme: 'fluent',
			flush: false,
			class: 'border-0 border-transparent rounded-t-none'
		}
	]
});

export const accordionItem = tv({
	slots: {
		base: 'group',
		button:
			'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700 border-b',
		content: 'border-b border-gray-200 dark:border-gray-700',
		active:
			'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800',
		inactive: 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
	},
	variants: {
		theme: {
			fluent: '',
			default: ''
		},
		flush: {
			true: {
				button: 'py-5',
				content: 'py-5'
			},
			false: {
				button: 'p-5 border-s border-e group-first:border-t',
				content: 'p-5 border-s border-e'
			}
		},
		open: {
			true: {},
			false: {}
		}
	},
	compoundVariants: [
		{
			flush: true,
			open: true,
			class: {
				button: 'text-gray-900 dark:text-white'
			}
		},
		{
			flush: true,
			open: false,
			class: {
				button: 'text-gray-500 dark:text-gray-400'
			}
		},
		{
			theme: 'fluent',
			class: {
				button: 'p-2 border-b-0 border-s-0 border-e-0 group-first:border-t-0 flex-row-reverse justify-end gap-2',
				content: 'p-2 border-b-0 border-s-0 border-e-0',
				active: "bg-transparent focus:ring-0 focus:ring-offset-0 ",
				inactive: "hover:bg-transparent dark:hover:bg-transparent"
			}
		}
	],
	defaultVariants: {
		flush: false,
		open: false
	}
});
