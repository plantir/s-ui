import path from 'path';
import autoAdapter from '@sveltejs/adapter-auto';
import nodeAdapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { includeFiles } from './include-files.js';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/**
 * Keep adapter-auto as the default so Vercel/Netlify/local `vite build` is unchanged.
 * Docker sets ADAPTER=node (see `build:docs`) because adapter-auto cannot detect a
 * platform inside a generic Linux container. adapter-node is already a dependency
 * and preserves SSR plus server redirects. A fully static nginx image would need
 * global prerender (currently commented out) and entries for dynamic [slug] routes.
 */
function resolveAdapter() {
	if (process.env.ADAPTER === 'node') {
		return nodeAdapter();
	}

	return autoAdapter();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Required so import.meta.glob("../*.md") modules are compiled by mdsvex + vite-plugin-svelte
	extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
	compilerOptions: {
		experimental: {
			// Enable experimental async features for reactive context fixes
			async: true
		}
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		// preprocess({
		//   postcss: true
		// })
		includeFiles({
			extensions: ['.md'],
			docsDir: 'src/routes/docs',
			examplesDir: 'src/routes/docs-examples',
			logMissingIncludes: process.env.SVELTE_LOG_MISSING_INCLUDES === '1'
		}),
		vitePreprocess({ typeScript: true }),
		mdsvex(mdsvexConfig)
	],
	vitePlugin: {
		inspector: {
			holdMode: true
		}
	},
	kit: {
		adapter: resolveAdapter(),
		alias: {
			$icons: path.resolve('./src/routes/utils/icons'),
			$utils: path.resolve('./src/routes/utils')
		}
	}
};

export default config;
