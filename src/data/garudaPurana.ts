export type GarudaTopic = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  summary: string;
  mood: string;
  accent: string;
  image: string;
  keyIdeas: string[];
  scenes: {
    label: string;
    title: string;
    paragraphs: string[];
  }[];
  remember: string[];
};

const image = "/images/home/home-garuda-purana.png";

export const garudaTopics: GarudaTopic[] = [
  {
    slug: "death-process",
    title: "Death Process",
    eyebrow: "Threshold",
    subtitle: "When life loosens its hold on the body.",
    summary: "The Garuda Purana presents death not as a sudden ending, but as a sacred threshold where body, memory, karma, and final awareness become deeply important.",
    mood: "The last doorway",
    accent: "#f0b45d",
    image,
    keyIdeas: ["Final remembrance", "Withdrawal of senses", "Ritual care", "Sacred transition"],
    scenes: [
      {
        label: "Scene 01",
        title: "The body becomes quiet",
        paragraphs: [
          "The teaching begins in a room where everything has slowed down.",
          "The breath is softer. The senses no longer hold the world as firmly as before. Speech fades, strength withdraws, and the person who once moved through the world begins to turn inward.",
          "The Garuda Purana treats this moment with seriousness because the final state of mind is not seen as accidental. Memory, prayer, fear, attachment, and devotion all gather at the threshold."
        ],
      },
      {
        label: "Scene 02",
        title: "A transition, not a disappearance",
        paragraphs: [
          "The physical body is left behind, but the journey of the jiva continues.",
          "The text describes death as the loosening of the soul from the body, shaped by karma and supported by sacred remembrance. The family does not simply mourn; it participates through rites, offerings, names, water, fire, and prayer.",
          "In this vision, the living and the departed remain connected through duty, gratitude, and care."
        ],
      },
      {
        label: "Scene 03",
        title: "Why the teaching matters",
        paragraphs: [
          "The point is not to frighten the reader.",
          "It is to make life more awake. If the final moment matters, then the present moment matters even more. Speech, action, intention, devotion, and self-control become preparations for a peaceful crossing.",
          "The first lesson of the Garuda Purana is simple: live in such a way that the last doorway is not entered in confusion."
        ],
      },
    ],
    remember: ["Death is presented as a sacred passage.", "The final state of mind has spiritual importance.", "Rituals support both memory and transition."],
  },
  {
    slug: "soul-journey",
    title: "Soul Journey",
    eyebrow: "The Road",
    subtitle: "The path of the jiva after leaving the body.",
    summary: "The soul journey is described as a passage through subtle states, guided by karma, ritual support, and the moral weight of a life already lived.",
    mood: "The road after farewell",
    accent: "#75dfe4",
    image,
    keyIdeas: ["Subtle body", "Karmic movement", "Offerings", "Vaitarani"],
    scenes: [
      {
        label: "Scene 01",
        title: "The road opens",
        paragraphs: [
          "After death, the Garuda Purana turns from the house of mourning to the road beyond it.",
          "The departed soul is described as moving in a subtle body, no longer held by physical limbs, yet still carrying impressions, desires, and the results of action.",
          "This is why the journey feels personal. The path is not random; it reflects the life that has just been lived."
        ],
      },
      {
        label: "Scene 02",
        title: "The living still matter",
        paragraphs: [
          "The text repeatedly gives importance to offerings and rites performed by the family.",
          "Water, food offerings, remembrance, charity, and sacred recitation are presented as acts that assist the departed. They also discipline the living, reminding them that grief can become responsibility.",
          "The soul's journey becomes a shared moment between two worlds."
        ],
      },
      {
        label: "Scene 03",
        title: "Crossing difficult passages",
        paragraphs: [
          "Traditional descriptions include difficult routes, fearful encounters, and the famous crossing of Vaitarani.",
          "Read carefully, these images are more than geography. They dramatize the weight of action, the need for purification, and the hope that dharma can guide the soul through uncertainty.",
          "The journey after death becomes a mirror held up to life before death."
        ],
      },
    ],
    remember: ["The jiva continues in a subtle form.", "Karma gives direction to the journey.", "Ritual support expresses love, duty, and remembrance."],
  },
  {
    slug: "yamaloka",
    title: "Yamaloka",
    eyebrow: "Judgment",
    subtitle: "The realm where action becomes visible.",
    summary: "Yamaloka is presented as the court of Yama, where deeds are examined with clarity and the hidden moral structure of life is revealed.",
    mood: "The court of consequence",
    accent: "#d7a24f",
    image,
    keyIdeas: ["Yama", "Chitragupta", "Dharma", "Moral clarity"],
    scenes: [
      {
        label: "Scene 01",
        title: "The king of justice",
        paragraphs: [
          "Yama is often imagined with fear, but the Garuda Purana presents him as more than a figure of punishment.",
          "He is Dharmaraja, the king who upholds moral order. In Yamaloka, actions that seemed hidden, forgotten, or excused are brought into the open.",
          "The atmosphere is not chaos. It is a court."
        ],
      },
      {
        label: "Scene 02",
        title: "The record of a life",
        paragraphs: [
          "Chitragupta, the divine recorder, represents the idea that no action vanishes without trace.",
          "Words, intentions, kindness, cruelty, charity, neglect, restraint, and harm all become part of the soul's account. The teaching is not that life is watched mechanically, but that life is morally meaningful.",
          "Every choice leaves a shape."
        ],
      },
      {
        label: "Scene 03",
        title: "Judgment as revelation",
        paragraphs: [
          "Yamaloka reveals what the soul has made of itself.",
          "The frightening part is not only punishment; it is clarity. The person sees the moral pattern of their own life without disguise.",
          "This is why the Garuda Purana urges dharma while one is alive, when change is still possible."
        ],
      },
    ],
    remember: ["Yama is associated with justice and dharma.", "Chitragupta symbolizes the record of action.", "Judgment reveals the moral weight of life."],
  },
  {
    slug: "narakas",
    title: "Narakas",
    eyebrow: "Consequences",
    subtitle: "Realms where harmful actions are made visible.",
    summary: "The Narakas are described as intense realms of consequence, meant to awaken moral seriousness rather than entertain horror.",
    mood: "The mirror of action",
    accent: "#ec7d59",
    image,
    keyIdeas: ["Moral consequence", "Purification", "Warning", "Accountability"],
    scenes: [
      {
        label: "Scene 01",
        title: "Not horror for its own sake",
        paragraphs: [
          "The Narakas are among the most dramatic portions of the Garuda Purana.",
          "Their descriptions are severe, sometimes unsettling, and deliberately unforgettable. But they are not placed there simply to terrify the reader.",
          "They function like moral theatre: each consequence reflects the nature of the action that produced it."
        ],
      },
      {
        label: "Scene 02",
        title: "A world shaped by conduct",
        paragraphs: [
          "Cruelty, deceit, theft, betrayal, violence, exploitation, and disrespect toward sacred duties are shown as forces that return to the doer.",
          "In this way, Naraka becomes a visual language for karma. Harm does not remain outside the person who causes it. It eventually becomes a world they must face.",
          "The teaching is sharp because it wants the living to wake up before the consequence hardens."
        ],
      },
      {
        label: "Scene 03",
        title: "The hidden mercy of warning",
        paragraphs: [
          "A warning can be an act of compassion.",
          "By describing the Narakas, the Garuda Purana invites restraint, repentance, charity, truthfulness, and a return to dharma while life still offers freedom.",
          "The aim is transformation, not despair."
        ],
      },
    ],
    remember: ["Narakas dramatize karmic consequence.", "The descriptions are moral warnings.", "The living can still change direction."],
  },
  {
    slug: "pitru-loka",
    title: "Pitru Loka",
    eyebrow: "Ancestors",
    subtitle: "The realm of memory, lineage, and sacred gratitude.",
    summary: "Pitru Loka is the ancestral realm, reminding the reader that life is received through lineage and sustained through remembrance.",
    mood: "The house of ancestors",
    accent: "#b8d47a",
    image,
    keyIdeas: ["Ancestors", "Shraddha", "Tarpana", "Lineage"],
    scenes: [
      {
        label: "Scene 01",
        title: "Those who came before",
        paragraphs: [
          "The Garuda Purana does not let the reader imagine the self as isolated.",
          "Every person stands in a lineage: parents, grandparents, teachers, unseen helpers, and generations whose names may no longer be remembered.",
          "Pitru Loka gives sacred form to that debt of existence."
        ],
      },
      {
        label: "Scene 02",
        title: "Ritual as remembrance",
        paragraphs: [
          "Shraddha and tarpana are not treated as empty ceremonies.",
          "They are acts of gratitude, nourishment, and continuity. Through offerings and remembrance, the living acknowledge that life is inherited, not self-created.",
          "The ritual table becomes a bridge between generations."
        ],
      },
      {
        label: "Scene 03",
        title: "Family as sacred responsibility",
        paragraphs: [
          "Pitru Loka teaches that family is not only emotion or biology.",
          "It is duty, memory, and moral continuity. The living honor the departed, and the departed remain part of the sacred imagination of the household.",
          "To remember rightly is to live more humbly."
        ],
      },
    ],
    remember: ["Pitru Loka is linked with ancestors.", "Shraddha and tarpana express gratitude.", "Lineage connects the living and departed."],
  },
  {
    slug: "rebirth",
    title: "Rebirth",
    eyebrow: "Return",
    subtitle: "How karma carries the story forward.",
    summary: "Rebirth is presented as the continuation of learning, where karma and impressions shape future embodiment.",
    mood: "The next doorway",
    accent: "#9d86e8",
    image,
    keyIdeas: ["Karma", "Samskara", "Human birth", "Samsara"],
    scenes: [
      {
        label: "Scene 01",
        title: "The story does not end",
        paragraphs: [
          "After consequence, purification, and ancestral connection, the Garuda Purana turns toward return.",
          "The soul does not simply restart as if nothing happened. It carries tendencies, impressions, and the unfinished force of karma.",
          "Rebirth is continuity with a new body."
        ],
      },
      {
        label: "Scene 02",
        title: "The weight of impressions",
        paragraphs: [
          "Samskaras are the subtle grooves formed by repeated thought and action.",
          "What a person loves, fears, practices, harms, serves, and clings to becomes part of the next movement. This makes life deeply consequential, but also hopeful.",
          "A new habit can become a new destiny."
        ],
      },
      {
        label: "Scene 03",
        title: "Human birth as opportunity",
        paragraphs: [
          "Many Hindu traditions regard human birth as precious because it allows reflection, choice, repentance, devotion, and knowledge.",
          "Rebirth is not merely a cycle to fear; it is also a chance to learn what has not yet been learned.",
          "The Garuda Purana keeps pointing back to the same responsibility: use this life well."
        ],
      },
    ],
    remember: ["Rebirth continues the moral story of karma.", "Samskaras shape future movement.", "Human birth is valued as a chance for transformation."],
  },
  {
    slug: "moksha",
    title: "Moksha",
    eyebrow: "Freedom",
    subtitle: "The end of fear, return, and bondage.",
    summary: "Moksha is the highest horizon of the journey: freedom from the cycle of birth and death through knowledge, devotion, detachment, and divine grace.",
    mood: "The shore beyond return",
    accent: "#f5dc8a",
    image,
    keyIdeas: ["Liberation", "Devotion", "Knowledge", "Freedom"],
    scenes: [
      {
        label: "Scene 01",
        title: "Beyond the cycle",
        paragraphs: [
          "After death, journey, judgment, consequence, ancestors, and rebirth, the final question rises quietly.",
          "Must the soul keep circling forever?",
          "The Garuda Purana answers with the possibility of moksha: release from bondage, fear, and compulsive return."
        ],
      },
      {
        label: "Scene 02",
        title: "Freedom begins before death",
        paragraphs: [
          "Moksha is not presented as a last-minute escape route.",
          "Its preparation begins in life through devotion, knowledge, dharma, detachment, compassion, self-control, and remembrance of the Divine.",
          "A life aligned with truth becomes lighter at the threshold."
        ],
      },
      {
        label: "Scene 03",
        title: "The purpose of the whole journey",
        paragraphs: [
          "The Garuda Purana can seem like a text about death, but its deeper concern is life.",
          "It shows the road after death so that the reader may live with clarity before death. Its final horizon is not fear, but freedom.",
          "The journey ends where bondage ends: in the knowledge that the soul was meant for more than wandering."
        ],
      },
    ],
    remember: ["Moksha is freedom from samsara.", "Preparation begins during life.", "The journey points from fear toward liberation."],
  },
];

export const getGarudaTopic = (slug: string) => {
  const topic = garudaTopics.find((item) => item.slug === slug);
  if (!topic) throw new Error(`Unknown Garuda Purana topic: ${slug}`);
  return topic;
};

export const getGarudaTopicHref = (slug: string) => `/garuda-purana/${slug}`;
