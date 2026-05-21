import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { ContactButton } from '../components/Buttons'

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'clip',
        position: 'relative',
        background: '#0C0C0C',
        isolation: 'isolate',
      }}
    >
      <video
        aria-hidden="true"
        autoPlay
        className="hero-bg-video"
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          userSelect: 'none',
          filter: 'saturate(0.9) contrast(1.05)',
        }}
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, rgba(12,12,12,0.62) 0%, rgba(12,12,12,0.28) 42%, rgba(12,12,12,0.76) 100%)',
        }}
      />

      {/* Navbar — z-index above everything */}
      <div style={{ position: 'relative', zIndex: 30 }}>
        <FadeIn delay={0} y={-20}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 'clamp(20px,3vw,32px) clamp(20px,4vw,40px) 0',
            }}
          >
            {['About', 'Price', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: '#D7E2EA',
                  textDecoration: 'none',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 'clamp(0.8rem,1.4vw,1.4rem)',
                  transition: 'opacity 0.2s',
                  fontFamily: "'Kanit', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {link}
              </a>
            ))}
          </nav>
        </FadeIn>
      </div>

      {/* Heading */}
      <div style={{ position: 'relative', zIndex: 20, width: '100%' }}>
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading"
            style={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              width: '100%',
              fontSize: 'clamp(4.25rem,13.8vw,12rem)',
              marginTop: 'clamp(10px,2vw,20px)',
              padding: '0 clamp(16px,4vw,40px)',
              textAlign: 'center',
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Hi, i&apos;m ayan
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 'clamp(240px,38vh,340px)',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
          width: 'min(58vw, 560px)',
          maxWidth: 'calc(100vw - 32px)',
        }}
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/images/avatar.png"
              alt="Jack portrait"
              style={{
                width: '100%',
                maxHeight: 'calc(100svh - clamp(270px,42vh,370px))',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar — above avatar on sides, z-index 20 */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(24px,3vw,48px)',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '0 clamp(16px,4vw,40px)',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <FadeIn delay={0.35} y={20}>
          <div style={{ pointerEvents: 'auto' }}>
            <p
              style={{
                color: '#D7E2EA',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1.3,
                fontSize: 'clamp(0.75rem,1.4vw,1.5rem)',
                maxWidth: 'clamp(160px,18vw,240px)',
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div style={{ pointerEvents: 'auto' }}>
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
