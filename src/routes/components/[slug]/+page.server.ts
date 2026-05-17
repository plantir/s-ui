import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { resolveComponentDocSlug } from '../../utils/legacy-component-slugs';

/** Official Flowbite Svelte URLs use `/components/...`; this app serves docs under `/docs/components/...`. */
export const load: PageServerLoad = async ({ params }) => {
	const slug = resolveComponentDocSlug(params.slug);
	redirect(308, `/docs/components/${slug}`);
};
