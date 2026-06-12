export const ATLAS_JOURNEY = Object.freeze([
  { slug: "cosmic-time", title: "Cosmic Time" },
  { slug: "kalpa", title: "Kalpa" },
  { slug: "manvantara", title: "Manvantara" },
  { slug: "maha-yuga", title: "Maha Yuga" },
  { slug: "four-yugas", title: "Four Yugas" },
  { slug: "kali-yuga", title: "Kali Yuga" },
]);

export const ATLAS_JOURNEY_TITLES = ATLAS_JOURNEY.map((topic) => topic.title);

export function getAdjacentAtlasTopics(slug: string) {
  const index = ATLAS_JOURNEY.findIndex((topic) => topic.slug === slug);

  return {
    previous: index > 0 ? ATLAS_JOURNEY[index - 1] : undefined,
    next: index >= 0 && index < ATLAS_JOURNEY.length - 1 ? ATLAS_JOURNEY[index + 1] : undefined,
  };
}
