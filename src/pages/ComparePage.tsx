import { Link } from 'react-router-dom'
import { useApp } from '../context/AppProviders'
import { properties } from '../data/properties'
import { formatPrice, formatStatus, formatType } from '../lib/format'

export function ComparePage() {
  const { compare, toggleCompare, clearCompare } = useApp()
  const list = properties.filter((p) => compare.includes(p.id))

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">Compare</span>
            <h1>Side-by-side homes</h1>
            <p>Compare up to four listings on price, size, and key details.</p>
          </div>
          {list.length > 0 && (
            <button type="button" className="btn btn-secondary btn-sm" onClick={clearCompare}>
              Clear all
            </button>
          )}
        </div>

        {list.length === 0 ? (
          <div className="empty">
            Add homes from listings using the compare icon.{' '}
            <Link to="/listings" style={{ color: 'var(--brand)' }}>
              Browse listings
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  {list.map((p) => (
                    <th key={p.id}>
                      <Link to={`/listings/${p.slug}`}>{p.title}</Link>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ marginTop: '0.5rem' }}
                          onClick={() => toggleCompare(p.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Photo</td>
                  {list.map((p) => (
                    <td key={p.id}>
                      <img
                        src={p.images[0]}
                        alt=""
                        style={{ width: 180, height: 120, objectFit: 'cover', borderRadius: 10 }}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Price</td>
                  {list.map((p) => (
                    <td key={p.id}>{formatPrice(p.price, p.status)}</td>
                  ))}
                </tr>
                <tr>
                  <td>Status</td>
                  {list.map((p) => (
                    <td key={p.id}>{formatStatus(p.status)}</td>
                  ))}
                </tr>
                <tr>
                  <td>Type</td>
                  {list.map((p) => (
                    <td key={p.id}>{formatType(p.type)}</td>
                  ))}
                </tr>
                <tr>
                  <td>Beds / Baths</td>
                  {list.map((p) => (
                    <td key={p.id}>
                      {p.beds} / {p.baths}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Sqft</td>
                  {list.map((p) => (
                    <td key={p.id}>{p.sqft ? p.sqft.toLocaleString() : '—'}</td>
                  ))}
                </tr>
                <tr>
                  <td>Year built</td>
                  {list.map((p) => (
                    <td key={p.id}>{p.yearBuilt || '—'}</td>
                  ))}
                </tr>
                <tr>
                  <td>HOA</td>
                  {list.map((p) => (
                    <td key={p.id}>{p.hoa ? `${formatPrice(p.hoa)}/mo` : '—'}</td>
                  ))}
                </tr>
                <tr>
                  <td>City</td>
                  {list.map((p) => (
                    <td key={p.id}>
                      {p.city}, {p.state}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
