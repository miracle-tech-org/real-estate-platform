import { Link } from 'react-router-dom'
import { neighborhoods } from '../data/neighborhoods'
import { formatPrice } from '../lib/format'

export function NeighborhoodsPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Neighborhoods</span>
          <h1>Find your fit by place</h1>
          <p>Median prices, walkability, transit, and school ratings for key Bay Area pockets.</p>
        </div>
        <div className="grid-cards">
          {neighborhoods.map((n) => (
            <Link key={n.id} to={`/neighborhoods/${n.slug}`} className="hood-card">
              <img src={n.image} alt={n.name} loading="lazy" />
              <h3>{n.name}</h3>
              <p className="muted">{n.city}</p>
              <div className="meta-row">
                <span>Median {formatPrice(n.medianPrice)}</span>
                <span>Walk {n.walkScore}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
