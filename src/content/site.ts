type Social = { label: string; url: string | null };

export const site = {
  name: "Coach Fonsi",
  tagline: "Personal weight-loss & strength coaching",
  hero: {
    headline: ["Aim for 6–12\u00a0kg.", "Start with 60 days."] as const,
    introduction: "Hey, I’m Coach Fonsi.",
    description: "I’ll help you build strength and work toward your weight-loss goal with workouts that fit your week and nutrition changes built around the meals you already enjoy.",
  },
  about: {
    heading: "When the work doesn’t show.",
    lead: "If you’ve been putting in the effort and still wonder whether it’s working, I get it.",
    paragraphs: [
      "I’ll build your workouts around the time and equipment you actually have. With food, we’ll start with the meals you already enjoy and find changes you can stick with on a busy week.",
      "We’ll look for progress you can feel, too. Maybe it’s lifting a little heavier or getting through a workout that used to wipe you out. Those wins count.",
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
