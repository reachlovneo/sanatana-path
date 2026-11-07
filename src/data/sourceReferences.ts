/** Passage links inspected during the 2026-09-29 editorial UI audit. Not expert approval. */
export const TIME_REFERENCE = {
  title: "Vishnu Purana, Book I, Chapter III",
  type: "public-domain-translation" as const,
  url: "https://sacred-texts.com/hin/vp/vp037.htm",
  note: "H. H. Wilson translation (1840). Defines the four ages, their durations, the periods of Manus, and Brahma's day and night. Translation wording and traditional interpretation still need qualified review.",
};

export const GARUDA_EDITION = {
  title: "Garuda Purana Saroddhara — Wood and Subrahmanyam (1911)",
  url: "https://sacred-texts.com/hin/gpu/index.htm",
  note: "An abridged compendium, not the complete Garuda Purana. Its chapter numbering must not be treated as universal across editions. These introductory guides still await passage-by-passage and qualified subject review.",
};

const garudaChapter = (title: string, path: string) => ({ title, url: `https://sacred-texts.com/book/the-garuda-purana/read/${path}` });
export const GARUDA_PASSAGES: Record<string, { title: string; url: string }> = {
  "death-process": garudaChapter("Chapter IX: Rites for the Dying", "chapter-ix-an-account-of-the-rites-for-the-dying"),
  "soul-journey": garudaChapter("Chapter II: The Way of Yama", "chapter-ii-an-account-of-the-way-of-yama"),
  yamaloka: garudaChapter("Chapter XIV: The City of the King of Justice", "chapter-xiv-an-account-of-the-city-of-the-king-of-justice"),
  narakas: garudaChapter("Chapter III: The Torments of Yama", "chapter-iii-an-account-of-the-torments-of-yama"),
  "pitru-loka": garudaChapter("Chapter XIII: The Ceremony for the Ancestors", "chapter-xiii-an-account-of-the-ceremony-for-all-the-ancestors"),
  rebirth: garudaChapter("Chapter XV: The Coming to Birth of People Who Have Done Good", "chapter-xv-an-account-of-the-coming-to-birth-of-people-who-have-done-good"),
  moksha: garudaChapter("Chapter XVI: The Law for Liberation", "chapter-xvi-an-account-of-the-law-for-liberation"),
};
