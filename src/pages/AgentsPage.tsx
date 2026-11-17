import { Link } from 'react-router-dom'
import { agents } from '../data/agents'
import { IconStar } from '../components/icons'

export function AgentsPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Agents</span>
          <h1>Meet the Northline team</h1>
          <p>Specialists across buyers, luxury listings, investments, and neighborhood guidance.</p>
        </div>
        <div className="grid-cards">
          {agents.map((a) => (
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
              <div className="tag-row">
                {a.specialties.slice(0, 2).map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
