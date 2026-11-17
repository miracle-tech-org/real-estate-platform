import type { Neighborhood } from '../types'

export const neighborhoods: Neighborhood[] = [
  {
    id: 'n1',
    slug: 'mission-district',
    name: 'Mission District',
    city: 'San Francisco',
    description:
      'Colorful streets, independent restaurants, and a mix of Victorian flats and modern condos define this energetic urban neighborhood.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
    medianPrice: 1180000,
    walkScore: 96,
    transitScore: 88,
    schoolRating: 7.2,
    highlights: ['Vibrant food scene', 'Transit access', 'Parklets & plazas'],
  },
  {
    id: 'n2',
    slug: 'noe-valley',
    name: 'Noe Valley',
    city: 'San Francisco',
    description:
      'Quiet residential blocks, sunny courtyards, and family-friendly shops make Noe Valley a perennial favorite for long-term homeowners.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop',
    medianPrice: 1650000,
    walkScore: 89,
    transitScore: 72,
    schoolRating: 8.4,
    highlights: ['Family streets', 'Local boutiques', 'Hilltop views'],
  },
  {
    id: 'n3',
    slug: 'rockridge',
    name: 'Rockridge',
    city: 'Oakland',
    description:
      'Tree-lined College Avenue, Craftsman bungalows, and easy BART access create a balanced East Bay lifestyle.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
    medianPrice: 1320000,
    walkScore: 84,
    transitScore: 79,
    schoolRating: 8.1,
    highlights: ['College Ave dining', 'BART nearby', 'Craftsman homes'],
  },
  {
    id: 'n4',
    slug: 'palo-alto-downtown',
    name: 'Downtown Palo Alto',
    city: 'Palo Alto',
    description:
      'Walkable downtown living near University Avenue with strong schools and a deep inventory of classic and contemporary homes.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    medianPrice: 2890000,
    walkScore: 91,
    transitScore: 68,
    schoolRating: 9.3,
    highlights: ['Top schools', 'University Ave', 'Tech proximity'],
  },
  {
    id: 'n5',
    slug: 'marina-district',
    name: 'Marina District',
    city: 'San Francisco',
    description:
      'Waterfront paths, Mediterranean façades, and open skyline views define this sought-after northern San Francisco enclave.',
    image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=1200&h=800&fit=crop',
    medianPrice: 1980000,
    walkScore: 93,
    transitScore: 74,
    schoolRating: 7.8,
    highlights: ['Waterfront paths', 'Open views', 'Cafe culture'],
  },
  {
    id: 'n6',
    slug: 'berkeley-hills',
    name: 'Berkeley Hills',
    city: 'Berkeley',
    description:
      'Winding roads, canyon greenery, and panoramic bay vistas make the hills a destination for design-forward residences.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    medianPrice: 1750000,
    walkScore: 42,
    transitScore: 38,
    schoolRating: 8.6,
    highlights: ['Bay views', 'Nature trails', 'Architectural homes'],
  },
]

export function getNeighborhoodById(id: string) {
  return neighborhoods.find((n) => n.id === id)
}

export function getNeighborhoodBySlug(slug: string) {
  return neighborhoods.find((n) => n.slug === slug)
}
