import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'spring-market-outlook-bay-area',
    title: 'Spring Market Outlook: What Buyers Should Watch',
    excerpt:
      'Inventory is inching up in select neighborhoods while demand remains firm near transit and top-rated schools.',
    content: `Inventory patterns across the Bay Area are shifting in subtle but meaningful ways. Listings near major transit corridors are seeing slightly longer days on market, giving prepared buyers more room to negotiate repairs and credits.

Meanwhile, family-oriented pockets with strong school ratings continue to move quickly when pricing is aligned with recent comps. Sellers who invest in light refresh work — paint, landscaping, and decluttering — are still capturing premium outcomes.

For buyers: get pre-approved early, define must-haves tightly, and tour mid-week when competition is quieter. For sellers: price with current comps, not last year's peak.`,
    author: 'Maya Chen',
    date: '2026-03-12',
    cover: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop',
    tags: ['Market trends', 'Buyers'],
  },
  {
    id: 'b2',
    slug: 'how-to-compare-condos-like-an-investor',
    title: 'How to Compare Condos Like an Investor',
    excerpt:
      'Beyond square footage: HOA health, reserve studies, and building systems that affect long-term ownership costs.',
    content: `Condo shopping often starts with finishes and views. Savvy buyers dig into the building itself.

Request the HOA budget, reserve study, and recent special assessment history. Ask about roof age, elevator modernization, and insurance coverage. A slightly lower purchase price can be offset by rising dues or deferred maintenance.

Also map parking, storage, and rental restrictions — especially if you may relocate or convert to an investment later.`,
    author: 'Priya Nair',
    date: '2026-02-28',
    cover: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=700&fit=crop',
    tags: ['Condos', 'Investing'],
  },
  {
    id: 'b3',
    slug: 'neighborhood-walkability-and-resale',
    title: 'Walkability Scores and Resale Strength',
    excerpt:
      'High walk scores correlate with liquidity — but context still matters for hills, parking, and lifestyle fit.',
    content: `Walkability is one of the most durable demand signals in urban markets. Homes within a short stroll of groceries, cafes, and transit tend to attract a wider buyer pool when it is time to sell.

That said, walk score alone is not destiny. Steep hills, limited parking, and noise corridors can change the experience. Visit at different hours, and weigh daily routines against the headline score.`,
    author: 'Evan Brooks',
    date: '2026-01-18',
    cover: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=700&fit=crop',
    tags: ['Neighborhoods', 'Resale'],
  },
  {
    id: 'b4',
    slug: 'mortgage-rate-strategies-for-2026',
    title: 'Mortgage Rate Strategies for 2026 Buyers',
    excerpt:
      'Buydowns, rate locks, and payment modeling can keep a purchase on track when rates fluctuate week to week.',
    content: `Rate volatility rewards preparation. Shop multiple lenders, understand lock windows, and model payments at a few rate points — not just today's quote.

Temporary buydowns can soften early payments if cash flow is the constraint. Permanent buydowns may make sense when you expect to hold the home for several years. Always compare total cost, not only the headline rate.`,
    author: 'Jordan Hale',
    date: '2026-04-02',
    cover: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&h=700&fit=crop',
    tags: ['Mortgage', 'Buyers'],
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
