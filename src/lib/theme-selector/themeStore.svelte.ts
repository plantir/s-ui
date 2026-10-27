import { themeConfigs, type FlowbiteTheme, type ThemeId } from './themes.js';

const browser = typeof window !== 'undefined';

const getStoredTheme = (): string => {
	if (!browser) return 'default';
	try {
		const stored = localStorage.getItem('s-ui-theme');
		if (stored) return stored;
	} catch {
		// localStorage not available
	}
	return 'default';
};

// Always start as 'default' so SSR and the first client render match.
// initTheme() (or loadTheme()) applies a stored theme after mount.
let currentTheme = $state<string>('default');

const selectedTheme = $derived<FlowbiteTheme | undefined>(
	themeConfigs.find((t) => t.id === currentTheme)
);

export function loadTheme(themeId: string, loadFromStatic = false): void {
	if (!browser) return;

	const theme = themeConfigs.find((t) => t.id === themeId);
	if (!theme && !loadFromStatic) {
		console.error(`Theme ${themeId} not found`);
		return;
	}

	// Remove ALL existing theme links
	const existingLinks = document.querySelectorAll(
		'#dynamic-theme-css, #initial-theme-css, #dynamic-theme-font'
	);
	existingLinks.forEach((link) => link.remove());

	// Add font only for known built-in themes
	if (theme) {
		const fontLink = document.createElement('link');
		fontLink.id = 'dynamic-theme-font';
		fontLink.rel = 'stylesheet';
		fontLink.href = theme.fontUrl;
		fontLink.onerror = () => {
			console.warn(`Failed to load font for theme ${themeId}`);
		};
		document.head.appendChild(fontLink);
	}

	// Add new theme CSS
	const themeLink = document.createElement('link');
	themeLink.id = 'dynamic-theme-css';
	themeLink.rel = 'stylesheet';
	const themePath = loadFromStatic ? `/themes/${themeId}.css` : theme!.cssPath;
	themeLink.href = themePath;

	themeLink.onload = () => {
		// Reading offsetHeight triggers synchronous layout recalculation
		void document.body.offsetHeight;
		const html = document.documentElement;
		const originalTransition = html.style.transition;
		html.style.transition = 'none';
		void html.offsetHeight;
		html.style.transition = originalTransition;
	};

	themeLink.onerror = () => {
		console.error(`Failed to load theme ${themeId} from ${themePath}`);
	};

	document.head.appendChild(themeLink);

	try {
		localStorage.setItem('s-ui-theme', themeId);
	} catch (e) {
		console.warn('Could not save theme:', e);
	}

	currentTheme = themeId;
}

/**
 * Apply a saved theme. Call from ThemeSelector (onMount) or the app root layout.
 * Safe to call on the server — it is a no-op there.
 */
export function initTheme(loadFromStatic = false): void {
	if (!browser) return;
	const initial = getStoredTheme();
	if (initial === 'default') {
		currentTheme = 'default';
		return;
	}
	loadTheme(initial, loadFromStatic || !themeConfigs.some((t) => t.id === initial));
}

/**
 * Blocking boot snippet for `<svelte:head>` / `app.html`.
 * Loads the stored theme stylesheet before first paint to reduce token flash.
 * Does not change component variant classes (those update after initTheme()).
 */
export function getThemeBootScript(): string {
	const map = Object.fromEntries(themeConfigs.map((t) => [t.id, t.cssPath]));
	return `(function(){try{var t=localStorage.getItem('s-ui-theme');if(!t||t==='default')return;if(document.getElementById('dynamic-theme-css'))return;var href=${JSON.stringify(map)}[t];if(!href)href='/themes/'+t+'.css';var l=document.createElement('link');l.id='dynamic-theme-css';l.rel='stylesheet';l.href=href;document.head.appendChild(l);}catch(e){}})();`;
}

export function getCurrentTheme(): string {
	return currentTheme;
}

/**
 * Returns the current theme narrowed to the variant keys used by tailwind-variants
 * theme props (e.g. `theme: 'fluent' | 'default'`). Unknown or custom themes fall
 * back to 'default' so variant styling still applies.
 */
export function getCurrentThemeVariant(): 'fluent' | 'default' {
	return currentTheme === 'fluent' ? 'fluent' : 'default';
}

export function getSelectedTheme(): FlowbiteTheme | undefined {
	return selectedTheme;
}

export { themeConfigs };
export type { FlowbiteTheme, ThemeId };
