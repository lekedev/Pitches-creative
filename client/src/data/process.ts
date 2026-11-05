export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Understand the business, the problem and the opportunity." },
  { number: "02", title: "Define", description: "Develop the strategy, direction and solution." },
  { number: "03", title: "Create", description: "Design, build and refine the solution." },
  { number: "04", title: "Deliver", description: "Launch, support and keep improving." },
];

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: "Creative thinking",
    description: "We look for the idea that makes the work distinct, not just the quickest route to done.",
  },
  {
    title: "Technical execution",
    description: "Designs are built properly: fast, accessible, maintainable and ready to grow.",
  },
  {
    title: "Built around real needs",
    description: "We start with your goals and constraints, then choose the solution — not the other way round.",
  },
  {
    title: "Attention to detail",
    description: "Typography, interactions, edge cases. The small things are where quality shows.",
  },
  {
    title: "A collaborative process",
    description: "You'll know what's happening, why it matters and what comes next at every stage.",
  },
  {
    title: "Long-term support",
    description: "Launch is a milestone, not the finish line. We stay on to maintain and improve what we build.",
  },
];
