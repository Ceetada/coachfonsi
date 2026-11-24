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
    heading: "Tired of starting over?",
    lead: "I know what it feels like to struggle with your weight.",
    paragraphs: [
      "I kept starting and stopping until I no longer felt comfortable in my body. Two years ago, I decided to change that and prioritise myself.",
      "Now, I help women skip the guesswork, enjoy the foods they love and build healthier, more confident bodies without extreme diets.",
    ],
    // Replace with approved biographical copy when supplied.
    biography: null as string | null,
    signature: { name: "Fonsi", fullName: "Sifon Etim" },
  },
  closing: {
    headline: "Let’s plan your first month.",
    description: "Tell me what you want to change, what you’ve tried, and how much time you have to train. We’ll talk through which coaching plan fits.",
  },
  whatsappNumber: "+2348124897796" as string | null,
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
