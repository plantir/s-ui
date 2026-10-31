/** Semantic color names kept for backward compatibility with older docs and apps. */
export const SEMANTIC_COLOR_ALIASES = {
	success: 'green',
	danger: 'red',
	warning: 'yellow',
	dark: 'gray',
	neutral: 'gray'
} as const;

export type SemanticColorAlias = keyof typeof SEMANTIC_COLOR_ALIASES;

export function resolveColor(color?: string | null): string | undefined {
	if (color == null) return undefined;
	return SEMANTIC_COLOR_ALIASES[color as SemanticColorAlias] ?? color;
}
