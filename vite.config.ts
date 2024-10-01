// eslint-disable-next-line import/no-unresolved,import/namespace,import/default
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  manifest: {
    name: 'Test challenge',
    short_name: 'test challenge',
    description: 'Description',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#713FA1',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const config = {
    plugins: [
      react(),
      VitePWA({
        ...manifestForPlugIn,
        includeAssets: [
          'favicon.png',
          'favicon.ico',
          'robots.txt',
          'apple-touch-icon.png',
        ],
        devOptions: {
          enabled: false,
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
        },
      }),
    ],
    server: {
      port: 3000,
      host: 'localhost',
      proxy: {
        '/fred': {
          target: process.env.VITE_BASE_API_URL,
          changeOrigin: true,
        },
      },
    },
    preview: {
      port: 3100,
      host: 'localhost',
    },
    build: {
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    optimizeDeps: {
      include: ['esm-dep > cjs-dep'],
    },
  };
  return defineConfig(config);
};
