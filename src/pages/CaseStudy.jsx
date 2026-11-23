import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import VideoFrame from '../components/VideoFrame.jsx'
import Gallery from '../components/Gallery.jsx'
import { projects } from '../data/projects.js'
import { caseStudies } from '../data/caseStudies.js'
import NotFound from './NotFound.jsx'

export default function CaseStudy() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]
  const cs = caseStudies[id] || project?.caseStudy
  if (!project || !cs) return <NotFound />

  const links = (project.links || []).filter((l) => l.href)
  const video = project.video || {}
  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null

  return (
    <>
      <section className="section section--dark center">
        <Reveal className="container cs-hero">
          <p className="eyebrow">{cs.kicker}</p>
          <h1 className="cs-hero__title">{project.name}</h1>
          {project.subtitle && <p className="cs-hero__subtitle">{project.subtitle}</p>}
          <p className="cs-hero__summary">{cs.summary}</p>
          {links.length > 0 && (
            <div className="link-row">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="link" target="_blank" rel="noreferrer">
                  {l.label} ›
                </a>
              ))}
            </div>
          )}
        </Reveal>
        {video.src && (
          <Reveal delay={0.15} y={40} className="container cs-video">
            <VideoFrame src={video.src} poster={video.poster} title={project.name} />
          </Reveal>
        )}
      </section>

      {cs.facts?.length > 0 && (
        <section className="container cs-facts">
          {cs.facts.map((f, i) => (
            <Reveal key={f.label} delay={0.08 * i} className="cs-fact">
              <span className="card__label">{f.label}</span>
              <span className="cs-fact__value">{f.value}</span>
              <span className="card__detail">{f.detail}</span>
            </Reveal>
          ))}
        </section>
      )}

      {cs.problem && (
        <section className="section section--white section--ruled">
          <Reveal className="container cs-text">
            <h2 className="h2">{cs.problem.title}</h2>
            <p>{cs.problem.text}</p>
          </Reveal>
        </section>
      )}

      {cs.approach?.length > 0 && (
        <section className="section section--grey">
          <div className="container">
            <Reveal className="cs-intro">
              <h2 className="h2">The approach.</h2>
              {cs.approachIntro && <p>{cs.approachIntro}</p>}
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
      )}

      {cs.gallery?.length > 0 && (
        <section className="section section--white gallery-section">
          <div className="container">
            <Reveal className="cs-intro">
              <h2 className="h2">A closer look.</h2>
              <p>Screenshots from the live product. Tap any image to enlarge.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Gallery items={cs.gallery} />
          </Reveal>
        </section>
      )}

      {cs.table && (
        <section className="section section--white">
          <div className="container">
            <Reveal className="cs-intro">
              <h2 className="h2">{cs.table.title}</h2>
              {cs.table.intro && <p>{cs.table.intro}</p>}
            </Reveal>
            <Reveal delay={0.1} className="cs-table">
              {cs.table.rows.map(([label, value]) => (
                <div key={label} className="cs-table__row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {project.stats?.length > 0 && (
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

      {cs.learnings?.items?.length > 0 && (
        <section className="section section--grey">
          <div className="container">
            <Reveal>
              <h2 className="h2">{cs.learnings.title}</h2>
            </Reveal>
            <ol className="cs-list">
              {cs.learnings.items.map((t, i) => (
                <Reveal as="li" key={i} delay={0.1 * i}>
                  {t}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section section--white">
        <div className="container">
          {cs.stack?.length > 0 && (
            <>
              <h2 className="h2">Built with.</h2>
              <div className="chips chips--left">
                {cs.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
          {cs.note && <p className="cs-note">{cs.note}</p>}
          <nav className="cs-nav" aria-label="More projects">
            {prev ? (
              <Link to={`/work/${prev.id}`} className="link">
                ‹ {prev.name}
              </Link>
            ) : (
              <Link to="/#work" className="link">
                ‹ All work
              </Link>
            )}
            {next ? (
              <Link to={`/work/${next.id}`} className="link">
                {next.name} ›
              </Link>
            ) : (
              <Link to="/#work" className="link">
                All work ›
              </Link>
            )}
          </nav>
        </div>
      </section>
    </>
  )
}
