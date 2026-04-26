import type { Component, Snippet } from 'svelte';
import type { fade, fly, scale, slide } from "svelte/transition";
import type { Coords, Middleware, Placement, Strategy } from "@floating-ui/dom";
import type { Writable } from "svelte/store";
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
	EasingFunction,
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
import type { Day } from "date-fns";
import type { AccordionVariants, AccordionItemVariants } from './accordion/theme.js';
import type { AlertVariants } from './alert/theme.js';
import type { AvatarVariants } from './avatar/theme.js';
import type { badge, BadgeVariants } from './badge/theme.js';
import type { card, CardVariants } from '$lib/card/theme.js';
import type { CloseButtonVariants } from './utils/theme.js';
import type { IndicatorVariants } from './indicator/theme.js';
import type { BannerVariants } from './banner/theme.js';
import type { SpinnerVariants } from './spinner/theme.js';
import type { ClipboardManagerVariants } from './clipboard-manager/theme.js';
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
import type { ClipboardVariants } from './clipboard/theme.js';
import type { ToolbarButtonVariants, ToolbarGroupVariants, ToolbarVariants, toolbar } from './toolbar/theme.js';
import type { DatepickerVariants, datepicker } from './datepicker/theme.js';
import type { android, AndroidVariants, defaultMockup, DefaultMockupVariants, desktop, DesktopVariants, ios, IosVariants, laptop, LaptopVariants, smartwatch, SmartwatchVariants, tablet, TabletVariants, } from './device-mockups/theme.js';
import type { drawer, drawerhandle, DrawerHandleVariants, drawerhead, DrawerheadVariants, DrawerVariants } from './drawer/theme.js';
import type { dialog, DialogVariants } from './dialog/theme.js';
import type { modal, ModalVariants } from './modal/theme.js';
import type { footerLink, FooterLinkVariants, FooterCopyrightVariants, footerCopyright } from './footer/theme.js';
import type { kanbanBoard, KanbanBoardVariants, kanbanCard, KanbanCardVariants } from './kanban/theme.js';
import type { GalleryVariants } from './gallery/theme.js';
import type { ListgroupVariants, ListgroupItemVariants } from './list-group/theme.js';
import type { progressbar, ProgressbarVariants, progressradial, ProgressradialVariants } from './progress/theme.js';
import type { popover, PopoverVariants } from './popover/theme.js';
import type { PaginationItemVariants, PaginationVariants } from './pagination/theme.js';
import type { PaginationNavVariants } from './pagination/theme.js';
import type { TooltipVariants } from './tooltip/theme.js';
import type { NavbarHamburgerVariants, NavbarUlVariants, navbarHamburger, navbarUl } from './navbar/theme.js';
import type { LinkType } from './types copy.js';
import type { megamenu, MegaMenuVariants } from './mega-menu/theme.js';
import type { AdvancedRatingVariants, RatingVariants, ReviewVariants, ScoreRatingVariants, advancedRating, rating, review, scoreRating } from './rating/theme.js';
import type { SidebarVariants, SidebarCtaVariants, SidebarBrandVariants, SidebarDropdownWrapperVariants, SidebarButtonVariants, sidebar, sidebarButton, sidebarCta, sidebarDropdownWrapper, sidebarBrand } from './sidebar/theme.js';
import type { SpeedDialButtonVariants, SpeedDialVariants, speedDial, speedDialButton } from './speed-dial/theme.js';
import type {
	CardPlaceholderVariants,
	ImagePlaceholderVariants,
	ListPlaceholderVariants,
	SkeletonVariants,
	TestimonialPlaceholderVariants,
	TextPlaceholderVariants,
	VideoPlaceholderVariants,
	WidgetPlaceholderVariants,
	cardPlaceholder,
	imagePlaceholder,
	listPlaceholder,
	skeleton,
	testimonialPlaceholder,
	textPlaceholder,
	widgetPlaceholder
} from './skeleton/theme.js';
import type { scrollspy, ScrollSpyVariants } from './scroll-spy/theme.js';
import type { stepIndicator, StepIndicatorVariants } from './step-indicator/theme.js';
import type { StepperVariants, BreadcrumbStepperVariants, DetailedStepperVariants, ProgressStepperVariants, TimelineStepperVariants, VerticalStepperVariants, breadcrumbStepper, detailedStepper, progressStepper, stepper, timelineStepper, verticalStepper } from './stepper/theme.js';
import type { table, tableSearch, TableSearchColor, TableSearchVariants, TableVariants } from './table/theme.js'
import type { tabItem, TabItemVariants, TabsVaraints } from './tabs/theme.js'
import type { ToastVaraints, toast } from './toast/theme.js';
import type { TimelineVariants, TimelineItemVariants, timelineItem } from './timeline/theme.js';
import type { TourVariants, tour } from './tour/theme.js';
import type { AnchorVariants } from './a/theme.js';
import type { BlockquoteVariants } from './blockquote/theme.js';
import type { DescriptionListVariants } from './descriptionlist/theme.js';
import type { HeadingVariants } from './heading/theme.js';
import type { ParagraphVariants } from './paragraph/theme.js';
import type { ImgVariants, img } from './img/theme.js';
import type { ListVariants } from './list/theme.js';
import type { SpanVariants } from './span/theme.js';
export declare const xs = "xs";
export declare const sm = "sm";
export declare const md = "md";
export declare const lg = "lg";
export declare const xl = "xl";
export type AnchorButtonAttributes =
	| ({ href: string } & HTMLAnchorAttributes)
	| ({ href?: undefined } & HTMLButtonAttributes);
export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;
export type { ThemeConfig } from './theme';

export type DeviceVariantType = "default" | "ios" | "android" | "tablet" | "laptop" | "desktop" | "smartwatch";

export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

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
	transitionType?: TransitionFunc | "none";
}

// BottomNav Context
export interface BottomNavContextType {
	activeClass?: string | null;
	activeUrl?: string;
	navType?: BottomNavVariants["navType"];
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

// Drawer Context
export interface DrawerContextType {
	placement: "left" | "right" | "top" | "bottom";
}

// Dropdown Context
export interface DropdownContextType {
	activeUrl: string;
}

// Pagination Context
export interface PaginationContextType {
	group: boolean;
	table?: boolean;
	size?: "default" | "large";
	activeClasses?: ClassValue;
}

// ButtonToggle Context
export interface ButtonToggleContextType {
	toggleSelected: (toggleValue: string) => void;
	isSelected: (toggleValue: string) => boolean;
	multiSelect: boolean;
	color?: string;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	roundedSize?: "sm" | "md" | "lg" | "xl" | "full"; // Aligned with ButtonToggleGroupProps
	ctxIconClass?: string;
	ctxBtnClass?: string;
}

// List Context
export interface ListContextType {
	ctxClass: string;
}

// Toolbar Context
export interface ToolbarContextType {
	separators: boolean;
}

// ListGroup Context
export interface ListGroupContextType {
	active?: boolean;
	horizontal?: boolean;
}

// ButtonGroup Context
export interface ButtonGroupContextType {
	size: SizeType;
	disabled?: boolean;
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


// clipboard-manager


export interface ClipboardItem {
	id: number;
	text: string;
	pinned?: boolean;
	timestamp: number;
}

export interface ClipboardManagerProps extends ClipboardManagerVariants {
	children?: Snippet<[{ item: ClipboardItem; copyItem: (item: ClipboardItem) => Promise<void>; deleteItem: (id: number) => void; togglePin: (id: number) => void }]>;
	items?: ClipboardItem[];
	placeholder?: string;
	saveLabel?: string;
	clearLabel?: string;
	limit?: number;
	saveToStorage?: boolean;
	class?: ClassValue | null;
	toastDuration?: number;
	filterSensitive?: boolean;
	maxLength?: number;
	enableSelectionMenu?: boolean;
	selectionTarget?: string;
	showInput?: boolean; // NEW!
	emptyState?: Snippet;
	storageKey?: string;
	open?: boolean;
	badgeProps?: Omit<BadgeProps, "children">;
	modalProps?: ModalProps;
	detectSensitiveData?: (text: string) => boolean;
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
// clipboard
export interface ClipboardProps extends ClipboardVariants, Omit<ButtonProps, 'children'> {
	children: Snippet<[boolean]>;
	value?: string;
	success?: boolean;
	showLabel?: boolean;
	embedded?: boolean;
}

// darkmode
export interface DarkmodeProps extends HTMLButtonAttributes {
	lightIcon?: Snippet;
	darkIcon?: Snippet;
	size?: 'sm' | 'md' | 'lg';
	ariaLabel?: string;
}

// datepicker
export type DateOrRange = Date | { from?: Date; to?: Date };

export interface ActionSlotParams {
	selectedDate: DateOrRange | undefined;
	handleClear: () => void;
	handleApply: (date: DateOrRange) => void;
	close: () => void;
}

export interface DatepickerProps extends DatepickerVariants, Omit<HTMLAttributes<HTMLDivElement>, "onselect"> {
	value?: Date;
	defaultDate?: Date | null;
	range?: boolean;
	rangeFrom?: Date;
	rangeTo?: Date;
	availableFrom?: Date | null;
	availableTo?: Date | null;
	locale?: string;
	firstDayOfWeek?: Day;
	dateFormat?: Intl.DateTimeFormatOptions;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	color?: ButtonVariants['color'];
	inline?: boolean;
	autohide?: boolean;
	showActionButtons?: boolean;
	title?: string;
	classes?: Classes<typeof datepicker>;
	onselect?: (x: DateOrRange) => void;
	onclear?: () => void;
	onapply?: (x: DateOrRange) => void;
	inputmode?: HTMLInputAttributes["inputmode"];
	monthColor?: ButtonVariants['color'];
	btnClass?: ClassValue;
	inputClass?: ClassValue;
	monthBtnSelected?: ClassValue;
	monthBtn?: ClassValue;
	translationLocale?: string;
	elementRef?: HTMLInputElement;
	actionSlot?: Snippet<[ActionSlotParams]>;
	inputProps?: HTMLInputAttributes;
}


// device-mockups
export interface DeviceMockupProps {
	children: Snippet;
	classes?: Classes<typeof desktop> | Classes<typeof android> | Classes<typeof ios> | Classes<typeof laptop> | Classes<typeof smartwatch> | Classes<typeof tablet>;
	device?: DeviceVariantType;
}

export interface DesktopProps extends DesktopVariants, HTMLAttributes<HTMLElement> {
	children?: Snippet;
	classes?: Classes<typeof desktop>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
}

export interface LaptopProps extends LaptopVariants, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof laptop>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
}

export interface AndroidProps extends Omit<AndroidVariants, 'slot'>, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof android>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
	div5Class?: ClassValue;
	div6Class?: ClassValue;
	div7Class?: ClassValue;
}

export interface DefaultMockupProps extends Omit<DefaultMockupVariants, 'slot'>, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof defaultMockup>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
	div5Class?: ClassValue;
	div6Class?: ClassValue;
}

export interface IosProps extends Omit<IosVariants, 'slot'>, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof ios>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
	div5Class?: ClassValue;
	div6Class?: ClassValue;
}

export interface SmartwatchProps extends Omit<SmartwatchVariants, 'slot'>, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof smartwatch>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
	div5Class?: ClassValue;
	div6Class?: ClassValue;
}

export interface TabletProps extends Omit<TabletVariants, 'slot'>, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof tablet>;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	div4Class?: ClassValue;
	div5Class?: ClassValue;
	div6Class?: ClassValue;
}



// dialog

export interface DialogProps extends DialogVariants, HTMLDialogAttributes {
	onaction?: ({ action, data }: { action: string; data: FormData }) => void;
	classes?: Classes<typeof dialog>;
	form?: boolean;
	modal?: boolean;
	autoclose?: boolean;
	focustrap?: boolean;
	permanent?: boolean;
	dismissable?: boolean;
	outsideclose?: boolean;
	transition?: TransitionFunc;
	transitionParams?: ParamsType;
}

// drawer
export interface DrawerProps extends DrawerVariants, Omit<DialogProps, "classes" | "form"> {
	classes?: Classes<typeof drawer>;
	offset?: string;
}

export interface DrawerHandleProps extends DrawerHandleVariants, HTMLButtonAttributes {
	classes?: Classes<typeof drawerhandle>;
}

export interface DrawerheadProps extends DrawerheadVariants, HTMLButtonAttributes {
	closeIcon?: Snippet;
	classes?: Classes<typeof drawerhead>;
	buttonClass?: ClassValue;
	svgClass?: ClassValue;
}

// toolbar
export interface ToolbarProps extends ToolbarVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	classes?: Classes<typeof toolbar>;
	color?: ToolbarVariants['color'];
	end?: Snippet;
}

export interface ToolbarGroupProps extends ToolbarGroupVariants, HTMLAttributes<HTMLDivElement> { }

export interface ToolbarButtonProps extends ToolbarButtonVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	name?: string;
};



// dropdown
export interface DropdownProps extends PopperProps {
	simple?: boolean;
	activeUrl?: string;
	isOpen?: boolean;
}

export type DropdownDividerProps = HTMLAttributes<HTMLDivElement>;

export interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
}

export interface DropdownItemProps {
	children: Snippet;
	aClass?: ClassValue;
	activeClass?: ClassValue;
	liClass?: ClassValue;
	classes?: {
		active?: ClassValue;
		base?: ClassValue;
		li?: ClassValue;
	};
	class?: ClassValue;
	href?: string;
	onclick?: (e: MouseEvent) => void;
	[key: string]: unknown;
}

export interface DropdownGroupProps extends HTMLAttributes<HTMLUListElement> {
	children: Snippet;
}

// footer
export type FooterType = "default" | "sticky" | "sitemap" | "socialmedia" | "logo" | undefined;

export interface FooterProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	footerType?: FooterType;
}

export interface FooterBrandProps extends HTMLAnchorAttributes {
	children?: Snippet;
	aClass?: ClassValue;
	spanClass?: ClassValue;
	imgClass?: ClassValue;
	href?: string;
	src?: string;
	alt?: string;
	name?: string;
}

export interface FooterCopyrightProps extends FooterCopyrightVariants, HTMLAnchorAttributes {
	spanClass?: ClassValue;
	aClass?: ClassValue;
	classes?: Classes<typeof footerCopyright>;
	href?: string;
	by?: string;
	copyrightMessage?: string;
	year?: number;
	bySpanClass?: ClassValue;
}

export interface FooterIconProps extends HTMLAnchorAttributes {
	children: Snippet;
	href?: string;
	ariaLabel?: string;
}

export interface FooterLinkGroupProps extends HTMLAttributes<HTMLUListElement> {
	children: Snippet;
}

export interface FooterLinkProps extends FooterLinkVariants, HTMLAnchorAttributes {
	children: Snippet;
	classes?: Classes<typeof footerLink>;
	liClass?: ClassValue;
	aClass?: ClassValue;
	href?: string;
}


// gallery
export type ImgType = {
	src?: string;
	alt?: string;
};

export interface GalleryProps extends GalleryVariants, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	figure?: Snippet<[item: ImgType]>;
	items?: HTMLImgAttributes[];
	imgClass?: ClassValue;
	height?: string;
	rowHeight?: number;
	columns?: number;
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

// kbd
export interface KbdProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
}

// list-group
export interface ListGroupItemType {
	name?: string;
	Icon?: Component;
	onclick?: () => void;
	href?: string;
	active?: boolean;
	current?: boolean;
	disabled?: boolean;
	img?: { src: string; alt: string };
	comment?: string;
	message?: string;
	[key: string]: unknown;
}

export interface ListgroupProps extends ListgroupVariants, Omit<HTMLAttributes<HTMLUListElement>, "children"> {
	children?: Snippet<[item: ListGroupItemType | string]>;
	items?: (ListGroupItemType | string)[];
	active?: boolean;
	onclick?: (event?: MouseEvent) => void;
	itemClass?: ClassValue;
	aClasss?: ClassValue;
	btnClass?: ClassValue;
	iconClass?: ClassValue;
}

export interface ListgroupItemProps extends Omit<ListgroupItemVariants, "state">, HTMLAttributes<HTMLDivElement> {
	current?: boolean;
	disabled?: boolean;
	Icon?: Component;
	iconClass?: ClassValue;
	name?: string;
	children?: Snippet;
};


// spinner
export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
	type?: 'default' | 'dots' | 'bars' | 'pulse' | 'orbit';
	color?: SpinnerVariants['color'];
	size?: SpinnerVariants['size'];
	currentFill?: string;
	currentColor?: string;
}

// Kanbanboard
export interface KanbanCardType {
	id: string | number;
	title: string;
	description?: string;
	tags?: string[];
}

export interface KanbanColumnType {
	id: string | number;
	title: string;
	cards: KanbanCardType[];
	color?: string;
}

export interface KanbanBoardProps extends KanbanBoardVariants, HTMLAttributes<HTMLDivElement> {
	columns?: KanbanColumnType[];
	classes?: Classes<typeof kanbanBoard>;
	onMove?: (card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) => void;
	onAddCard?: (col: KanbanColumnType) => void;
	cardProps?: Partial<Omit<KanbanCardProps, "card" | "isDragging" | "onDragStart" | "onDragEnd">>;
	class?: ClassValue | null;
}

export interface KanbanCardProps extends KanbanCardVariants, HTMLAttributes<HTMLElement> {
	card: KanbanCardType;
	isDragging?: boolean;
	classes?: Classes<typeof kanbanCard>;
	onDragStart?: (card: KanbanCardType, ev?: DragEvent) => void;
	onDragEnd?: (ev?: DragEvent) => void;
	class?: ClassValue | null;
}
// mega-menu
export interface MegaMenuProps extends MegaMenuVariants, Omit<PopperProps, "children"> {
	children: Snippet<[{ item: LinkType; index: number }]>;
	extra?: Snippet;
	items?: LinkType[];
	classes?: Classes<typeof megamenu>;
	full?: boolean;
	ulClass?: ClassValue;
	extraClass?: ClassValue;
	isOpen?: boolean;
}
// modal
export interface ModalProps extends ModalVariants, DialogProps {
	header?: Snippet;
	footer?: Snippet;
	classes?: Classes<typeof modal>;
	headerClass?: ClassValue;
	bodyClass?: ClassValue;
	footerClass?: ClassValue;
	closeBtnClass?: ClassValue;
	fullscreen?: boolean;
}


// navbar
export interface MenuProps extends SVGAttributes<SVGSVGElement> {
	size?: string;
	color?: string;
	variation?: "solid" | "outline";
	ariaLabel?: string;
}

export type NavbarState = {
	hidden: boolean;
	activeClass?: string;
	nonActiveClass?: string;
	activeUrl?: string;
};

export type NavbarBreakpoint = "sm" | "md" | "lg" | "xl";

export interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	children: Snippet<[{ hidden: boolean; toggle: () => void; NavContainer: Component }]>;
	fluid?: boolean;
	navContainerClass?: ClassValue;
	closeOnClickOutside?: boolean;
	breakpoint?: NavbarBreakpoint;
}

export type NavBrandProps = HTMLAnchorAttributes;

export interface NavContainerProps extends HTMLAttributes<HTMLDivElement> {
	fluid?: boolean;
}

export interface NavHamburgerProps extends NavbarHamburgerVariants, Omit<HTMLAttributes<HTMLDivElement>, "class"> {
	classes?: Classes<typeof navbarHamburger>;
	href?: undefined;
	class?: ClassValue;
	name?: string
	menuClass?: ClassValue;
};

export interface NavUlProps extends NavbarUlVariants, Omit<HTMLAttributes<HTMLDivElement>, "class"> {
	activeUrl?: string;
	ulClass?: ClassValue;
	hidden?: boolean;
	classes?: Classes<typeof navbarUl>;
	// Legacy support
	slideParams?: SlideParams;
	// New transition props
	transition?: typeof slide | typeof fly | typeof fade | typeof scale;
	transitionParams?: SlideParams | FlyParams | FadeParams | ScaleParams;
	activeClass?: ClassValue;
	nonActiveClass?: ClassValue;
	respectMotionPreference?: boolean;
	class?: ClassValue;
}

export type NavLiProps = AnchorButtonAttributes & {
	activeClass?: ClassValue;
	nonActiveClass?: ClassValue;
};

// pagination
export type PaginationItemType = {
	size?: "default" | "large";
	active?: boolean | null;
	group?: boolean | null;
	table?: boolean | null;
};

export interface PaginationItemSpecificProps {
	children?: Snippet;
	name?: string;
	href?: string;
	active?: boolean;
	rel?: string;
	size?: "default" | "large";
}

export type PaginationHTMLButtonOrAnchorAttributes = HTMLButtonAttributes & HTMLAnchorAttributes;

export interface PaginationButtonProps extends PaginationItemVariants, PaginationHTMLButtonOrAnchorAttributes {
	children?: Snippet;
	onclick?: () => void;
	disabled?: boolean;
}

export interface PaginationNavProps extends PaginationNavVariants, HTMLAttributes<HTMLElement>, PaginationVariants {
	prevContent?: Snippet;
	nextContent?: Snippet;
	prevClass?: ClassValue;
	nextClass?: ClassValue;
	currentPage: number;
	totalPages: number;
	visiblePages?: number;
	onPageChange: (page: number) => void;
	layout?: "navigation" | "pagination" | "table";
	previousLabel?: string;
	nextLabel?: string;
	showIcons?: boolean;
	ariaLabel?: string;
	size?: "default" | "large";
	spanClass?: ClassValue;
	tableDivClass?: ClassValue;
	classes?: {
		prev?: ClassValue;
		next?: ClassValue;
		span?: ClassValue;
		tableDiv?: ClassValue;
		active?: ClassValue; // Add this line to support custom active classes
	};
}

export interface PaginationItemProps extends PaginationItemVariants, PaginationHTMLButtonOrAnchorAttributes {
	children?: Snippet;
}

export interface PaginationProps extends PaginationVariants, HTMLLiAttributes {
	prevContent?: Snippet;
	nextContent?: Snippet;
	pages?: PaginationItemProps[];
	previous?: () => void;
	next?: () => void;
	ariaLabel?: string;
}

// popover
export interface PopoverProps extends PopoverVariants, Omit<PopperProps, "title"> {
	title?: Snippet | string;
	color?: PopoverVariants["color"];
	classes?: Classes<typeof popover>;
	params?: ParamsType;
	defaultClass?: ClassValue;
	transition?: TransitionFunc;
	isOpen?: boolean;
}

// progress
export interface ProgressbarProps extends ProgressbarVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	progress?: string | number;
	precision?: number;
	tweenDuration?: number;
	animate?: boolean;
	size?: string;
	classes?: Classes<typeof progressbar>;
	labelInside?: boolean;
	labelOutside?: string;
	easing?: EasingFunction;
}

export interface ProgressradialProps extends ProgressradialVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	progress?: number | string;
	radius?: number;
	startingPosition?: "top" | "right" | "bottom" | "left";
	precision?: number;
	tweenDuration?: number;
	classes?: Classes<typeof progressradial>;
	animate?: boolean;
	size?: string;
	thickness?: number | string;
	labelInside?: boolean;
	labelOutside?: string;
	easing?: (t: number) => number;
}


// rating
export type RatingItem = { label: string | null | undefined; rating: number };

export interface AdvancedRatingProps extends AdvancedRatingVariants, HTMLAttributes<HTMLDivElement> {
	rating?: Snippet;
	globalText?: Snippet;
	classes?: Classes<typeof advancedRating>;
	ratings: RatingItem[];
	divClass?: ClassValue;
	spanClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	span2Class?: ClassValue;
	unit?: string;
}

export interface RatingProps extends RatingVariants, HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	classes?: Classes<typeof rating>;
	text?: Snippet;
	size?: number;
	total?: number;
	rating?: number;
	icon?: Component;
	count?: boolean;
	pClass?: ClassValue;
}

export interface RatingCommentProps {
	children: Snippet;
	evaluation?: Snippet;
	helpfullink?: string;
	abuselink?: string;
	comment: {
		id?: string;
		user: {
			name?: string;
			img: {
				src: string | undefined | null;
				alt?: string;
			};
			joined?: string;
		};
		total?: number;
		rating: number;
		heading?: string;
		address?: string;
		datetime?: string;
	};
}

export type ReviewType = {
	name?: string;
	imgSrc?: string;
	imgAlt?: string;
	address?: string;
	reviewDate?: string;
	title?: string;
	rating?: number;
	item1?: string;
	item2?: string;
	item3?: string;
};

export interface ReviewProps extends ReviewVariants, HTMLAttributes<HTMLElement> {
	children: Snippet;
	address?: Snippet;
	item1?: Snippet;
	item2?: Snippet;
	item3?: Snippet;
	classes?: Classes<typeof review>;
	review?: ReviewType;
	articleClass?: ClassValue;
	divClass?: ClassValue;
	div2Class?: ClassValue;
	div3Class?: ClassValue;
	imgClass?: ClassValue;
	ulClass?: ClassValue;
	liClass?: ClassValue;
}

export interface ScoreRatingProps extends ScoreRatingVariants {
	ratings?: { label: string | undefined | null; rating: number }[];
	ratings2?: { label: string | undefined | null; rating: number }[];
	classes?: Classes<typeof scoreRating>;
	headerLabel?: {
		desc1?: string;
		desc2?: string;
		desc3?: string;
		link?: { label: string | undefined | null; url: string };
	};
}

export interface RatingIconProps extends SVGAttributes<SVGSVGElement> {
	fillPercent?: number;
	fillColor?: string;
	strokeColor?: string;
	size?: number;
	ariaLabel?: string;
	role?: string;
	svgClass?: ClassValue;
	iconIndex?: number;
	groupId?: string;
	pathd?: string;
}

// sidebar
export type SidebarContextType = {
	closeSidebar?: () => void;
	activeClass?: string;
	nonActiveClass?: string;
	isSingle?: boolean;
	selected?: Writable<object | null>;
	activeUrl?: string;
};

export interface SidebarProps extends SidebarVariants, HTMLAttributes<HTMLElement> {
	children: Snippet;
	isOpen?: boolean;
	closeSidebar?: () => void;
	activateClickOutside?: boolean;
	isSingle?: boolean;
	ariaLabel?: string;
	divClass?: ClassValue;
	nonActiveClass?: ClassValue;
	activeClass?: ClassValue;
	params?: ParamsType;
	classes?: Classes<typeof sidebar>;
	transition?: TransitionFunc;
	backdrop?: boolean;
	backdropClass?: ClassValue;
	activeUrl?: string;
	alwaysOpen?: boolean;
	disableBreakpoints?: boolean;
}

export interface SidebarButtonProps extends SidebarButtonVariants, HTMLButtonAttributes {
	breakpoint?: SidebarVariants["breakpoint"];
	classes?: Classes<typeof sidebarButton>;
	svgClass?: ClassValue;
}

export interface SidebarCtaProps extends SidebarCtaVariants, HTMLAttributes<HTMLDivElement> {
	classes?: Classes<typeof sidebarCta>;
	icon?: Snippet;
	divClass?: ClassValue;
	spanClass?: ClassValue;
	label: string;
}

export interface SiteType {
	name?: string;
	href?: string;
	img?: string;
}

export interface SidebarBrandProps extends SidebarBrandVariants, HTMLAnchorAttributes {
	site?: SiteType;
	classes?: Classes<typeof sidebarBrand>;
	imgClass?: ClassValue;
	spanClass?: ClassValue;
}

export type Bindable<T> = {
	get(): T;
	set(value: T): void;
};

export interface SidebarDropdownWrapperProps extends SidebarDropdownWrapperVariants, HTMLButtonAttributes {
	children: Snippet;
	arrowup?: Snippet;
	arrowdown?: Snippet;
	icon?: Snippet;
	isOpen?: boolean;
	btnClass?: ClassValue;
	label?: string;
	spanClass?: ClassValue;
	ulClass?: ClassValue;
	params?: ParamsType;
	transition?: TransitionFunc;
	svgClass?: ClassValue;
	classes?: Classes<typeof sidebarDropdownWrapper>;
	onclick?: () => void;
	isSingle?: boolean;
}

export interface SidebarGroupProps extends HTMLAttributes<HTMLUListElement> {
	children: Snippet;
	borderClass?: ClassValue;
	border?: boolean;
}

export interface SidebarItemProps extends HTMLAnchorAttributes {
	icon?: Snippet;
	subtext?: Snippet;
	label?: string;
	spanClass?: ClassValue;
	activeClass?: ClassValue;
	nonActiveClass?: ClassValue;
	aClass?: ClassValue;
	active?: boolean;
}

// skeleton
export interface CardPlaceholderProps extends CardPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	size?: CardPlaceholderVariants["size"];
	classes?: Classes<typeof cardPlaceholder>;
}

export interface ImagePlaceholderProps extends ImagePlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	size?: ImagePlaceholderVariants["size"];
	classes?: Classes<typeof imagePlaceholder>;
	rounded?: ImagePlaceholderVariants["rounded"];
	imgOnly?: boolean;
}

export interface ListPlaceholderProps extends ListPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	itemNumber?: number;
	classes?: Classes<typeof listPlaceholder>;
	title?: string;
	size?: ListPlaceholderVariants["size"];
	rounded?: ListPlaceholderVariants["rounded"];
}

export interface SkeletonProps extends SkeletonVariants, HTMLAttributes<HTMLDivElement> {
	size?: SkeletonVariants["size"];
	classes?: Classes<typeof skeleton>;
}

export interface TestimonialPlaceholderProps extends TestimonialPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	classes?: Classes<typeof testimonialPlaceholder>;
}

export interface TextPlaceholderProps extends TextPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	size?: TextPlaceholderVariants["size"];
	classes?: Classes<typeof textPlaceholder>;
}

export interface VideoPlaceholderProps extends VideoPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	size?: VideoPlaceholderVariants["size"];
}

export interface WidgetPlaceholderProps extends WidgetPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
	classes?: Classes<typeof widgetPlaceholder>;
}

// speeddial
export interface SpeedCtxType {
	pill: boolean;
	tooltip: Placement | "none";
	textOutside: boolean;
}

type BaseSpeedDialTriggerProps = {
	children?: Snippet;
	name?: string;
	pill?: boolean;
	icon?: Snippet;
	class?: string;
	[key: string]: unknown;
};

// Two different prop types based on gradient flag
export type RegularSpeedDialTriggerProps = BaseSpeedDialTriggerProps & {
	gradient?: false;
	color?: ButtonVariants["color"];
};

export type GradientSpeedDialTriggerProps = BaseSpeedDialTriggerProps & {
	gradient: true;
	color?: GradientButtonColor;
};
export interface SpeedDialProps extends PopperProps,
	SpeedDialVariants {
	children: Snippet;
	button?: Snippet;
	popperClass?: ClassValue;
	placement?: Placement;
	tooltip?: Placement | "none";
	trigger?: PopperProps["trigger"];
	textOutside?: boolean;
	classes?: Classes<typeof speedDial>;
	pill?: boolean;
	ontoggle?: PopperProps["ontoggle"];
	onbeforetoggle?: PopperProps["onbeforetoggle"];
	isOpen?: boolean;
};
// Union type that forces TypeScript to check properly
export interface SpeedDialTriggerProps extends BaseSpeedDialTriggerProps {
	name?: string;
	pill?: boolean;
	icon?: Snippet;
	color?: GradientButtonColor;
	gradient?: boolean;
	class?: string;
	[key: string]: unknown;
}



export interface SpeedDialButtonProps extends ButtonProps, SpeedDialButtonVariants {
	name?: string;
	tooltip?: Placement | "none";
	pill?: boolean;
	textOutside?: boolean;
	textClass?: ClassValue;
	classes?: Classes<typeof speedDialButton>;
}

// tooltip
export interface TooltipProps extends TooltipVariants, PopperProps { }

// popper
export interface TriggeredToggleEvent extends ToggleEvent {
	trigger: HTMLElement;
}

export interface PopperProps extends Omit<HTMLAttributes<HTMLDivElement>, "onbeforetoggle" | "ontoggle" | "onclose" | "color"> {
	triggeredBy?: string;
	triggerDelay?: number;
	trigger?: "hover" | "click";
	placement?: Placement;
	arrow?: boolean;
	arrowClass?: string;
	offset?: number;
	role?: "tooltip" | "menu" | "dialog" | "listbox" | "combobox";
	yOnly?: boolean; // special case for megamenu - only move on y axis
	strategy?: Strategy;
	reference?: string;
	middlewares?: Middleware[];
	children: Snippet;
	onbeforetoggle?: (ev: TriggeredToggleEvent) => void;
	ontoggle?: (ev: TriggeredToggleEvent) => void;
	onclose?: (ev: TriggeredToggleEvent) => void;
	transition?: TransitionFunc;
	transitionParams?: ParamsType;
	isOpen?: boolean;
}

export interface ArrowProps {
	placement?: Placement;
	cords: Partial<Coords>;
	strategy?: "absolute" | "fixed";
	class?: ClassValue | null;
}



// scrollspy
export interface ScrollSpyItem {
	id: string;
	label: string;
	href?: string;
}

export interface ScrollSpyProps extends ScrollSpyVariants, HTMLAttributes<HTMLElement> {
	/** Array of navigation items */
	items: ScrollSpyItem[];
	/** Position of the navigation bar */
	position?: "top" | "left" | "right";
	/** Offset from top when calculating active section (useful for fixed headers) */
	offset?: number;
	/** Enable sticky positioning */
	sticky?: boolean;
	/** Custom class for active item */
	activeClass?: string;
	/** Custom class for inactive item */
	inactiveClass?: string;
	/** Custom class for nav container */
	class?: string;
	/** Enable smooth scroll behavior */
	smoothScroll?: boolean;
	/** Scroll container selector (if scrolling within a container instead of window) */
	scrollContainer?: string;
	classes?: Classes<typeof scrollspy>;
	/** Callback when active section changes */
	onActiveChange?: (itemId: string) => void;
	/** Callback when navigation item is clicked */
	onNavigate?: (itemId: string) => void;
}



// splitpane
export interface SplitPaneProps {
	direction?: "horizontal" | "vertical";
	minSize?: number;
	responsive?: boolean;
	breakpoint?: number;
	transition?: boolean;
	transitionDuration?: number;
	keyboardStep?: number;
	initialSizes?: number[];
	onResize?: (sizes: number[]) => void;
	children: Snippet;
	class?: ClassValue | null;
}

export interface PaneProps {
	children?: Snippet;
	class?: ClassValue | null;
	style?: string;
}

export interface DividerProps {
	direction: "horizontal" | "vertical";
	index: number;
	onMouseDown: (e: MouseEvent, index: number) => void;
	onTouchStart: (e: TouchEvent, index: number) => void;
	onKeyDown: (e: KeyboardEvent, index: number) => void;
	isDragging: boolean;
	class?: ClassValue | null;
	currentSize: number;
}

export interface SplitPaneContext {
	registerPane: () => number;
	getPaneStyle: (index: number) => string;
	getPaneSize: (index: number) => number;
	shouldRenderDivider: (index: number) => boolean;
	getDirection: () => "horizontal" | "vertical";
	getIsDragging: () => boolean;
	onMouseDown: (e: MouseEvent, index: number) => void;
	onTouchStart: (e: TouchEvent, index: number) => void;
	onKeyDown: (e: KeyboardEvent, index: number) => void;
}


// stepindicator
export interface StepIndicatorProps extends StepIndicatorVariants, HTMLAttributes<HTMLElement> {
	steps?: string[];
	currentStep?: number;
	size?: StepIndicatorVariants["size"];
	color?: StepIndicatorVariants["color"] | "custom";
	glow?: boolean;
	hideLabel?: boolean;
	clickable?: boolean;
	completedCustom?: string;
	currentCustom?: string;
	classes?: Classes<typeof stepIndicator>;
	onStepClick?: (event: { current: number; last: number }) => void;
}

// stepper
export type StepStatus = "completed" | "current" | "pending";

export interface Step {
	id?: number;
	label: string;
	description?: string;
	status?: StepStatus;
	icon?: Component;
	iconClass?: ClassValue;
	descriptionClass?: ClassValue;
}

export interface StepperProps extends HTMLOlAttributes, StepperVariants {
	steps: Step[];
	current?: number; // Current step index (bindable, 1-based; 0 means no step active)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean; // Show checkmark for completed steps (default: true)
	classes?: Classes<typeof stepper>;
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}
export interface ProgressStep {
	id?: string | number;
	status?: StepStatus;
	icon?: Component;
	iconClass?: ClassValue;
}

export interface ProgressStepperProps extends HTMLOlAttributes, ProgressStepperVariants {
	steps: ProgressStep[];
	current?: number; // Current step index (bindable)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean; // Show checkmark for completed steps (default: true)
	classes?: Classes<typeof progressStepper>;
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}

export interface ProgressStepperProps extends HTMLOlAttributes, ProgressStepperVariants {
	steps: ProgressStep[];
	current?: number; // Current step index (bindable)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean; // Show checkmark for completed steps (default: true)
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}
export interface DetailedStep {
	id: number;
	label: string;
	description?: string;
	status?: "completed" | "current" | "pending"; // Optional: Override auto-status
	icon?: Component; // Custom icon for this step (may be replaced by checkmark if step is completed and showCheckmarkForCompleted is true)
	iconClass?: ClassValue;
	descriptionClass?: ClassValue;
}

export interface DetailedStepperProps extends HTMLOlAttributes, DetailedStepperVariants {
	steps: DetailedStep[];
	contentClass?: ClassValue;
	current?: number; // Current step index (bindable)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean;
	classes?: Classes<typeof detailedStepper>;
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}
// VerticalStepper
export interface VerticalStep {
	id: number;
	label: string;
	status?: "completed" | "current" | "pending";
	icon?: Component;
	iconClass?: ClassValue;
}

export interface VerticalStepperProps extends HTMLOlAttributes, VerticalStepperVariants {
	steps: VerticalStep[];
	liClass?: ClassValue;
	current?: number; // Current step index (bindable, 1-based; 0 means no step active)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean; // Show checkmark for completed steps instead of icons
	classes?: Classes<typeof verticalStepper>;
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}

// BreadcrumbStepper
export interface BreadcrumbStep {
	id: number;
	label: string;
	shortLabel?: string;
	status?: "completed" | "current" | "pending";
	icon?: Component;
	iconClass?: ClassValue;
}

export interface BreadcrumbStepperProps extends BreadcrumbStepperVariants, HTMLOlAttributes {
	steps: BreadcrumbStep[];
	current?: number; // Current step index (bindable, 1-based; 0 means no step active)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean; // Show checkmark for completed steps instead of icons
	classes?: Classes<typeof breadcrumbStepper>;
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}

// TimelineStepper
export interface TimelineStep {
	id?: string | number;
	label: string;
	description?: string;
	status?: "completed" | "current" | "pending";
	icon?: Component;
	iconClass?: ClassValue;
}

export interface TimelineStepperProps extends HTMLOlAttributes, TimelineStepperVariants {
	steps: TimelineStep[];
	contentClass?: ClassValue;
	current?: number; // Current step index (bindable, 1-based; 0 means no step active)
	clickable?: boolean; // Allow clicking steps to navigate (default: true)
	showCheckmarkForCompleted?: boolean; // Show checkmark for completed steps instead of icons
	classes?: Classes<typeof timelineStepper>;
	onStepClick?: (event: { current: number; last: number }) => void; // Step click event handler
}

// tables
export type TableContextType = {
	striped?: boolean;
	hoverable?: boolean;
	border?: boolean;
	color?: TableVariants["color"];
};

// prettier-ignore
export type HeadItemType = string | number | {
	text: string;
	[key: string]: string | number | boolean;
};

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
	children?: Snippet;
	headerSlot?: Snippet;
	defaultRow?: boolean;
	headItems?: HeadItemType[];
	striped?: boolean;
	border?: boolean;
	color?: TableVariants["color"];
}

export type TableItemType = Record<string, string | number | boolean>;

export interface TableProps extends TableVariants, Omit<HTMLTableAttributes, "border"> {
	children?: Snippet;
	footerSlot?: Snippet;
	captionSlot?: Snippet;
	classes?: Classes<typeof table>;
	divClass?: ClassValue;
	striped?: boolean;
	hoverable?: boolean;
	border?: boolean;
	shadow?: boolean;
	color?: TableVariants["color"];
	items?: TableItemType[];
}

export interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
	children?: Snippet;
	striped?: boolean;
	hoverable?: boolean;
	border?: boolean;
	color?: TableVariants["color"];
}

export interface TableBodyCellProps extends HTMLTdAttributes {
	children?: Snippet;
	colspan?: number;
	color?: TableVariants["color"];
	onclick?: () => void;
}

export type CellValue = string | number | boolean | null | undefined;

export type BodyRow = CellValue[] | (Record<string, CellValue> & { id?: string | number });

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
	children?: Snippet;
	bodyItems?: BodyRow[];
}

export interface TableHeadCellProps<T = unknown> extends HTMLThAttributes {
	children?: Snippet;
	padding?: string;
	sort?: ((a: T, b: T) => number) | null;
	defaultDirection?: "asc" | "desc";
	defaultSort?: boolean;
	direction?: "asc" | "desc" | null;
}

export type TableSearchType = {
	striped?: boolean;
	hoverable?: boolean;
	color?: string;
};

export interface TableSearchProps extends TableSearchVariants, HTMLTableAttributes {
	children?: Snippet;
	header?: Snippet;
	footer?: Snippet;
	classes?: Classes<typeof tableSearch>;
	divClass?: ClassValue;
	inputValue?: string;
	striped?: boolean;
	hoverable?: boolean;
	customColor?: string;
	color?: TableSearchColor;
	innerDivClass?: ClassValue;
	inputClass?: ClassValue;
	searchClass?: ClassValue;
	svgDivClass?: ClassValue;
	svgClass?: ClassValue;
	tableClass?: ClassValue;
	placeholder?: string;
}

// tabs
export interface TabsProps extends TabsVaraints, HTMLAttributes<HTMLUListElement> {
	children: Snippet;
	selected?: string;
	tabStyle?: TabsVaraints["tabStyle"];
	ulClass?: ClassValue;
	contentClass?: ClassValue;
	divider?: boolean;
}

export interface TabitemProps extends TabItemVariants, HTMLLiAttributes {
	children?: Snippet;
	titleSlot?: Snippet;
	open?: boolean;
	classes?: Classes<typeof tabItem>;
	title?: string; // for UI label
	key?: string; // for identifier
	activeClass?: ClassValue;
	inactiveClass?: ClassValue;
	disabled?: boolean;
	tabStyle?: TabsVaraints["tabStyle"];
}

export interface TabCtxType {
	activeClass?: string;
	inactiveClass?: string;
	tabStyle?: TabsVaraints["tabStyle"];
	panelId: string;
}

export type SelectedTab = { snippet?: Snippet; id?: string };

export interface TabsContextType {
	activeClasses?: string;
	ctx: TabCtxType;
	registerTab: (tab: SelectedTab) => void;
	unregisterTab: (tabId: string) => void;
}
export type DateFormat = "year" | "month-year" | "full-date";

export interface TimelineProps extends HTMLOlAttributes {
	children: Snippet;
	order?: TimelineVariants["order"];
}

type ColorVariant = "primary" | "green" | "orange" | "red" | "blue" | "purple" | "gray";

export interface TimelineItemProps extends TimelineItemVariants, HTMLLiAttributes {
	children: Snippet;
	orientationSlot?: Snippet;
	title: string;
	date: string;
	svgClass?: string;
	liClass?: string;
	defaultDivClass?: string;
	divClass?: string;
	timeClass?: string;
	h3Class?: string;
	dateFormat?: DateFormat;
	color?: ColorVariant;
	isLast?: boolean;
	connectorClass?: string;
	datePrefix?: string;
	classes?: Classes<typeof timelineItem>;
}
export interface ToastProps extends ToastVaraints, HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	icon?: Snippet;
	toastStatus?: boolean;
	dismissable?: boolean;
	color?: ToastVaraints["color"];
	position?: ToastVaraints["position"];
	iconClass?: string;
	contentClass?: string;
	align?: boolean;
	params?: ParamsType;
	transition?: TransitionFunc;
	class?: string;
	classes?: Classes<typeof toast>;
}

export interface ToastContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	position?: ToastVaraints["position"];
	class?: ClassValue | null;
}

export type TourStep = {
	target: string;
	title?: string;
	description: string;
	placement?: Placement;
};

export interface TourProps extends TourVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
	steps: TourStep[];
	active?: boolean;
	currentStep?: number;
	oncomplete?: () => void;
	onskip?: () => void;
	showOverlay?: boolean;
	scrollBehavior?: ScrollBehavior;
	tooltipOffset?: number;
	highlightClass?: string;
	classes?: Classes<typeof tour>;
}

export interface AnchorProps {
	children: Snippet;
	color?: AnchorVariants["color"];
	asButton?: boolean;
	onclick?: (event: MouseEvent) => void;
	// Common attributes that make sense for both button and anchor
	id?: string;
	class?: string;
	style?: string;
	tabindex?: number;
	title?: string;
	role?: string;
	"aria-label"?: string;
	"data-testid"?: string;
	// Anchor-specific attributes (used when asButton is false)
	href?: string;
	target?: string;
	rel?: string;
	download?: string | boolean;
	// Button-specific attributes (used when asButton is true)
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	name?: string;
	value?: string | number | string[];
	// Allow any other attributes (like data-* attributes)
	[key: string]: any;

}
export interface BlockquoteProps extends HTMLBlockquoteAttributes {
	children: Snippet;
	border?: boolean;
	italic?: boolean;
	bg?: boolean;
	alignment?: BlockquoteVariants["alignment"];
	size?: BlockquoteVariants["size"];
}
export interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	tag: DescriptionListVariants["tag"];
}
export interface HeadingProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	tag?: HeadingVariants["tag"];
}
export interface ParagraphProps extends ParagraphVariants, HTMLAttributes<HTMLParagraphElement> {
	children: Snippet;
	italic?: boolean;
	firstUpper?: boolean;
	justify?: boolean;
}
export interface Picture {
	/**
	 * Key is format. Value is srcset.
	 */
	sources: Record<string, string>;
	img: {
		src: string;
		w: number;
		h: number;
	};
}
// export type EnhancedImgAttributes = Omit<HTMLImgAttributes, "src"> & { src: string };

export interface ImgProps extends ImgVariants, Omit<HTMLImgAttributes, "children"> {
	children?: Snippet<[{ class: string; restProps: any }]>;
	size?: ImgVariants["size"];
	effect?: ImgVariants["effect"];
	caption?: string;
	figClass?: string;
	captionClass?: string;
	href?: HTMLAnchorElement["href"];
	align?: ImgVariants["align"];
	class?: string;
	classes?: Classes<typeof img>;
}

export interface EnhandedImgProps extends ImgVariants, Omit<HTMLImgAttributes, "src"> {
	src: string | Picture;
	size?: ImgVariants["size"];
	multiple?: boolean;
	transform?: string;
	effect?: ImgVariants["effect"];
	caption?: string;
	figClass?: string;
	captionClass?: string;
	href?: HTMLAnchorElement["href"];
}
export interface LayoutProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
}

export interface ListProps extends HTMLOlAttributes {
	children: Snippet;
	tag?: ListVariants["tag"];
	position?: ListVariants["position"];
	ctxClass?: string;
	isContenteditable?: boolean;
}

export interface LiProps extends HTMLLiAttributes {
	children: Snippet;
	icon?: boolean;
}

export interface MarkProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
}

export interface SecondaryProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
}

export interface SpanProps extends SpanVariants, HTMLAttributes<HTMLSpanElement> {
	children?: Snippet;
	italic?: boolean;
	underline?: boolean;
	linethrough?: boolean;
	uppercase?: boolean;
}