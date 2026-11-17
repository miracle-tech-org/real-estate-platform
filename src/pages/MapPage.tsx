import { MapSearch } from '../components/map/MapSearch'

export function MapPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="page-hero">
          <span className="eyebrow">Map search</span>
          <h1>Explore homes on the map</h1>
          <p>
            Click pins to preview listings. This is a mock map canvas — coordinates are real Bay Area
            points for demo purposes.
          </p>
        </div>
        <MapSearch />
      </div>
    </section>
  )
}
