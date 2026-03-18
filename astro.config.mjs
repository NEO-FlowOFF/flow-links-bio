import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://flow-links-bio.pages.dev",
  integrations: [sitemap()],
});

