import type { Agent } from '../types'

export const agents: Agent[] = [
  {
    id: 'a1',
    name: 'Maya Chen',
    title: 'Senior Buyer Specialist',
    email: 'maya@northline.realty',
    phone: '(415) 555-0142',
    bio: 'Maya helps first-time buyers and relocating professionals find homes that fit both lifestyle and long-term value across the Bay Area.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop',
    specialties: ['Buyer representation', 'Condos', 'First-time buyers'],
    listingsSold: 186,
    rating: 4.9,
    languages: ['English', 'Mandarin'],
  },
  {
    id: 'a2',
    name: 'Jordan Hale',
    title: 'Luxury Listing Advisor',
    email: 'jordan@northline.realty',
    phone: '(415) 555-0198',
    bio: 'Jordan specializes in architecturally distinctive homes and off-market opportunities in premium coastal and hillside neighborhoods.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop',
    specialties: ['Luxury homes', 'Off-market', 'Staging strategy'],
    listingsSold: 142,
    rating: 4.8,
    languages: ['English', 'Spanish'],
  },
  {
    id: 'a3',
    name: 'Priya Nair',
    title: 'Investment Property Lead',
    email: 'priya@northline.realty',
    phone: '(510) 555-0177',
    bio: 'Priya guides investors through multi-unit acquisitions, rentals, and neighborhood appreciation analysis with clear underwriting.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop',
    specialties: ['Investment', 'Multi-family', 'Rentals'],
    listingsSold: 121,
    rating: 4.9,
    languages: ['English', 'Hindi', 'Tamil'],
  },
  {
    id: 'a4',
    name: 'Evan Brooks',
    title: 'Neighborhood Expert',
    email: 'evan@northline.realty',
    phone: '(650) 555-0133',
    bio: 'Evan maps schools, transit, and street-level character so families can choose neighborhoods with confidence.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop',
    specialties: ['Family homes', 'School districts', 'Townhouses'],
    listingsSold: 98,
    rating: 4.7,
    languages: ['English'],
  },
]

export function getAgentById(id: string) {
  return agents.find((a) => a.id === id)
}
