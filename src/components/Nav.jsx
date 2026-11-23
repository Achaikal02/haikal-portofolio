import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

const LINKS = [
  { to: '/#work', label: 'Work' },
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the phone menu whenever the page or section changes.
  useEffect(() => setOpen(false), [location.pathname, location.hash])

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`}>
      <nav aria-label="Primary" className="nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${profile.name} — home`}>
          <img src="/logo.svg" alt="" width="24" height="24" className="nav__logo" />
          {profile.name}
        </Link>

        <div className="nav__right">
          <div id="nav-links" className="nav__links">
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link to="/resume" className="nav__cta">
            Résumé
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  )
}
