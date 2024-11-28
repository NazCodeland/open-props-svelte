import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  vitePlugin: {
    // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
    inspector: {
      toggleKeyCombo: 'alt-c',
      holdMode: true,
      showToggleButton: 'always',
      toggleButtonPos: 'top-right',
    },
  },
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },
}

export default config
