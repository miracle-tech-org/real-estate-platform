import { Link, Navigate } from 'react-router-dom'
import { useApp } from '../context/AppProviders'
import { properties } from '../data/properties'
import { PropertyCard } from '../components/property/PropertyCard'

export function DashboardPage() {
  const { user, favorites, compare, logout } = useApp()

  if (!user) return <Navigate to="/login" replace />

  const saved = properties.filter((p) => favorites.includes(p.id)).slice(0, 3)

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">Buyer portal</span>
            <h1>Hello, {user.name}</h1>
            <p>Track favorites, comparisons, and next steps from your mock dashboard.</p>
          </div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={logout}>
            Sign out
          </button>
        </div>

        <div className="stat-strip">
          <div className="stat">
            <strong>{favorites.length}</strong>
            <span>Saved homes</span>
          </div>
          <div className="stat">
            <strong>{compare.length}</strong>
            <span>In compare</span>
          </div>
          <div className="stat">
            <strong>2</strong>
            <span>Saved searches (mock)</span>
          </div>
          <div className="stat">
            <strong>1</strong>
            <span>Tour requests (mock)</span>
          </div>
        </div>

        <div className="split" style={{ marginTop: '2rem' }}>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Recently saved</h2>
            {saved.length === 0 ? (
              <div className="empty">
                No favorites yet. <Link to="/listings">Browse listings</Link>
              </div>
            ) : (
              <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                {saved.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </div>
          <aside className="panel form-stack">
            <h3>Quick links</h3>
            <Link to="/favorites">View all favorites</Link>
            <Link to="/compare">Open comparison</Link>
            <Link to="/map">Map search</Link>
            <Link to="/calculate">Mortgage calculator</Link>
            <Link to="/contact">Message an advisor</Link>
            <div style={{ marginTop: '0.5rem' }}>
              <p className="muted">Signed in as {user.email}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
