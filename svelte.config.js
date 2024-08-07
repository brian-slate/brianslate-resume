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

// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     kit: {
//         adapter: adapter(),
//         files: {
//             routes: 'src/routes'
//         }
//     }
// };

// export default config;


import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			fallback: 'index.html' // may differ from host to host
		})
	}
};
