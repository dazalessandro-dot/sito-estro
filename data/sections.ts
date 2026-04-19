export type StudioSection = {
  id: string;
  slug: string;
  title: string;
  tileTitle: string;
  subtitle: string;
  intro: string;
  paragraphs: string[];
  visualVariant: number;
  visualNote: string;
};

export const studioSections: StudioSection[] = [
  {
    id: "shop",
    slug: "shop",
    title: "Shop",
    tileTitle: "Shop",
    subtitle: "Objects, studies, and small editions collected in one warm shelf.",
    intro:
      "A temporary inventory for objects that feel half tool, half artifact.",
    paragraphs: [
      "This section can hold editions, printed matter, fragments, or a future micro-catalogue. For now it acts as a measured surface where things can gather without needing a full commerce system behind them.",
      "The tone should stay close to a studio shelf rather than a store dashboard: a place for selected objects, references, and materials with enough room around them to breathe.",
      "When real content arrives, the structure here can expand into product grids, details, or release notes without changing the visual grammar of the site.",
    ],
    visualVariant: 1,
    visualNote: "Edition shelf",
  },
  {
    id: "contatti",
    slug: "contatti",
    title: "Contatti",
    tileTitle: "Contatti",
    subtitle: "A clean opening for conversations, invitations, and practical requests.",
    intro:
      "A simple page for reaching the studio without forcing a full contact system yet.",
    paragraphs: [
      "This placeholder can later host contact details, project inquiries, availability notes, or an email-first introduction. Right now it serves as a quiet destination that keeps the navigation complete.",
      "The layout is intentionally spare so real information can be inserted quickly: address, email, schedule, social references, or a compact inquiry form when needed.",
      "Until then, the page behaves like a composed index card inside the broader manifesto-like site structure.",
    ],
    visualVariant: 2,
    visualNote: "Open channel",
  },
  {
    id: "cultura",
    slug: "cultura",
    title: "Cultura",
    tileTitle: "Cultura",
    subtitle: "Notes, references, and the atmospheric side of the practice.",
    intro:
      "A room for publishing fragments of thought, reading trails, and editorial residue.",
    paragraphs: [
      "Cultura can later become a repository for essays, references, visual notes, or a publishing stream that sits beside the client-facing side of the studio.",
      "Instead of behaving like a blog template, this area is designed as a quieter reading space: useful for studio positions, cultural links, ongoing obsessions, and field notes.",
      "The current text is only scaffolding, but the hierarchy is already ready for articles, lists, annotations, or editorial modules.",
    ],
    visualVariant: 3,
    visualNote: "Reading field",
  },
  {
    id: "progetti",
    slug: "progetti",
    title: "Progetti",
    tileTitle: "Progetti",
    subtitle: "Selected work, spatially arranged, ready to become case studies.",
    intro:
      "A placeholder archive for projects, commissions, and unfinished directions worth showing.",
    paragraphs: [
      "This section is the future home of project documentation, but the structure stays intentionally broad enough to hold both finished work and developing investigations.",
      "Each future project can grow into a case-study page with images, credits, context, and process notes while still keeping the same calm editorial frame.",
      "For now the page simply confirms the route, the tone, and the long-term architecture needed to grow the studio site without rebuilding from scratch.",
    ],
    visualVariant: 4,
    visualNote: "Project stack",
  },
  {
    id: "flow-di-cose",
    slug: "flow-di-cose",
    title: "Flow di Cose",
    tileTitle: "Flow di Cose",
    subtitle: "A looser lane for process, accumulation, and moving fragments.",
    intro:
      "A place for objects, sketches, snapshots, scraps, and the things between categories.",
    paragraphs: [
      "Flow di Cose can evolve into a stream of small observations: references, prototypes, material tests, draft images, and sequences that do not need a formal case-study wrapper.",
      "It should feel agile and permissive, more like an editorial current than a polished portfolio section, while still staying visually aligned with the rest of the site.",
      "Because the structure is modular, it can later become a journal, a feed, a notes system, or a hybrid visual archive without changing routes or page logic.",
    ],
    visualVariant: 5,
    visualNote: "Loose current",
  },
  {
    id: "ricerca",
    slug: "ricerca",
    title: "Ricerca",
    tileTitle: "Ricerca",
    subtitle: "Questions, methods, and unfinished lines of investigation.",
    intro:
      "A placeholder for the studio's more methodical, investigative, and experimental work.",
    paragraphs: [
      "Ricerca is designed for research-led material: frameworks, observations, prototypes, references, and visual systems that are still in motion.",
      "Later, this page can hold diagrams, annotated studies, typologies, or long-form investigations that sit adjacent to client work without collapsing into the same format.",
      "For now it establishes a clear lane in the navigation and keeps the future information architecture open and easy to extend.",
    ],
    visualVariant: 6,
    visualNote: "Method grid",
  },
  {
    id: "host",
    slug: "host",
    title: "Host",
    tileTitle: "Host",
    subtitle: "A section for gatherings, hospitality, and formats that invite others in.",
    intro:
      "A flexible destination for events, temporary programs, and hosted conversations.",
    paragraphs: [
      "Host can later support workshops, dinners, talks, collaborations, or guest formats that orbit the studio rather than the more fixed project archive.",
      "The page is intentionally generic right now so it can adapt to many futures: calendar snapshots, event cards, programs, or simple invitations.",
      "It remains part of the same visual language, but it leaves enough openness to grow into something more social and time-based later.",
    ],
    visualVariant: 7,
    visualNote: "Gathering frame",
  },
  {
    id: "sezione-vuota-1",
    slug: "sezione-vuota-1",
    title: "Section 08",
    tileTitle: "",
    subtitle: "An open placeholder kept intentionally neutral for a future section.",
    intro:
      "This page exists so the structure stays complete while the naming stays undecided.",
    paragraphs: [
      "The section is deliberately unnamed in the landing grid so it can be assigned later without fighting against an early label or a misleading category.",
      "When the direction becomes clearer, you can rename the slug, tile title, page title, and copy from one central config file without touching the component structure.",
      "Until then, it behaves like a reserved slot inside the poster composition: present, balanced, and easy to redefine.",
    ],
    visualVariant: 8,
    visualNote: "Reserved slot",
  },
  {
    id: "sezione-vuota-2",
    slug: "sezione-vuota-2",
    title: "Section 09",
    tileTitle: "",
    subtitle: "A second open placeholder for future expansion or reframing.",
    intro:
      "A companion slot that keeps the nine-panel composition intact and flexible.",
    paragraphs: [
      "This second placeholder works as spare capacity inside the site structure. It can later become a section, a campaign, an archive, or an experiment without needing to redraw the homepage.",
      "Keeping it light and unnamed preserves room for future decisions while still making the prototype feel complete and navigable today.",
      "Because the architecture is centralized, swapping this into a fully named section later is a small content edit rather than a rebuild.",
    ],
    visualVariant: 9,
    visualNote: "Open reserve",
  },
];

export function getSectionBySlug(slug: string) {
  return studioSections.find((section) => section.slug === slug);
}
