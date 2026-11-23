import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Arrow({ dir }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}

// Horizontal, swipeable screenshot strip. Click a shot to see it full screen.
export default function Gallery({ items = [] }) {
  const track = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [active, setActive] = useState(0) // index of the shot closest to the left edge
  const [open, setOpen] = useState(null) // index of the shot shown full screen

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setAtStart(el.scrollLeft < 8)
    setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8)
    const cards = [...el.querySelectorAll('.gallery__item')]
    const start = el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).scrollPaddingLeft || 0)
    let best = 0
    let dist = Infinity
    cards.forEach((c, i) => {
      const d = Math.abs(c.getBoundingClientRect().left - start)
      if (d < dist) {
        dist = d
        best = i
      }
    })
    setActive(el.scrollLeft + el.clientWidth > el.scrollWidth - 8 ? cards.length - 1 : best)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const goTo = (i) => {
    const el = track.current
    const card = el?.querySelectorAll('.gallery__item')[i]
    if (!el || !card) return
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft || 0)
    el.scrollTo({ left: card.offsetLeft - pad, behavior: 'smooth' })
  }
  const scrollBy = (dir) => goTo(Math.min(items.length - 1, Math.max(0, active + dir)))

  // Keyboard controls for the full-screen view
  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, items.length])

  if (!items.length) return null
  const current = open !== null ? items[open] : null

  return (
    <div className="gallery">
      <div className="gallery__stage">
      <div ref={track} className="gallery__track" onScroll={update}>
        {items.map((it, i) => (
          <figure key={it.src} className="gallery__item">
            <button type="button" className="gallery__shot" onClick={() => setOpen(i)} aria-label={`View larger: ${it.caption || `screenshot ${i + 1}`}`}>
              <img src={it.src} alt={it.caption || `Screenshot ${i + 1}`} loading="lazy" />
            </button>
            {it.caption && <figcaption>{it.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button type="button" className={`gallery__arrow gallery__arrow--prev ${atStart ? 'is-hidden' : ''}`} onClick={() => scrollBy(-1)} aria-label="Previous screenshot" tabIndex={atStart ? -1 : 0}>
            <Arrow dir="left" />
          </button>
          <button type="button" className={`gallery__arrow gallery__arrow--next ${atEnd ? 'is-hidden' : ''}`} onClick={() => scrollBy(1)} aria-label="Next screenshot" tabIndex={atEnd ? -1 : 0}>
            <Arrow dir="right" />
          </button>
        </>
      )}
      </div>

      {items.length > 1 && (
        <div className="gallery__footer">
          <div className="gallery__dots" role="tablist" aria-label="Screenshots">
            {items.map((it, i) => (
              <button
                key={it.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show screenshot ${i + 1}`}
                className={`gallery__dot ${i === active ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <span className="gallery__count">
            {active + 1} / {items.length}
            <span className="gallery__hint"> · swipe</span>
          </span>
        </div>
      )}

      <AnimatePresence>
        {current && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.caption || 'Screenshot'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={current.src}
              className="lightbox__figure"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {current.full ? (
                <div className="lightbox__scroll" tabIndex={0}>
                  <img src={current.full} alt={current.caption || 'Full page screenshot'} />
                </div>
              ) : (
                <img src={current.src} alt={current.caption || 'Screenshot'} />
              )}
              <figcaption>
                {current.caption}
                {current.full && <em>Scroll to see the full page</em>}
                <span>
                  {open + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>

            <button type="button" className="lightbox__close" onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox__nav lightbox__nav--prev"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpen((i) => (i - 1 + items.length) % items.length)
                  }}
                  aria-label="Previous screenshot"
                >
                  <Arrow dir="left" />
                </button>
                <button
                  type="button"
                  className="lightbox__nav lightbox__nav--next"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpen((i) => (i + 1) % items.length)
                  }}
                  aria-label="Next screenshot"
                >
                  <Arrow dir="right" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
