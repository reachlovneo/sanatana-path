/** Public navigation stays indexable; unfinished knowledge pages remain readable previews. */
export const INFORMATION_ROUTES = new Set(["/", "/library", "/sources", "/methodology", "/feedback", "/donate"]);

export function isKnowledgeRoute(path: string) {
  return !INFORMATION_ROUTES.has(path.replace(/\/$/, "") || "/");
}
