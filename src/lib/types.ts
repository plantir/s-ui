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
import type { DatepickerVariants,datepicker } from './datepicker/theme.js';
import type { android, AndroidVariants, defaultMockup, DefaultMockupVariants, desktop, DesktopVariants, ios, IosVariants, laptop, LaptopVariants, smartwatch, SmartwatchVariants, tablet, TabletVariants, } from './device-mockups/theme.js';
import type { drawer, drawerhandle, DrawerHandleVariants, drawerhead, DrawerheadVariants, DrawerVariants } from './drawer/theme.js';
import type { dialog, DialogVariants } from './dialog/theme.js';
import type { modal, ModalVariants } from './modal/theme.js';
import type { footerLink, FooterLinkVariants,FooterCopyrightVariants, footerCopyright } from './footer/theme.js';
import type { kanbanBoard, KanbanBoardVariants,kanbanCard,KanbanCardVariants } from './kanban/theme.js';
import type { GalleryVariants } from './gallery/theme.js';
import type { ListgroupVariants, ListgroupItemVariants } from './list-group/theme.js';
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
  monthColor?:ButtonVariants['color'];
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
  
  export interface ToolbarGroupProps extends ToolbarGroupVariants, HTMLAttributes<HTMLDivElement> {}
  
  export type ToolbarButtonProps = ToolbarButtonVariants &
	AnchorButtonAttributes & {
	  name?: string;
	};
  


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