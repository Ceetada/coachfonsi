export const durations = [1, 3, 6] as const;
export type Duration = (typeof durations)[number];

export type CoachingPlan = {
  id: string;
  title: string;
  description: string;
  features: string[];
  prices: Record<Duration, number | null> | null;
  featured?: boolean;
  availability?: string;
  showSavings?: boolean;
};

export const plans: CoachingPlan[] = [
  {
    id: "basic", title: "Basic",
    description: "A simple starting point for a more structured fitness journey.",
    features: [], prices: { 1: 24000, 3: 63000, 6: 120000 }, showSavings: true,
  },
  {
    id: "standard", title: "Standard",
    description: "Personalized coaching with more consistent guidance.",
    features: [], prices: { 1: 36000, 3: 96000, 6: 180000 }, showSavings: true, featured: true,
  },
  {
    id: "vip", title: "VIP",
    description: "More personalized one-on-one coaching and accountability.",
    features: [], prices: null, availability: "4 spots left",
  },
];
