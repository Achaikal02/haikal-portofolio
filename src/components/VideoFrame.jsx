import { useRef, useState } from 'react'

function PlayIcon() {
  return (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" fill="#1d1d1f" />
    </svg>
  )
}

// 16:9 product video. Shows a poster + play button until clicked.
// With no src yet, it shows a "coming soon" placeholder.
export default function VideoFrame({ src, poster, title }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  if (!src) {
    return (
      <div className="video">
        <div className="video__empty">
          <span className="video__play video__play--disabled" aria-hidden="true">
            <PlayIcon />
          </span>
          <span className="video__label">Product intro · coming soon</span>
        </div>
      </div>
    )
  }

  const start = () => {
    setPlaying(true)
    requestAnimationFrame(() => ref.current?.play())
  }

  return (
    <div className="video">
      <video
        ref={ref}
        src={src}
        poster={poster || undefined}
        controls={playing}
        preload="metadata"
        playsInline
        className="video__el"
      />
      {!playing && (
        <button type="button" className="video__overlay" onClick={start} aria-label={`Play ${title} product video`}>
          <span className="video__play">
            <PlayIcon />
          </span>
          <span className="video__label">Product intro · ~3 min</span>
        </button>
      )}
    </div>
  )
}
