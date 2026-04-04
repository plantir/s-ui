import path from 'path';
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	compilerOptions: {
		// runes: true
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		// preprocess({
		//   postcss: true
		// })
		vitePreprocess({ typeScript: true })
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
