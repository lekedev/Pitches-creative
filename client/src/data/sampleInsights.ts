import type { Post } from "../service/insightService";

// SAMPLE CONTENT — shown only when the Insights API returns no published posts
// (or can't be reached), so the page never looks empty during setup. Every
// sample is flagged `sample: true` and is visibly labelled as such in the UI.
// Delete or replace once real articles are published through /admin.

const base = {
  coverImage: "",
  author: "The Stable Company",
  likes: 0,
  enableSharing: false,
  enableComments: false,
  enableLikes: false,
  sample: true,
} as const;

export const sampleInsights: Post[] = [
  {
    ...base,
    id: "sample-1",
    slug: "sample-when-a-website-needs-rebuilding",
    title: "How to tell when your website needs rebuilding, not redecorating",
    excerpt: "A fresh coat of paint won't fix a site that's slow, hard to update or confusing to use. Here's how to tell the difference.",
    description: "",
    category: "Technology",
    date: "Sample",
    content: `*This is a sample article used to preview the Insights layout.*

Many businesses ask for a "redesign" when what they really need is a rebuild — or the other way round. A few questions help separate the two.

## Can your team update it without help?
If simple changes need a developer, the problem is the foundation, not the look.

## Is it fast on a phone?
Most visitors arrive on mobile. Slow pages lose them before your message lands.

## Does it still describe what you do?
If your services have changed, the structure of the site probably needs to change too.

When most of the answers point to the foundation, a rebuild usually costs less over time than repeated patching.`,
  },
  {
    ...base,
    id: "sample-2",
    slug: "sample-brand-is-more-than-a-logo",
    title: "Your brand is more than a logo",
    excerpt: "Identity is the sum of how you look, sound and behave at every touchpoint. A logo is just the signature.",
    description: "",
    category: "Branding",
    date: "Sample",
    content: `*This is a sample article used to preview the Insights layout.*

A logo is how people recognise you. A brand is why they remember you.

Consistency across your website, documents, social content and conversations does more for trust than any single mark. Start with a clear point of view, a small set of visual rules and a voice you can describe in a sentence — then apply them everywhere.`,
  },
  {
    ...base,
    id: "sample-3",
    slug: "sample-automate-the-boring-parts",
    title: "Automate the boring parts first",
    excerpt: "The best place to start with automation isn't the most impressive task. It's the most repetitive one.",
    description: "",
    category: "Digital Transformation",
    date: "Sample",
    content: `*This is a sample article used to preview the Insights layout.*

Digital transformation doesn't have to start with a big platform. List the tasks your team repeats every week — copying data between tools, chasing approvals, building the same report.

Those are usually the cheapest to automate and the quickest to pay back. Each one you remove builds confidence for the larger changes that follow.`,
  },
  {
    ...base,
    id: "sample-4",
    slug: "sample-briefing-a-creative-team",
    title: "How to brief a creative team",
    excerpt: "A good brief doesn't prescribe the answer. It describes the problem, the audience and what success looks like.",
    description: "",
    category: "Creative Work",
    date: "Sample",
    content: `*This is a sample article used to preview the Insights layout.*

The most useful briefs answer three questions: who is this for, what should they think or do afterwards, and how will we know it worked?

Share examples you like and why, but leave room for ideas you haven't imagined yet. That's what you're hiring a creative team for.`,
  },
];
