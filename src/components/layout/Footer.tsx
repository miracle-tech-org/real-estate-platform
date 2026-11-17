import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Northline</div>
            <p>
              A modern brokerage platform for searching homes, comparing listings, and working with
              local specialists across the Bay Area.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <p>
              <Link to="/listings">Buy & rent</Link>
              <br />
              <Link to="/map">Map search</Link>
              <br />
              <Link to="/neighborhoods">Neighborhoods</Link>
              <br />
              <Link to="/calculate">Mortgage calculator</Link>
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <p>
              <Link to="/agents">Agents</Link>
              <br />
              <Link to="/blog">Market insights</Link>
              <br />
              <Link to="/contact">Contact</Link>
              <br />
              <Link to="/register">Create account</Link>
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <p>
              480 Mission Street
              <br />
              San Francisco, CA 94105
              <br />
              (415) 555-0100
              <br />
              hello@northline.realty
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Northline Realty. Mock demo data only.</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  )
}
