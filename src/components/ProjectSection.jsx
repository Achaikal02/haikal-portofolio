import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import VideoFrame from './VideoFrame.jsx'
import { caseStudies } from '../data/caseStudies.js'

export default function ProjectSection({ project, index }) {
  const { id, eyebrow, headline, name, subtitle, links = [], video = {}, stats, highlights = [], caseStudy } = project
  const theme = project.theme === 'dark' ? 'dark' : index % 2 === 0 ? 'grey' : 'white'
  const number = String(index + 1).padStart(2, '0')
  const visibleLinks = links.filter((l) => l.href)
  const hasCaseStudy = Boolean(caseStudies[id] || caseStudy)

  return (
    <section id={id} className={`section section--${theme} project`}>
      <div className="container project__inner">
        <Reveal className="project__head">
          <p className="eyebrow">
            {number} · {eyebrow}
          </p>
          <h2 className="project__headline">{headline}</h2>
          <p className="project__name">{name}</p>
          {subtitle && <p className="project__subtitle">{subtitle}</p>}
          {(hasCaseStudy || visibleLinks.length > 0) && (
            <div className="link-row">
              {hasCaseStudy && (
                <Link to={`/work/${id}`} className="link">
                  Read the case study ›
                </Link>
              )}
              {visibleLinks.map((l) => (
                <a key={l.label} href={l.href} className="link" target="_blank" rel="noreferrer">
                  {l.label} ›
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} y={40} className="project__video">
          <VideoFrame src={video.src} poster={video.poster} title={name} />
        </Reveal>

        {stats?.length > 0 && (
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        )}

        <div className={`highlights ${stats?.length ? 'highlights--ruled' : ''}`}>
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={0.1 * i} className="highlight">
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
