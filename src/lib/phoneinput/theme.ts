import { tv, type VariantProps } from 'tailwind-variants';
import type { Classes } from '$lib/theme/themeUtils';
import { fluentControlBorder, fluentFocusUnderline } from '$lib/theme/fluent.js';

export type PhoneInputVariants = VariantProps<typeof phoneInput> & Classes<typeof phoneInput>;

export const phoneInput = tv({
	slots: {
		wrapper: 'relative',
		div: 'absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none',
		svg: 'w-4 h-4 text-gray-500 dark:text-gray-400',
		input:
			'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
		span: 'absolute start-0 bottom-3 text-gray-500 dark:text-gray-400',
		floatingInput:
			'block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer disabled:cursor-not-allowed disabled:opacity-50',
		label:
			'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
	},
	variants: {
		theme: {
			fluent: {
				input: 'focus:ring-0'
			},
			default: {}
		},
		phoneType: {
			default: {},
			floating: {
				svg: 'w-4 h-4 rtl:rotate-[270deg]'
			},
			countryCode: {
				input: 'rounded-none rounded-e-lg'
			},
			copy: {},
			advanced: {}
		},
		phoneIcon: {
			true: { input: 'ps-10' },
			false: {}
		}
	},
	compoundVariants: [
		{
			theme: 'fluent',
			phoneType: 'default',
			class: {
				wrapper: fluentFocusUnderline,
				input: [...fluentControlBorder]
			}
		},
		{
			theme: 'fluent',
			phoneType: 'countryCode',
			class: {
				wrapper: fluentFocusUnderline,
				input: [...fluentControlBorder]
			}
		},
		{
			theme: 'fluent',
			phoneType: 'floating',
			class: {
				wrapper: fluentFocusUnderline,
				floatingInput: [...fluentControlBorder, 'rounded-none border-0 border-b focus:ring-0'],
				label: 'peer-focus:text-primary-600 peer-focus:dark:text-primary-500'
			}
		}
	]
});
