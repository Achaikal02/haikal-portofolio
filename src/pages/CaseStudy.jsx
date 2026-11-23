import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'
import NotFound from './NotFound.jsx'

export default function CaseStudy() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]
  if (!project?.caseStudy) return <NotFound />

  const cs = project.caseStudy
  const next = projects.slice(index + 1).concat(projects.slice(0, index))[0]
  const links = (project.links || []).filter((l) => l.href)

  return (
    <>
      <section className="section section--dark center">
        <Reveal className="container cs-hero">
          <p className="eyebrow">{cs.kicker}</p>
          <h1 className="cs-hero__title">{project.name}</h1>
          <p className="cs-hero__summary">{cs.summary}</p>
          <div className="link-row">
            {project.stats && (
              <a href="#results" className="link">
                See results ›
              </a>
            )}
            {links.map((l) => (
              <a key={l.label} href={l.href} className="link" target="_blank" rel="noreferrer">
                {l.label} ›
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container cs-facts">
        {cs.facts.map((f, i) => (
          <Reveal key={f.label} delay={0.08 * i} className="cs-fact">
            <span className="card__label">{f.label}</span>
            <span className="cs-fact__value">{f.value}</span>
            <span className="card__detail">{f.detail}</span>
          </Reveal>
        ))}
      </section>

      <section className="section section--grey">
        <div className="container">
          <Reveal className="cs-intro">
            <h2 className="h2">The approach.</h2>
            <p>{cs.approachIntro}</p>
          </Reveal>
          <div className="cards">
            {cs.approach.map((a, i) => (
              <Reveal key={a.title} delay={0.1 * i} className="card card--step">
                <span className="card__step">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {project.stats && (
        <section id="results" className="section section--dark center">
          <div className="container">
            <Reveal>
              <h2 className="h2">The results.</h2>
            </Reveal>
            <div className="stats stats--large">
              {project.stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i} className="stat">
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--white">
        <div className="container">
          <h2 className="h2">Built with.</h2>
          <div className="chips chips--left">
            {cs.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div className="cs-nav">
            <Link to="/#work" className="link">
              ‹ Back to all work
            </Link>
            {next && (
              <Link to={`/#${next.id}`} className="link">
                Next: {next.name} ›
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
