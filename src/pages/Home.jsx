import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Profile from '../components/Profile.jsx'
import ProjectSection from '../components/ProjectSection.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />

      <section id="work" className="section section--white section--ruled">
        <div className="container center">
          <Reveal>
            <h2 className="h2">Things I’ve built.</h2>
          </Reveal>
          <Reveal delay={0.1} className="chips">
            {projects.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="chip">
                {p.name}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {projects.map((p, i) => (
        <ProjectSection key={p.id} project={p} index={i} />
      ))}

      <section id="skills" className="section section--white section--ruled">
        <div className="container">
          <Reveal>
            <h2 className="h2 center">What I work with.</h2>
          </Reveal>
          <div className="skills">
            {profile.skills.map((s, i) => (
              <Reveal key={s.title} delay={0.1 * i} className="skill">
                <h3>{s.title}</h3>
                <p>{s.items}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section--grey">
        <Reveal className="container center contact">
          <h2 className="contact__title">Let’s build something.</h2>
          <p className="contact__sub">Open to internships in machine learning and AI.</p>
          <div className="btn-row">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                {profile.email}
              </a>
            )}
            <Link to="/resume" className="btn btn--outline">
          View CV
        </Link>
          </div>
          <div className="link-row">
            {profile.github && (
              <a href={profile.github} className="link" target="_blank" rel="noreferrer">
                GitHub ›
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} className="link" target="_blank" rel="noreferrer">
                LinkedIn ›
              </a>
            )}
            <span className="muted">{profile.location}</span>
          </div>
        </Reveal>
      </section>
    </>
  )
}
