import { Link } from 'react-router-dom'
import { useApp } from '../context/AppProviders'
import { properties } from '../data/properties'
import { PropertyCard } from '../components/property/PropertyCard'

export function FavoritesPage() {
  const { favorites } = useApp()
  const list = properties.filter((p) => favorites.includes(p.id))

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Saved</span>
          <h1>Your favorite homes</h1>
          <p>Saved listings stay in this browser via local storage.</p>
        </div>
        {list.length === 0 ? (
          <div className="empty">
            No favorites yet.{' '}
            <Link to="/listings" style={{ color: 'var(--brand)' }}>
              Browse listings
            </Link>
          </div>
        ) : (
          <div className="grid-cards">
            {list.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
