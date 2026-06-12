import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const atlas = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/atlas" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    oneLineMeaning: z.string(),
    summary: z.string(),
    whereItFits: z.array(z.string()),
    quickFacts: z.array(z.object({ label: z.string(), value: z.string() })),
    sourceNote: z.string(),
    traditionNote: z.string(),
    presentLife: z.string(),
    lastReviewed: z.string(),
    contentVersion: z.string(),
    reviewStatus: z.enum(["draft", "expert-review-needed", "reviewed", "published"]),
  }),
});

export const collections = { atlas };
