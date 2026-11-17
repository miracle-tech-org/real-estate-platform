import { Link, useParams } from 'react-router-dom'
import { getPropertyBySlug, getPropertiesByNeighborhood } from '../data/properties'
import { getAgentById } from '../data/agents'
import { getNeighborhoodById } from '../data/neighborhoods'
import { Gallery } from '../components/property/Gallery'
import { InquiryForm } from '../components/property/InquiryForm'
import { PropertyActions } from '../components/property/PropertyActions'
import { PropertyCard } from '../components/property/PropertyCard'
import { Calculator } from '../components/mortgage/Calculator'
import { formatPrice, formatStatus, formatType } from '../lib/format'
import { IconBath, IconBed, IconMapPin } from '../components/icons'

export function ListingDetailPage() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug ?? '')

  if (!property) {
    return (
      <section className="section">
        <div className="container empty">Listing not found.</div>
      </section>
    )
  }

  const agent = getAgentById(property.agentId)
  const neighborhood = getNeighborhoodById(property.neighborhoodId)
  const similar = getPropertiesByNeighborhood(property.neighborhoodId)
    .filter((p) => p.id !== property.id)
    .slice(0, 3)

  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">{formatStatus(property.status)} · {formatType(property.type)}</span>
            <h1>{property.title}</h1>
            <p>
              <IconMapPin width={16} height={16} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
              {property.address}, {property.city}, {property.state} {property.zip}
            </p>
            <div className="price" style={{ marginTop: '0.75rem' }}>
              {formatPrice(property.price, property.status)}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <PropertyActions id={property.id} />
          </div>
        </div>

        <div className="split">
          <div>
            <Gallery images={property.images} title={property.title} />
            <div className="stat-strip" style={{ marginTop: '1.25rem' }}>
              <div className="stat">
                <strong>
                  <IconBed width={18} height={18} style={{ display: 'inline', verticalAlign: '-3px' }} />{' '}
                  {property.beds || '—'}
                </strong>
                <span>Bedrooms</span>
              </div>
              <div className="stat">
                <strong>
                  <IconBath width={18} height={18} style={{ display: 'inline', verticalAlign: '-3px' }} />{' '}
                  {property.baths || '—'}
                </strong>
                <span>Bathrooms</span>
              </div>
              <div className="stat">
                <strong>{property.sqft ? property.sqft.toLocaleString() : '—'}</strong>
                <span>Square feet</span>
              </div>
              <div className="stat">
                <strong>{property.yearBuilt || '—'}</strong>
                <span>Year built</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h2 style={{ marginBottom: '0.75rem' }}>About this home</h2>
              <p className="prose">{property.description}</p>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Features</h3>
              <ul className="list-reset feature-list">
                {property.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {neighborhood && (
              <div className="panel" style={{ marginTop: '1.75rem' }}>
                <h3>{neighborhood.name}</h3>
                <p className="muted" style={{ margin: '0.5rem 0 1rem' }}>
                  Walk {neighborhood.walkScore} · Transit {neighborhood.transitScore} · Schools{' '}
                  {neighborhood.schoolRating}
                </p>
                <Link to={`/neighborhoods/${neighborhood.slug}`} className="btn btn-secondary btn-sm">
                  Explore neighborhood
                </Link>
              </div>
            )}

            {property.status !== 'for-rent' && property.status !== 'sold' && (
              <div style={{ marginTop: '2.5rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Payment estimate</h2>
                <Calculator
                  defaultPrice={property.price}
                  key={property.id}
                />
              </div>
            )}
          </div>

          <aside style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
            <InquiryForm propertyTitle={property.title} />
            {agent && (
              <div className="panel">
                <div className="person">
                  <img src={agent.photo} alt="" />
                  <div>
                    <strong>{agent.name}</strong>
                    <div className="muted">{agent.title}</div>
                  </div>
                </div>
                <p className="muted" style={{ margin: '0.9rem 0' }}>
                  {agent.phone}
                  <br />
                  {agent.email}
                </p>
                <Link to={`/agents/${agent.id}`} className="btn btn-secondary btn-sm">
                  View agent profile
                </Link>
              </div>
            )}
            <div className="panel">
              <h3>Details</h3>
              <p className="muted" style={{ marginTop: '0.75rem', lineHeight: 1.8 }}>
                Days on market: {property.daysOnMarket}
                <br />
                HOA: {property.hoa ? formatPrice(property.hoa) + '/mo' : '—'}
                <br />
                Taxes: {property.taxAnnual ? formatPrice(property.taxAnnual) + '/yr' : '—'}
                <br />
                Lot: {property.lotSize ? `${property.lotSize.toLocaleString()} sqft` : '—'}
              </p>
            </div>
          </aside>
        </div>

        {similar.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ marginBottom: '1.25rem' }}>Similar nearby</h2>
            <div className="grid-cards">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
