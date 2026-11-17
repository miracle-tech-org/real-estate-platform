import { useApp } from '../../context/AppProviders'
import { IconCompare, IconHeart, IconHeartFilled } from '../icons'

export function PropertyActions({ id }: { id: string }) {
  const { favorites, compare, toggleFavorite, toggleCompare } = useApp()
  const isFav = favorites.includes(id)
  const isCompare = compare.includes(id)

  return (
    <div className="card-actions">
      <button
        type="button"
        className={`icon-btn ${isFav ? 'active' : ''}`}
        aria-label={isFav ? 'Remove favorite' : 'Save favorite'}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite(id)
        }}
      >
        {isFav ? <IconHeartFilled /> : <IconHeart />}
      </button>
      <button
        type="button"
        className={`icon-btn ${isCompare ? 'active' : ''}`}
        aria-label={isCompare ? 'Remove from compare' : 'Add to compare'}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleCompare(id)
        }}
      >
        <IconCompare />
      </button>
    </div>
  )
}
