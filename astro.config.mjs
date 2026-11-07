import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site";
import { INFORMATION_ROUTES } from "./src/config/editorial";
import { readdirSync, readFileSync } from "node:fs";

// Read the same explicit reviewStatus used by the topic route at build time.
const publishedAtlasRoutes = new Set(
  readdirSync(new URL("./src/content/atlas/", import.meta.url))
    .filter((file) => /\.mdx?$/.test(file))
    .filter((file) => {
      const source = readFileSync(new URL(`./src/content/atlas/${file}`, import.meta.url), "utf8");
      const frontmatter = source.split(/^---\s*$/m)[1] ?? "";
      return /^reviewStatus:\s*published\s*$/m.test(frontmatter);
    })
    .map((file) => `/atlas/${file.replace(/\.mdx?$/, "")}`),
);

export default defineConfig({
  site: SITE.url,
  output: "static",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return INFORMATION_ROUTES.has(path) || publishedAtlasRoutes.has(path);
      },
    }),
  ],
});
