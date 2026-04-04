import { createContext } from 'svelte';
import type { ThemeConfig } from './theme';
import type { AccordionContextType } from './types';
/**
 * Helper function to create a context with safe getter that returns undefined instead of throwing
 * when accessed outside of the context provider.
 */
function createSafeContext<T>() {
	const [getRaw, set] = createContext<T>();

	function get(): T | undefined {
		try {
			return getRaw();
		} catch {
			return undefined;
		}
	}

	return [get, set] as const;
}
// Theme - use a wrapper type that supports reactive access
type ThemeContextValue = ThemeConfig | { value?: ThemeConfig };
const [getThemeContext, setThemeContext] = createSafeContext<ThemeContextValue>();
export { getThemeContext, setThemeContext };

// Accordion
const [getAccordionContext, setAccordionContext] = createSafeContext<AccordionContextType>();
export { getAccordionContext, setAccordionContext };
