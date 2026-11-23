import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

const EASE = [0.2, 0.7, 0.2, 1]

// Words light up one by one, from grey to black, as the paragraph scrolls in.
function WordReveal({ text }) {
  const words = text.split(' ')
  return (
    <motion.p
      className="profile__statement"
      initial="dim"
      whileInView="lit"
      viewport={{ once: true, amount: 0.6 }}
      variants={{ lit: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={{ dim: { color: '#d2d2d7' }, lit: { color: '#1d1d1f', transition: { duration: 0.5 } } }}
        >
          {w}{' '}
        </motion.span>
      ))}
    </motion.p>
  )
}

function Photo() {
  const [failed, setFailed] = useState(false)
  return (
    <motion.div
      className="profile__photo"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="profile__ring" aria-hidden="true" />
      <div className="profile__img">
        {profile.photo && !failed ? (
          <img src={profile.photo} alt={`Portrait of ${profile.fullName}`} onError={() => setFailed(true)} />
        ) : (
          <span>{profile.name[0]}</span>
        )}
      </div>
      <motion.span
        className="profile__badge"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <span className="profile__dot" aria-hidden="true" />
        Open to internships
      </motion.span>
    </motion.div>
  )
}

export default function Profile() {
  const { about } = profile
  return (
    <section id="about" className="section section--grey">
      <div className="container profile">
        <Photo />
        <Reveal delay={0.2} className="profile__head">
          <p className="profile__greeting">{about.greeting}</p>
          <h2 className="h2">{about.title}</h2>
        </Reveal>
        <WordReveal text={about.statement} />
        <div className="cards">
          {about.facts.map((f, i) => (
            <Reveal key={f.label} delay={0.1 * i} className="card">
              <span className="card__label">{f.label}</span>
              <span className="card__value">{f.value}</span>
              <span className="card__detail">{f.detail}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
