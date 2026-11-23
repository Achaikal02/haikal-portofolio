import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'

export default function Nav() {
  return (
    <header className="nav">
      <nav aria-label="Primary" className="nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${profile.name} — home`}>
          <img src="/logo.svg" alt="" width="24" height="24" className="nav__logo" />
          {profile.name}
        </Link>
        <div className="nav__links">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/resume" className="nav__cta">
            Résumé
          </Link>
        </div>
      </nav>
    </header>
  )
}
