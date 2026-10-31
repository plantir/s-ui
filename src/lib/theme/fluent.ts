/**
 * Shared Fluent theme class fragments used by form controls.
 * Keep these in one place so underline/border treatment stays consistent.
 */

/** Animated brand underline rendered on a relatively-positioned wrapper. */
export const fluentFocusUnderline =
	'after:content-[""] after:absolute after:bottom-0 after:start-0 after:w-full after:h-0.5 after:bg-primary-600 after:rounded-b after:scale-x-0 after:origin-center after:transition-transform after:duration-200 focus-within:after:scale-x-100';

/**
 * Fluent control border: NeutralStroke1 on the sides/top, NeutralStrokeAccessible
 * on the bottom (matches Fluent input chrome).
 */
export const fluentControlBorder = [
	'border-(color:--colorNeutralStroke1) border-b-(color:--colorNeutralStrokeAccessible)',
	'focus:border-(color:--colorNeutralStroke1)',
	'dark:border-(color:--colorNeutralStroke1) dark:border-b-(color:--colorNeutralStrokeAccessible)',
	'dark:focus:border-(color:--colorNeutralStroke1)'
] as const;
