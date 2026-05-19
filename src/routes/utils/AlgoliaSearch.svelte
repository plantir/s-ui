<script lang="ts">
	import '@docsearch/css';
	import docsearch from '@docsearch/js';
	import { resolveComponentDocSlug } from './legacy-component-slugs';

	/** Map Algolia / legacy paths to this app's `/docs/components/...` routes (incl. `button` → `buttons`). */
	function rewriteLocalDocsUrl(url: string): string {
		const origin = window.location.origin;
		let p = url;
		if (url.startsWith(origin)) {
			p = url.slice(origin.length) || '/';
			if (!p.startsWith('/')) p = `/${p}`;
		}
		let m = p.match(/^\/components\/([^/?#]+)(.*)$/);
		if (m && !p.startsWith('/docs/')) {
			return `/docs/components/${resolveComponentDocSlug(m[1])}${m[2]}`;
		}
		m = p.match(/^\/docs\/components\/([^/?#]+)(.*)$/);
		if (m) {
			const slug = resolveComponentDocSlug(m[1]);
			if (slug !== m[1]) return `/docs/components/${slug}${m[2]}`;
		}
		return url;
	}

	const init = (searchContainer: HTMLElement) => {
		docsearch({
			container: searchContainer,
			appId: 'JWUQIZ9PGE',
			indexName: 'flowbite-svelte',
			apiKey: 'db6396bd138ab613540d2a2bc07f958d',
			placeholder: 'Search documentation',
			transformItems: (items) =>
				items.map((item) => ({
					...item,
					url: rewriteLocalDocsUrl(item.url)
				}))
		});
	};
</script>

<div use:init id="docsearch" class="ms-3 hidden 2xl:block 2xl:ps-4"></div>
