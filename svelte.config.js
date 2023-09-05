// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
// 		files: {
// 			routes: 'src/routes'
// 		  }
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '<div>Loading...</div>'
		}),
		files: {
			routes: 'src/routes'
		}
	}
};

export default config;

