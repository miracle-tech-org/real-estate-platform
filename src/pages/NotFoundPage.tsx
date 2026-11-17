import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="muted" style={{ margin: '0.75rem auto 1.5rem', maxWidth: 420 }}>
          That route does not exist in this demo. Head back to listings or the homepage.
        </p>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </section>
  )
}
