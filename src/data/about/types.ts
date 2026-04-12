export type AboutContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string };
    secondaryCta: { label: string };
  };
  overview: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: [string, string, string];
    bulletsTitle: string;
    bullets: string[];
  };
  foundation: { eyebrow: string; title: string };
  mission: { title: string; description: string }[];
  whatWeDo: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  market: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  /** Value chain diagram (About page). */
  distributionFlow: {
    title: string;
    steps: [string, string, string, string];
  };
};

export type AboutContentSource = AboutContent;
