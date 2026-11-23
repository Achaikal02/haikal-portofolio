import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section section--white center">
      <div className="container">
        <h1 className="h2">Page not found.</h1>
        <p className="muted">This page doesn’t exist — yet.</p>
        <Link to="/" className="link">
          Back home ›
        </Link>
      </div>
    </section>
  )
}
