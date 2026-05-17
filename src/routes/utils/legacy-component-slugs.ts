/** Official Flowbite Svelte URLs vs local `*.md` filenames (e.g. `/components/button` → `buttons.md`). */
export const LEGACY_COMPONENT_SLUGS: Readonly<Record<string, string>> = {
	button: 'buttons'
};

export function resolveComponentDocSlug(slug: string): string {
	return LEGACY_COMPONENT_SLUGS[slug] ?? slug;
}
