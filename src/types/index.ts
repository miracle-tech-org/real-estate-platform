export type ListingStatus = 'for-sale' | 'for-rent' | 'pending' | 'sold'
export type PropertyType = 'house' | 'condo' | 'townhouse' | 'apartment' | 'land'

export interface Property {
  id: string
  slug: string
  title: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  status: ListingStatus
  type: PropertyType
  beds: number
  baths: number
  sqft: number
  lotSize?: number
  yearBuilt: number
  description: string
  features: string[]
  images: string[]
  lat: number
  lng: number
  neighborhoodId: string
  agentId: string
  hoa?: number
  taxAnnual?: number
  daysOnMarket: number
  featured?: boolean
}

export interface Agent {
  id: string
  name: string
  title: string
  email: string
  phone: string
  bio: string
  photo: string
  specialties: string[]
  listingsSold: number
  rating: number
  languages: string[]
}

export interface Neighborhood {
  id: string
  slug: string
  name: string
  city: string
  description: string
  image: string
  medianPrice: number
  walkScore: number
  transitScore: number
  schoolRating: number
  highlights: string[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  cover: string
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

export interface ListingFilters {
  query: string
  status: ListingStatus | 'all'
  type: PropertyType | 'all'
  minPrice: number
  maxPrice: number
  beds: number
  baths: number
  city: string
  sort: 'price-asc' | 'price-desc' | 'newest' | 'sqft-desc'
}

export interface User {
  id: string
  name: string
  email: string
}
