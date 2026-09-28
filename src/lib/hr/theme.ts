import { tv, type VariantProps } from 'tailwind-variants';
import type { Classes } from '$lib/theme/themeUtils';

// Variants
export type HrVariants = VariantProps<typeof hr> & Classes<typeof hr>;

export const hr = tv({
	slots: {
		base: 'h-px my-8 border-0',
		div: 'inline-flex items-center justify-center w-full',
		content:
			'absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900',
		bg: ''
	},
	variants: {
		theme: {
			fluent: {
				content: 'px-3'
			},
			default: ''
		},
		withChildren: {
			true: {
				base: 'w-full',
				div: 'relative'
			}
		},
		vertical: {
			true: {
				// `self-stretch` fills the height of flex/grid parents even when the
				// parent's height is indefinite; `h-full` covers parents with a
				// definite height; `min-h-[64px]` is the fallback for non-flex
				// parents where percentage heights cannot resolve.
				base: 'w-px h-auto self-stretch my-4 mx-8 min-h-[64px]',
				// Wrapper stretches like the bare line does, same non-flex fallback
				div: 'relative flex w-auto h-auto self-stretch items-center justify-center my-4 mx-8 min-h-[64px]',
				// Content stays in flow (static) and is centered by the flex wrapper;
				// horizontal padding + background mask the vertical line behind it
				content: 'static translate-x-0 rtl:translate-x-0 px-3'
			}
		}
	},
	compoundVariants: [
		{
			vertical: true,
			withChildren: true,
			class: {
				// Inside the wrapper the line is absolutely positioned so it always
				// spans the wrapper's full height and stays centered behind the
				// content (overrides withChildren' w-full and vertical's mx-8)
				base: 'absolute inset-y-0 start-1/2 w-px h-auto min-h-0 mx-0 my-0'
			}
		}
	],
	defaultVariants: {
		withChildren: false
	}
});
