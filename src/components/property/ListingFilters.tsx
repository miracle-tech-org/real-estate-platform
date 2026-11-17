import type { ListingFilters as Filters } from '../../types'
import { uniqueCities } from '../../lib/filter'
import { properties } from '../../data/properties'

interface Props {
  filters: Filters
  onChange: (next: Filters) => void
}

export function ListingFilters({ filters, onChange }: Props) {
  const cities = uniqueCities(properties)

  function patch(partial: Partial<Filters>) {
    onChange({ ...filters, ...partial })
  }

  return (
    <div className="filters">
      <div className="field">
        <label htmlFor="f-query">Search</label>
        <input
          id="f-query"
          value={filters.query}
          onChange={(e) => patch({ query: e.target.value })}
          placeholder="City, address, ZIP"
        />
      </div>
      <div className="field">
        <label htmlFor="f-status">Status</label>
        <select
          id="f-status"
          value={filters.status}
          onChange={(e) => patch({ status: e.target.value as Filters['status'] })}
        >
          <option value="all">All</option>
          <option value="for-sale">For sale</option>
          <option value="for-rent">For rent</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-type">Type</label>
        <select
          id="f-type"
          value={filters.type}
          onChange={(e) => patch({ type: e.target.value as Filters['type'] })}
        >
          <option value="all">All types</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-city">City</label>
        <select id="f-city" value={filters.city} onChange={(e) => patch({ city: e.target.value })}>
          <option value="">Any city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-beds">Beds</label>
        <select
          id="f-beds"
          value={filters.beds}
          onChange={(e) => patch({ beds: Number(e.target.value) })}
        >
          <option value={0}>Any</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-sort">Sort</label>
        <select
          id="f-sort"
          value={filters.sort}
          onChange={(e) => patch({ sort: e.target.value as Filters['sort'] })}
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="sqft-desc">Largest</option>
        </select>
      </div>
    </div>
  )
}
