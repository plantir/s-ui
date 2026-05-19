import path from 'path';
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { includeFiles } from './include-files.js';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

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
		adapter: adapter(),
		alias: {
			$icons: path.resolve('./src/routes/utils/icons'),
			$utils: path.resolve('./src/routes/utils')
		}
	}
};

export default config;
