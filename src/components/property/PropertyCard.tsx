import { Link } from 'react-router-dom'
import type { Property } from '../../types'
import { formatPrice, formatStatus } from '../../lib/format'
import { IconBath, IconBed, IconMapPin } from '../icons'
import { PropertyActions } from './PropertyActions'

export function PropertyCard({ property }: { property: Property }) {
  const badgeClass =
    property.status === 'pending'
      ? 'badge badge-pending'
      : property.status === 'sold'
        ? 'badge badge-sold'
        : property.status === 'for-rent'
          ? 'badge badge-rent'
          : 'badge'

  return (
    <article className="property-card">
      <Link to={`/listings/${property.slug}`}>
        <div className="property-card-media">
          <img src={property.images[0]} alt={property.title} loading="lazy" />
          <span className={badgeClass}>{formatStatus(property.status)}</span>
          <PropertyActions id={property.id} />
        </div>
        <div className="property-card-body">
          <div className="price">{formatPrice(property.price, property.status)}</div>
          <h3>{property.title}</h3>
          <div className="meta-row">
            <span>
              <IconMapPin width={14} height={14} />
              {property.city}, {property.state}
            </span>
          </div>
          <div className="meta-row">
            {property.beds > 0 && (
              <span>
                <IconBed width={15} height={15} />
                {property.beds} bd
              </span>
            )}
            {property.baths > 0 && (
              <span>
                <IconBath width={15} height={15} />
                {property.baths} ba
              </span>
            )}
            {property.sqft > 0 && <span>{property.sqft.toLocaleString()} sqft</span>}
          </div>
        </div>
      </Link>
    </article>
  )
}
