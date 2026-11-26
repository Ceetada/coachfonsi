import type { ImageAsset } from "./media";

export type Testimonial = {
  id: string;
  screenshot: ImageAsset | null;
  caption?: string;
  clientLabel?: string;
  date?: string;
  description?: string;
  example?: {
    topic: string;
    messages: { from: "member" | "coach"; text: string }[];
    showResults?: boolean;
  };
};

export const testimonials: Testimonial[] = [
  {
    id: "busy-week", screenshot: null,
    example: { topic: "A week that got away from you", messages: [
      { from: "member", text: "Fonsi, work was a lot this week. I only got one session in 😩" },
      { from: "coach", text: "One still counts. What day feels realistic for your next session?" },
      { from: "member", text: "Saturday morning. I can definitely do that." },
      { from: "coach", text: "Saturday it is. Let’s pick up there." },
    ] },
  },
  {
    id: "progress-photos", screenshot: null,
    example: { topic: "Taking progress photos", showResults: true, messages: [
      { from: "member", text: "Quick question, how do I take my next progress pic?" },
      { from: "coach", text: "Try the same spot, lighting and angle as your first one. It makes the photos easier to compare." },
      { from: "member", text: "Okay, I’ll use the same mirror then." },
    ] },
  },
  {
    id: "family-food", screenshot: null,
    example: { topic: "Keeping the food you grew up with", messages: [
      { from: "member", text: "Can I still eat rice and stew with my family? I’m not cooking a separate dinner every night lol" },
      { from: "coach", text: "Of course. Tell me what your usual plate looks like and we’ll work with that." },
      { from: "member", text: "That’s a relief 😂 I’ll send you a pic at dinner." },
    ] },
  },
  {
    id: "home-workout", screenshot: null,
    example: { topic: "Swapping the gym for home", messages: [
      { from: "member", text: "Gym’s out today. I’ve got two dumbbells at home though." },
      { from: "coach", text: "That works. How heavy are they? I’ll adjust today’s workout." },
      { from: "member", text: "5 kg each. I can do 25 mins before dinner." },
      { from: "coach", text: "Perfect. We can work with 25 minutes." },
    ] },
  },
  {
    id: "progress-check", screenshot: null,
    example: { topic: "Looking beyond the scale", showResults: true, messages: [
      { from: "member", text: "Scale barely moved this week. What should I bring to check-in?" },
      { from: "coach", text: "Bring your workout notes and how you’ve been feeling. If you’re tracking before-and-after photos, we can look at those together too." },
      { from: "member", text: "Got it. I’ll bring my notes from the gym." },
    ] },
  },
  {
    id: "getting-started", screenshot: null,
    example: { topic: "Getting started again", messages: [
      { from: "member", text: "I haven’t trained in ages and honestly I’m nervous about starting again." },
      { from: "coach", text: "I hear you. We’ll start with a short session and go at your pace." },
      { from: "member", text: "That sounds doable. What do I need for the first one?" },
      { from: "coach", text: "A little space and some water. I’ll walk you through the rest." },
    ] },
  },
];
