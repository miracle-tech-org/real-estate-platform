import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties } from '../data/properties'
import { defaultFilters, filterProperties } from '../lib/filter'
import type { ListingFilters as Filters, ListingStatus } from '../types'
import { ListingFilters } from '../components/property/ListingFilters'
import { PropertyCard } from '../components/property/PropertyCard'

export function ListingsPage() {
  const [params] = useSearchParams()
  const initial: Filters = {
    ...defaultFilters,
    query: params.get('q') ?? '',
    status: (params.get('status') as ListingStatus | 'all') || 'all',
  }
  const [filters, setFilters] = useState<Filters>(initial)

  const results = useMemo(() => filterProperties(properties, filters), [filters])

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Listings</span>
          <h1>Search the full inventory</h1>
          <p>Filter by status, type, city, and beds — all powered by mock listing data.</p>
        </div>
        <ListingFilters filters={filters} onChange={setFilters} />
        <p className="muted" style={{ marginBottom: '1.25rem' }}>
          {results.length} homes found
        </p>
        {results.length === 0 ? (
          <div className="empty">No listings match these filters. Try widening your search.</div>
        ) : (
          <div className="grid-cards">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
