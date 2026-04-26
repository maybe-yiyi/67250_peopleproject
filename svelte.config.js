import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// If you deploy the static `build` to a subpath (e.g. GitHub Pages: user.github.io/reponame/),
		// set env BASE_PATH=/reponame when running `npm run build` or the JS bundle 404s and the site is static HTML only.
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
