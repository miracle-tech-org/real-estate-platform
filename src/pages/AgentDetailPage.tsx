import { Link, useParams } from 'react-router-dom'
import { getAgentById } from '../data/agents'
import { getPropertiesByAgent } from '../data/properties'
import { PropertyCard } from '../components/property/PropertyCard'
import { IconStar } from '../components/icons'

export function AgentDetailPage() {
  const { id } = useParams()
  const agent = getAgentById(id ?? '')
  const listings = getPropertiesByAgent(id ?? '')

  if (!agent) {
    return (
      <section className="section">
        <div className="container empty">Agent not found.</div>
      </section>
    )
  }

  return (
    <section className="section-tight">
      <div className="container">
        <div className="split">
          <div>
            <img
              src={agent.photo}
              alt={agent.name}
              style={{ width: '100%', maxHeight: 520, objectFit: 'cover', borderRadius: 'var(--radius)' }}
            />
          </div>
          <div>
            <span className="eyebrow">Advisor</span>
            <h1>{agent.name}</h1>
            <p className="muted" style={{ margin: '0.5rem 0 1rem' }}>
              {agent.title}
            </p>
            <div className="meta-row" style={{ marginBottom: '1rem' }}>
              <span>
                <IconStar width={14} height={14} /> {agent.rating}
              </span>
              <span>{agent.listingsSold} career sales</span>
            </div>
            <p className="prose">{agent.bio}</p>
            <div className="tag-row" style={{ marginTop: '1rem' }}>
              {agent.specialties.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <div className="panel" style={{ marginTop: '1.5rem' }}>
              <p>
                {agent.phone}
                <br />
                {agent.email}
                <br />
                Languages: {agent.languages.join(', ')}
              </p>
              <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                Contact {agent.name.split(' ')[0]}
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1.25rem' }}>Active & recent listings</h2>
          {listings.length === 0 ? (
            <div className="empty">No listings assigned to this agent in the mock data.</div>
          ) : (
            <div className="grid-cards">
              {listings.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
