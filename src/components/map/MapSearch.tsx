import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { properties } from '../../data/properties'
import { formatPrice } from '../../lib/format'
import { PropertyCard } from '../property/PropertyCard'

export function MapSearch() {
  const [activeId, setActiveId] = useState(properties[0]?.id ?? '')
  const [status, setStatus] = useState<'all' | 'for-sale' | 'for-rent'>('for-sale')

  const list = useMemo(
    () => properties.filter((p) => (status === 'all' ? true : p.status === status)),
    [status],
  )

  const active = list.find((p) => p.id === activeId) ?? list[0]

  const bounds = useMemo(() => {
    const lats = list.map((p) => p.lat)
    const lngs = list.map((p) => p.lng)
    return {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
    }
  }, [list])

  function position(lat: number, lng: number) {
    const x =
      bounds.maxLng === bounds.minLng
        ? 50
        : ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 80 + 10
    const y =
      bounds.maxLat === bounds.minLat
        ? 50
        : ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 70 + 15
    return { left: `${x}%`, top: `${y}%` }
  }

  return (
    <div>
      <div className="field" style={{ maxWidth: 220, marginBottom: '1rem' }}>
        <label htmlFor="map-status">Map filter</label>
        <select
          id="map-status"
          value={status}
          onChange={(e) => setStatus(e.target.value as typeof status)}
        >
          <option value="for-sale">For sale</option>
          <option value="for-rent">For rent</option>
          <option value="all">All active</option>
        </select>
      </div>

      <div className="map-layout">
        <div style={{ display: 'grid', gap: '1rem', maxHeight: '70vh', overflow: 'auto' }}>
          {list.map((p) => (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveId(p.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveId(p.id)
              }}
              style={{
                textAlign: 'left',
                border: active?.id === p.id ? '2px solid var(--brand)' : '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                padding: '0.75rem',
                background: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
              }}
            >
              <PropertyCard property={p} />
            </div>
          ))}
        </div>

        <div className="map-canvas" aria-label="Interactive mock map">
          {list.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`map-pin ${active?.id === p.id ? 'active' : ''}`}
              style={position(p.lat, p.lng)}
              onClick={() => setActiveId(p.id)}
            >
              {formatPrice(p.price, p.status)}
            </button>
          ))}
          {active && (
            <div
              style={{
                position: 'absolute',
                left: 16,
                right: 16,
                bottom: 16,
                background: 'rgba(255,255,255,0.95)',
                borderRadius: 14,
                padding: '1rem',
              }}
            >
              <strong>{active.title}</strong>
              <p className="muted" style={{ margin: '0.35rem 0 0.75rem' }}>
                {active.address}, {active.city}
              </p>
              <Link to={`/listings/${active.slug}`} className="btn btn-primary btn-sm">
                View listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
