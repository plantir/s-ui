import { redirect } from '@sveltejs/kit';

/** `/docs` has only a layout; the first doc lives under `/docs/pages/...`. */
export const load = () => {
	redirect(302, '/docs/pages/introduction');
};
