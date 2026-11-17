import { useParams } from 'react-router-dom'
import { getNeighborhoodBySlug } from '../data/neighborhoods'
import { getPropertiesByNeighborhood } from '../data/properties'
import { PropertyCard } from '../components/property/PropertyCard'
import { formatPrice } from '../lib/format'

export function NeighborhoodDetailPage() {
  const { slug } = useParams()
  const neighborhood = getNeighborhoodBySlug(slug ?? '')
  const listings = getPropertiesByNeighborhood(neighborhood?.id ?? '')

  if (!neighborhood) {
    return (
      <section className="section">
        <div className="container empty">Neighborhood not found.</div>
      </section>
    )
  }

  return (
    <section className="section-tight">
      <div className="container">
        <div
          style={{
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            marginBottom: '2rem',
            maxHeight: 420,
          }}
        >
          <img
            src={neighborhood.image}
            alt={neighborhood.name}
            style={{ width: '100%', height: 420, objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero" style={{ paddingTop: 0 }}>
          <span className="eyebrow">{neighborhood.city}</span>
          <h1>{neighborhood.name}</h1>
          <p>{neighborhood.description}</p>
        </div>
        <div className="stat-strip">
          <div className="stat">
            <strong>{formatPrice(neighborhood.medianPrice)}</strong>
            <span>Median price</span>
          </div>
          <div className="stat">
            <strong>{neighborhood.walkScore}</strong>
            <span>Walk score</span>
          </div>
          <div className="stat">
            <strong>{neighborhood.transitScore}</strong>
            <span>Transit score</span>
          </div>
          <div className="stat">
            <strong>{neighborhood.schoolRating}</strong>
            <span>School rating</span>
          </div>
        </div>
        <div className="tag-row" style={{ margin: '1.5rem 0 2.5rem' }}>
          {neighborhood.highlights.map((h) => (
            <span key={h} className="tag">
              {h}
            </span>
          ))}
        </div>
        <h2 style={{ marginBottom: '1.25rem' }}>Homes in {neighborhood.name}</h2>
        {listings.length === 0 ? (
          <div className="empty">No listings in this neighborhood right now.</div>
        ) : (
          <div className="grid-cards">
            {listings.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
