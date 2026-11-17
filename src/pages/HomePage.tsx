import { Link } from 'react-router-dom'
import { agents } from '../data/agents'
import { getFeaturedProperties } from '../data/properties'
import { neighborhoods } from '../data/neighborhoods'
import { testimonials } from '../data/testimonials'
import { PropertyCard } from '../components/property/PropertyCard'
import { SearchBar } from '../components/search/SearchBar'
import { formatPrice } from '../lib/format'
import { IconArrow, IconStar } from '../components/icons'

export function HomePage() {
  const featured = getFeaturedProperties()

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&h=1200&fit=crop"
            alt="Contemporary home exterior at dusk"
          />
        </div>
        <div className="container hero-content">
          <div className="hero-brand">Northline</div>
          <h1>Find the next place that feels like home.</h1>
          <p>
            Search Bay Area listings, compare homes side by side, and work with specialists who know
            every block.
          </p>
          <div className="hero-actions">
            <Link to="/listings" className="btn btn-ghost">
              Browse listings
            </Link>
            <Link to="/map" className="btn btn-ghost">
              Explore map
            </Link>
          </div>
          <SearchBar dark />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Featured homes</span>
            <h2>Homes worth a closer look</h2>
            <p>Curated listings across San Francisco, Oakland, Berkeley, and Palo Alto.</p>
          </div>
          <div className="grid-cards">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div style={{ marginTop: '1.75rem' }}>
            <Link to="/listings" className="btn btn-secondary">
              View all listings <IconArrow width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Neighborhoods</span>
            <h2>Know the streets before you buy</h2>
            <p>Walk scores, schools, and local character for the places people actually want to live.</p>
          </div>
          <div className="grid-cards">
            {neighborhoods.slice(0, 3).map((n) => (
              <Link key={n.id} to={`/neighborhoods/${n.slug}`} className="hood-card">
                <img src={n.image} alt={n.name} loading="lazy" />
                <h3>{n.name}</h3>
                <p className="muted">{n.city} · Median {formatPrice(n.medianPrice)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Advisors</span>
            <h2>Local specialists, clear guidance</h2>
            <p>Buyer, luxury, and investment leads ready to walk you through the next step.</p>
          </div>
          <div className="grid-cards">
            {agents.slice(0, 3).map((a) => (
              <Link key={a.id} to={`/agents/${a.id}`} className="agent-card">
                <img src={a.photo} alt={a.name} loading="lazy" />
                <h3>{a.name}</h3>
                <p className="muted">{a.title}</p>
                <div className="meta-row">
                  <span>
                    <IconStar width={14} height={14} /> {a.rating}
                  </span>
                  <span>{a.listingsSold} sold</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Client stories</span>
            <h2>Trusted through search, offer, and close</h2>
          </div>
          <div className="grid-cards">
            {testimonials.map((t) => (
              <article key={t.id} className="testimonial-card">
                <blockquote>“{t.quote}”</blockquote>
                <div className="person">
                  <img src={t.avatar} alt="" />
                  <div>
                    <strong>{t.name}</strong>
                    <div className="muted">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
