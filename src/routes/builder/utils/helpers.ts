/** Used by `ComponentsLayout` for block nav labels (e.g. "quickstart" → "Quickstart"). */
export function capitalizeFirstLetter(value: string): string {
	if (!value) return value;
	return value.charAt(0).toUpperCase() + value.slice(1);
}
