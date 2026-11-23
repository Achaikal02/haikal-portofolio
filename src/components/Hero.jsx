import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile } from '../data/profile.js'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] } },
}

export default function Hero() {
  const { hero, availability } = profile
  return (
    <motion.section
      id="top"
      className="hero"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.p variants={item} className="hero__eyebrow">
        {availability}
      </motion.p>
      <motion.h1 variants={item} className="hero__title">
        {hero.title[0]}
        <span className="hero__title-sub">{hero.title[1]}</span>
      </motion.h1>
      <motion.p variants={item} className="hero__intro">
        {hero.intro}
      </motion.p>
      <motion.div variants={item} className="btn-row">
        <a href="#work" className="btn btn--primary">
          See my work
        </a>
        <Link to="/resume" className="btn btn--outline">
          View CV
        </Link>
      </motion.div>
      <motion.p variants={item} className="hero__edu">
        {hero.education}
      </motion.p>
    </motion.section>
  )
}
