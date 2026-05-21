import { useRef, useState, useEffect } from 'react'

const images = [
  '/videos/project1.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  '/videos/project2.gif',
  '/videos/Project3.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()

      // progress of section scroll
      const progress =
        -rect.top / (rect.height - window.innerHeight)

      // reduced movement
      const maxMove = 500

      const move = Math.max(
        0,
        Math.min(progress * maxMove, maxMove)
      )

      setOffset(move)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = images
const row2 = [...images].reverse()
  return (
    <section
      ref={sectionRef}
      style={{
        height: '220vh',
        background: '#0C0C0C',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          padding: 'clamp(80px,10vw,160px) 0 40px',
          background: '#0C0C0C',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginBottom: 12,
            willChange: 'transform',
            transform: `translateX(${offset}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {row1.map((src, i) => (
            <img
              key={i}
              src={src}
              loading="lazy"
              alt=""
              style={{
                width: 420,
                height: 270,
                borderRadius: 16,
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            willChange: 'transform',
            transform: `translateX(${-offset}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {row2.map((src, i) => (
            <img
              key={i}
              src={src}
              loading="lazy"
              alt=""
              style={{
                width: 420,
                height: 270,
                borderRadius: 16,
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}