import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site";

export default defineConfig({
  site: SITE.url,
  output: "static",
  integrations: [mdx(), sitemap()],
});
