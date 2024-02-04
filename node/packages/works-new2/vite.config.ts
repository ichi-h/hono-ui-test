import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx'
    }),
    vanillaExtractPlugin()
  ],
  // assetsInclude: [
  //   "**/*.css",
  // ],
  build: {
    assetsDir: 'static',
    ssrEmitAssets: true,
  }
})
