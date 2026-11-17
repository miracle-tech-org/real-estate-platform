import type { ListingFilters, Property } from '../types'

export const defaultFilters: ListingFilters = {
  query: '',
  status: 'all',
  type: 'all',
  minPrice: 0,
  maxPrice: 10_000_000,
  beds: 0,
  baths: 0,
  city: '',
  sort: 'newest',
}

export function filterProperties(properties: Property[], filters: ListingFilters) {
  let result = [...properties]

  if (filters.query.trim()) {
    const q = filters.query.toLowerCase()
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.zip.includes(q),
    )
  }

  if (filters.status !== 'all') {
    result = result.filter((p) => p.status === filters.status)
  }

  if (filters.type !== 'all') {
    result = result.filter((p) => p.type === filters.type)
  }

  if (filters.city) {
    result = result.filter((p) => p.city === filters.city)
  }

  result = result.filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice)

  if (filters.beds > 0) {
    result = result.filter((p) => p.beds >= filters.beds)
  }

  if (filters.baths > 0) {
    result = result.filter((p) => p.baths >= filters.baths)
  }

  switch (filters.sort) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'sqft-desc':
      result.sort((a, b) => b.sqft - a.sqft)
      break
    case 'newest':
    default:
      result.sort((a, b) => a.daysOnMarket - b.daysOnMarket)
      break
  }

  return result
}

export function uniqueCities(properties: Property[]) {
  return [...new Set(properties.map((p) => p.city))].sort()
}
