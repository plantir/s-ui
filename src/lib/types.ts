import type { Component, Snippet } from 'svelte';
import type {
	ClassValue,
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLBlockquoteAttributes,
	HTMLButtonAttributes,
	HTMLDialogAttributes,
	HTMLImgAttributes,
	HTMLInputAttributes,
	HTMLLabelAttributes,
	HTMLLiAttributes,
	HTMLOlAttributes,
	HTMLSelectAttributes,
	HTMLSourceAttributes,
	HTMLTableAttributes,
	HTMLTdAttributes,
	HTMLTextareaAttributes,
	HTMLThAttributes,
	HTMLTrackAttributes,
	HTMLVideoAttributes,
	SVGAttributes,
	FullAutoFill
} from 'svelte/elements';
import type {
	BlurParams,
	FadeParams,
	FlyParams,
	ScaleParams,
	SlideParams,
	TransitionConfig
} from 'svelte/transition';

export type ParamsType =
	| FadeParams
	| BlurParams
	| FlyParams
	| SlideParams
	| ScaleParams
	| undefined;
import type { AccordionVariants, AccordionItemVariants } from './accordion/theme.js';
import type { AlertVariants } from './alert/theme.js';
import type { AvatarVariants } from './avatar/theme.js';
import type { badge, BadgeVariants } from './badge/theme.js';
import type { card, CardVariants } from '$lib/card/theme.js';
import type { CloseButtonVariants } from './utils/theme.js';
import type { IndicatorVariants } from './indicator/theme.js';
import type { BannerVariants } from './banner/theme.js';
import type { SpinnerVariants } from './spinner/theme.js';
import type { Classes } from './theme/slots.js';
import type {
	BottomNavHeaderItemVariants,
	BottomNavHeaderVariants,
	BottomNavItemVariants,
	BottomNavVariants,
	bottomNav,
	bottomNavHeader,
	bottomNavItem
} from './bottom-navigation/theme.js';
import type {
	breadcrumb,
	breadcrumbItem,
	BreadcrumbItemVariants,
	BreadcrumbVariants
} from './breadcrumb/theme.js';
import type { ButtonGroupVariants } from './button-group/theme.js';
import type { ButtonVariants, GradientButtonVariantes, gradientButton } from './buttons/theme.js';
import type { VariantProps } from 'tailwind-variants';
import type { carousel, CarouselVariants, SlideVariants } from './carousel/theme.js';
import type { Slide } from './carousel/index.js';

export type AnchorButtonAttributes =
	| ({ href: string } & HTMLAnchorAttributes)
	| ({ href?: undefined } & HTMLButtonAttributes);
export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;
export type { ThemeConfig } from './theme';

export type AnchorDivAttributes =
	| ({ href: string } & HTMLAnchorAttributes)
	| ({ href?: undefined } & HTMLAttributes<HTMLDivElement>);

// Context Types
// These types are used by the context system in $lib/context.ts
// Accordion Context
export interface AccordionContextType {
	flush?: boolean;
	activeClass?: string | null;
	inactiveClass?: string | null;
	transitionType?: TransitionFunc | 'none';
}
export interface AccordionProps
	extends AccordionVariants, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	children: Snippet;
	multiple?: boolean;
	activeClass?: string;
	inactiveClass?: string;
	transitionType?: TransitionFunc | 'none';
}
export interface AccordionItemProps extends AccordionItemVariants, HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	header?: Snippet;
	arrowup?: Snippet;
	arrowdown?: Snippet;
	activeClass?: string;
	inactiveClass?: string;
	transitionType?: TransitionFunc | 'none';
	transitionParams?: ParamsType;
	headerClass?: string;
	contentClass?: string;
}

export interface AlertProps
	extends Omit<AlertVariants, 'icon'>, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	children: Snippet;
	icon?: Snippet;
	color?: AlertVariants['color'];
	name?: string;
	alertStatus?: boolean;
	closeIcon?: Component;
	transition?: TransitionFunc;
	params?: ParamsType;
	onclick?: () => void;
}

// indicator
export interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	color?: IndicatorVariants['color'];
	cornerStyle?: IndicatorVariants['cornerStyle'];
	size?: IndicatorVariants['size'];
	border?: boolean;
	placement?: IndicatorVariants['placement'];
	offset?: boolean;
}

// avatar
export interface AvatarProps extends AvatarVariants, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	indicator?: Snippet;
	href?: HTMLAnchorAttributes['href'];
	target?: HTMLAnchorAttributes['target'];
	src?: string;
	dot?: Partial<Omit<IndicatorProps, 'children'>>;
	alt?: string;
	onclick?: () => void;
}

// badge
export interface BadgeProps extends BadgeVariants, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	children: Snippet;
	icon?: Snippet;
	badgeStatus?: boolean;
	large?: boolean;
	dismissable?: boolean;
	classes?: Classes<typeof badge>;
	color?: BadgeVariants['color'];
	href?: HTMLAnchorAttributes['href'];
	target?: HTMLAnchorAttributes['target'];
	transition?: TransitionFunc;
	params?: ParamsType;
}

// banner
export interface BannerProps
	extends BannerVariants, Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onclose'> {
	header?: Snippet;
	open?: boolean;
	color?: BannerVariants['color'];
	dismissable?: boolean;
	innerClass?: ClassValue;
	transition?: TransitionFunc;
	params?: ParamsType;
	closeClass?: ClassValue;
	onclose?: (ev: MouseEvent) => void;
}

// bottom-navigation

export interface BottomNavProps extends BottomNavVariants, HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	header?: Snippet;
	classes?: Classes<typeof bottomNav>;
	activeUrl?: string;
	outerClass?: ClassValue;
	innerClass?: ClassValue;
	activeClass?: ClassValue;
}

export type BottomNavItemProps = BottomNavItemVariants &
	AnchorButtonAttributes & {
		children: Snippet;
		classes?: Classes<typeof bottomNavItem>;
		btnName?: string;
		activeClass?: ClassValue;
		btnClass?: ClassValue;
		spanClass?: ClassValue;
		active?: boolean;
	};

export interface BottomNavHeaderProps
	extends BottomNavHeaderVariants, HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	classes?: Classes<typeof bottomNavHeader>;
	outerClass?: ClassValue;
	innerClass?: ClassValue;
}

export interface BottomNavHeaderItemProps
	extends BottomNavHeaderItemVariants, HTMLButtonAttributes {
	itemName: string;
	active?: boolean;
}

// breadcrumb
export interface BreadcrumbProps extends BreadcrumbVariants, HTMLAttributes<HTMLElement> {
	children: Snippet;
	classes?: Classes<typeof breadcrumb>;
	solid?: boolean;
	olClass?: ClassValue;
	ariaLabel?: string;
	breadcrumbClass?: ClassValue;
}

export interface BreadcrumbItemProps
	extends BreadcrumbItemVariants, Classes<typeof breadcrumbItem>, HTMLLiAttributes {
	children: Snippet;
	classes?: Classes<typeof breadcrumbItem>;
	icon?: Snippet;
	home?: boolean;
	href?: string;
	linkClass?: ClassValue;
	spanClass?: ClassValue;
	homeClass?: ClassValue;
}

// buttongroup
export interface ButtonGroupProps extends ButtonGroupVariants, HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	disabled?: boolean;
}

// button
export type GradientButtonColor = NonNullable<VariantProps<typeof gradientButton>['color']>;

export type HTMLButtonOrAnchorAttributes = Omit<
	HTMLButtonAttributes & HTMLAnchorAttributes,
	'color'
>;

// export type ButtonProps = ButtonVariants &
// 	AnchorButtonAttributes & {
// 		tag?: string;
// 		disabled?: boolean;
// 		outline?: boolean;
// 		shadow?: boolean;
// 		loading?: boolean;
// 		spinnerProps?: SpinnerProps;
// 	};
export interface ButtonProps extends ButtonVariants, HTMLButtonOrAnchorAttributes {
	tag?: string;
	color?: ButtonVariants['color'];
	disabled?: boolean;
	outline?: boolean;
	shadow?: boolean;
	pill?: boolean;
	group?: boolean;
	checked?: boolean;
	size?: ButtonVariants['size'];
	loading?: boolean;
	spinnerProps?: SpinnerProps;
}
export interface GradientButtonProps extends GradientButtonVariantes, HTMLButtonOrAnchorAttributes {
	tag?: string;
	color?: GradientButtonVariantes['color'];
	disabled?: boolean;
	href?: string;
	btnClass?: ClassValue;
}

// card
// export type CardProps = Omit<CardVariants, 'href'> &
// 	AnchorDivAttributes & {
// 		img?: string;
// 		imgClass?: ClassValue;
// 		contentClass?: string;
// 	};

export interface CardProps extends Omit<CardVariants, 'href'>, HTMLAttributes<HTMLDivElement> {
	color?: CardVariants['color'];
	classes?: Classes<typeof card>;
	href?: string;
	img?: string;
	imgClass?: ClassValue;
	contentClass?: string;
}
// carousel

export interface CarouselProps
	extends CarouselVariants, Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onchange'> {
	children?: Snippet<[number]>;
	slide?: Snippet<[{ index: number; Slide: typeof Slide }]>;
	images: HTMLImgAttributes[];
	classes?: Classes<typeof carousel>;
	index?: number;
	slideDuration?: number;
	transition?: TransitionFunc;
	duration?: number;
	disableSwipe?: boolean;
	imgClass?: ClassValue;
	onchange?: (x: HTMLImgAttributes) => void;
	isPreload?: boolean;
	slideFit?: SlideProps['fit'];
}

export interface IndicatorsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	children?: Snippet<[{ selected: boolean; index: number }]>;
	activeClass?: ClassValue;
	inactiveClass?: ClassValue;
	position?: 'top' | 'bottom';
}

export interface ControlButtonProps extends HTMLButtonAttributes {
	forward: boolean;
	name?: string | null;
	spanClass?: ClassValue;
}

export interface ControlsProps extends Omit<HTMLButtonAttributes, 'children'> {
	children?: Snippet<[(forward: boolean) => void]>;
}

export interface ThumbnailProps extends HTMLImgAttributes {
	selected?: boolean;
}

export interface ThumbnailsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	children?: Snippet<
		[{ image: HTMLImgAttributes; selected: boolean; imgClass: string; Thumbnail: Component }]
	>;
	images: HTMLImgAttributes[];
	index: number;
	ariaLabel?: string;
	imgClass?: ClassValue;
	throttleDelay?: number;
}

export interface SlideProps extends SlideVariants, HTMLImgAttributes {
	image: HTMLImgAttributes;
	transition?: TransitionFunc; // Optional transition function, overrides default slide transition
}

// Carousel Context
export interface CarouselContextType {
	images: HTMLImgAttributes[];
	index: number;
	lastSlideChange: number;
	slideDuration: number;
	forward: boolean;
	changeSlide: (newIndex: number) => void;
}
// CloseButton
export type CloseButtonProps = CloseButtonVariants &
	AnchorButtonAttributes & {
		onclick?: (ev: MouseEvent) => void;
		name?: string;
		ariaLabel?: string;
		class?: string;
		svgClass?: string;
	};

// spinner
export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
	type?: 'default' | 'dots' | 'bars' | 'pulse' | 'orbit';
	color?: SpinnerVariants['color'];
	size?: SpinnerVariants['size'];
	currentFill?: string;
	currentColor?: string;
}
