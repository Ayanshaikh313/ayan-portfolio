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

// Duplicate images enough times to always fill the screen
const row1 = [...images, ...images, ...images]
const row2 = [...images].reverse()
const row2Full = [...row2, ...row2, ...row2]

// Responsive breakpoints for card sizing and animation speed
function getResponsiveValues() {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1920

  if (vw < 480) {
    // Mobile (small phones)
    return {
      cardW: 200,
      cardH: 130,
      gap: 10,
      maxMove: 250,
      baseShift: -80,
    }
  } else if (vw < 768) {
    // Mobile (larger phones)
    return {
      cardW: 240,
      cardH: 155,
      gap: 12,
      maxMove: 320,
      baseShift: -100,
    }
  } else if (vw < 1024) {
    // Tablet
    return {
      cardW: 280,
      cardH: 180,
      gap: 12,
      maxMove: 400,
      baseShift: -140,
    }
  } else {
    // Desktop (original values)
    return {
      cardW: 380,
      cardH: 240,
      gap: 14,
      maxMove: 600,
      baseShift: -200,
    }
  }
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [dimensions, setDimensions] = useState(getResponsiveValues())

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getResponsiveValues())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll-driven animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight

      if (scrollable <= 0) return

      // clamp progress 0 → 1 as the section scrolls through
      const progress = Math.max(0, Math.min(-rect.top / scrollable, 1))

      setOffset(progress * dimensions.maxMove)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [dimensions.maxMove])

  const { cardW, cardH, gap, baseShift } = dimensions

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
          background: '#0C0C0C',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap,
          paddingTop: 'clamp(30px, 8vw, 120px)',
          paddingBottom: 'clamp(20px, 5vw, 80px)',
        }}
      >
        {/* Section label */}
        <p
          style={{
            position: 'absolute',
            top: 'clamp(12px, 4vw, 48px)',
            left: 'clamp(16px, 4vw, 64px)',
            color: '#555',
            fontSize: 'clamp(9px, 1.1vw, 13px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'Kanit, sans-serif',
          }}
        >
          Selected Work
        </p>

        {/* Top Row — moves right on scroll */}
        <div
          style={{
            display: 'flex',
            gap,
            flexShrink: 0,
            willChange: 'transform',
            transform: `translateX(${baseShift + offset}px)`,
            transition: 'transform 0.08s linear',
          }}
        >
          {row1.map((src, i) => (
            <div
              key={i}
              style={{
                width: cardW,
                height: cardH,
                borderRadius: 'clamp(10px, 2vw, 14px)',
                overflow: 'hidden',
                flexShrink: 0,
                background: '#111',
              }}
            >
              <img
                src={src}
                loading="lazy"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Row — moves left on scroll */}
        <div
          style={{
            display: 'flex',
            gap,
            flexShrink: 0,
            willChange: 'transform',
            transform: `translateX(${-baseShift - offset}px)`,
            transition: 'transform 0.08s linear',
          }}
        >
          {row2Full.map((src, i) => (
            <div
              key={i}
              style={{
                width: cardW,
                height: cardH,
                borderRadius: 'clamp(10px, 2vw, 14px)',
                overflow: 'hidden',
                flexShrink: 0,
                background: '#111',
              }}
            >
              <img
                src={src}
                loading="lazy"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
