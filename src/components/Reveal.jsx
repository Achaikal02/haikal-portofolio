import { motion } from 'framer-motion'

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({ children, delay = 0, y = 28, as = 'div', className, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
