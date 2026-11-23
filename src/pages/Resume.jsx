import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'

export default function Resume() {
  return (
    <section className="section section--grey resume">
      <div className="container resume__head">
        <div>
          <p className="eyebrow">Résumé</p>
          <h1 className="h2">{profile.fullName}</h1>
        </div>
        <div className="btn-row">
          <a href={profile.cv} className="btn btn--outline" target="_blank" rel="noreferrer">
            Open in new tab
          </a>
          <a href={profile.cv} className="btn btn--primary" download>
            Download PDF
          </a>
        </div>
      </div>

      <div className="resume__frame">
        <object data={`${profile.cv}#view=FitH`} type="application/pdf" aria-label="Résumé PDF">
          <div className="resume__fallback">
            <p>Your browser can’t show the PDF here.</p>
            <a href={profile.cv} className="link" target="_blank" rel="noreferrer">
              Open the résumé ›
            </a>
          </div>
        </object>
      </div>

      <div className="container">
        <Link to="/" className="link">
          ‹ Back home
        </Link>
      </div>
    </section>
  )
}
