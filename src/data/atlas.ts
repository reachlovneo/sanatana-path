export const ATLAS_JOURNEY = Object.freeze([
  { slug: "cosmic-time", title: "Cosmic Time", description: "The complete map of cycles within cycles" },
  { slug: "kalpa", title: "Kalpa", description: "Understand one day of Brahma" },
  { slug: "manvantara", title: "Manvantara", description: "A major period within a Kalpa" },
  { slug: "maha-yuga", title: "Maha Yuga", description: "One complete cycle of four Yugas" },
  { slug: "four-yugas", title: "Four Yugas", description: "Satya, Treta, Dvapara, and Kali" },
  { slug: "satya-yuga", title: "Satya Yuga", description: "The Age of Truth and complete Dharma" },
  { slug: "treta-yuga", title: "Treta Yuga", description: "The Age of Duty and the Ramayana" },
  { slug: "kali-yuga", title: "Kali Yuga", description: "The current Yuga in the common Puranic model" },
]);

export const ATLAS_JOURNEY_TITLES = ATLAS_JOURNEY.map((topic) => topic.title);

export function getAdjacentAtlasTopics(slug: string) {
  const index = ATLAS_JOURNEY.findIndex((topic) => topic.slug === slug);

  return {
    previous: index > 0 ? ATLAS_JOURNEY[index - 1] : undefined,
    next: index >= 0 && index < ATLAS_JOURNEY.length - 1 ? ATLAS_JOURNEY[index + 1] : undefined,
  };
}
