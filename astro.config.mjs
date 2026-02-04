// @ts-check

import preact from '@astrojs/preact';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Enable many frameworks to support all different kinds of components.
	integrations: [
		preact({ include: ['**/preact/*'] }),
		react({ include: ['**/react/*'] }),
	],
});
