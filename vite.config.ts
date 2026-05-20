import tailwindcss from '@tailwindcss/vite';
import mdsvexamples from 'mdsvexamples/vite';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname =
	typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(readFileSync(path.join(dirname, 'package.json'), 'utf-8')) as {
	version: string;
};

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	define: {
		/** Navbar badge in FlowbiteSvelteLayout (`import.meta.env.VITE_APP_VERSION`). */
		'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version)
	},
	resolve: {
		alias: {
			/** Docs/examples import `s-ui`; devDependency was an older npm release without `ThemeSelector`. */
			's-ui': path.resolve(dirname, 'src/lib/index.ts'),
			'flowbite-svelte': path.resolve(dirname, 'src/lib/index.ts'),
		}
	},
	optimizeDeps: {
		/** Otherwise Vite can still pre-bundle `node_modules/s-ui` and ignore this alias. */
		exclude: ['s-ui','flowbite-svelte']
	},
	// mdsvexamples must run after Svelte compiles `.md` so its `transform` + `ast.parse` see JS (terminal: Unexpected token '<').
	plugins: [tailwindcss(), sveltekit(), mdsvexamples],
	test: {
		expect: {
			requireAssertions: true
		},
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [
							{
								browser: 'chromium',
								headless: true
							}
						]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			},
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, '.storybook')
					})
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: 'chromium'
							}
						]
					},
					setupFiles: ['.storybook/vitest.setup.ts']
				}
			}
		]
	}
});
