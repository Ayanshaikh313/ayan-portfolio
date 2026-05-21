import { useRef, useState, useEffect } from 'react'

const images = [
  '/videos/project1.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  '/videos/project2.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const val =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(val)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = [
    ...images.slice(0, 11),
    ...images.slice(0, 11),
    ...images.slice(0, 11),
  ]
  const row2 = [
    ...images.slice(11),
    ...images.slice(11),
    ...images.slice(11),
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0C0C0C',
        padding: 'clamp(80px,10vw,160px) 0 40px',
        overflow: 'hidden',
      }}
    >
      {/* Row 1 — moves right */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          marginBottom: 12,
          willChange: 'transform',
          transform: `translateX(${offset - 200}px)`,
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
      {/* Row 2 — moves left */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          willChange: 'transform',
          transform: `translateX(${-(offset - 200)}px)`,
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
    </section>
  )
}
