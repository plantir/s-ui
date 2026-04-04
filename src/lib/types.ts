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
  } from "svelte/elements";
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
import type { IndicatorVariants } from "$lib/indicator/theme";
import type { BadgeVariants } from "$lib/badge/theme";
import type { AvatarVariants } from "./avatar/theme";
import type { AlertVariants } from './alert/theme.js';
import type { AccordionVariants, AccordionItemVariants } from './accordion/theme.js';

export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;
export type { ThemeConfig } from '$lib/theme';
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
	color?: IndicatorVariants["color"];
	cornerStyle?: IndicatorVariants["cornerStyle"];
	size?: IndicatorVariants["size"];
	border?: boolean;
	placement?: IndicatorVariants["placement"];
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
export interface BadgeProps extends BadgeVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	children: Snippet;
	icon?: Snippet;
	badgeStatus?: boolean;
	large?: boolean;
	dismissable?: boolean;
	color?: BadgeVariants['color'];
	href?: HTMLAnchorAttributes["href"];
	target?: HTMLAnchorAttributes["target"];
	transition?: TransitionFunc;
	params?: ParamsType;
	aClass?: ClassValue;
  }