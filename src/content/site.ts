type Social = { label: string; url: string | null };

export const site = {
  name: "Coach Fonsi",
  tagline: "Personal weight-loss & strength coaching",
  hero: {
    headline: ["Aim for 6–12 kg.", "Start with 60 days."] as const,
    introduction: "I’m Coach Fonsi.",
    description: "We’ll use your first 60 days to build a strength and nutrition routine that fits your life and moves you toward your weight-loss goal.",
  },
  about: {
    heading: "Meet Coach Fonsi",
    lead: "A fitness plan you can follow on a busy week.",
    paragraphs: [
      "We’ll start with your experience, schedule, and the equipment you can use. Then we’ll build a strength-training routine you can return to each week.",
      "For nutrition, we’ll start with what you already eat and look for changes you can repeat. The goal is to make your everyday decisions easier, from what to eat to when to train.",
    ],
    // Replace with approved biographical copy when supplied.
    biography: null as string | null,
  },
  closing: {
    headline: "Let’s plan your first month.",
    description: "Tell me what you want to change, what you’ve tried, and how much time you have to train. We’ll talk through which coaching plan fits.",
  },
  whatsappNumber: null as string | null,
  email: null as string | null,
  social: [
    { label: "Instagram", url: null },
    { label: "TikTok", url: null },
    { label: "YouTube", url: null },
  ] as Social[],
  seo: {
    title: "Weight-Loss & Strength Coaching | Coach Fonsi",
    description: "Work with Coach Fonsi on weight loss and strength training. Get workouts and nutrition guidance tailored to your schedule and the equipment you have.",
    productionDomain: null as string | null,
    allowIndexing: false,
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Plans", href: "#plans" },
  { label: "Guides", href: "#guides" },
] as const;
