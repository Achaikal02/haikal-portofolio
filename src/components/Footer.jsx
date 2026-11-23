import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </span>
        <span>Designed and built by {profile.name}.</span>
      </div>
    </footer>
  )
}
