import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jwrossee.github.io",
  // base: "/wretched-wavelength",
  integrations: [mdx(), sitemap()],
});
