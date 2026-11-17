import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useApp } from '../../context/AppProviders'
import { IconClose, IconCompare, IconHeart, IconMenu } from '../icons'

const links = [
  { to: '/listings', label: 'Listings' },
  { to: '/map', label: 'Map' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
  { to: '/agents', label: 'Agents' },
  { to: '/calculate', label: 'Mortgage' },
  { to: '/blog', label: 'Insights' },
]

export function Header() {
  const { favorites, compare, user } = useApp()
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          North<span>line</span>
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/favorites" className="icon-btn" aria-label="Favorites" title="Favorites">
            <IconHeart />
            {favorites.length > 0 && <span className="sr-count">{favorites.length}</span>}
          </Link>
          <Link to="/compare" className="icon-btn" aria-label="Compare" title="Compare">
            <IconCompare />
            {compare.length > 0 && <span className="sr-count">{compare.length}</span>}
          </Link>
          {user ? (
            <Link to="/dashboard" className="btn btn-secondary btn-sm">
              {user.name.split(' ')[0]}
            </Link>
          ) : (
            <Link to="/login" className="btn btn-secondary btn-sm">
              Sign in
            </Link>
          )}
          <Link to="/contact" className="btn btn-primary btn-sm">
            Contact
          </Link>
          <button
            type="button"
            className="icon-btn mobile-toggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
