import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { ContactButton } from '../components/Buttons'

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

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
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        /* Desktop nav - horizontal bar */
        .hero-nav-desktop {
          display: none;
        }

        @media (min-width: 769px) {
          .hero-nav-desktop {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: clamp(20px, 3vw, 48px);
            padding: clamp(20px, 3vw, 32px) clamp(20px, 4vw, 40px) 0;
          }
        }

        .hero-nav-desktop a {
          position: relative;
          color: #D7E2EA;
          text-decoration: none;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: clamp(0.9rem, 1.4vw, 1.4rem);
          font-family: 'Kanit', sans-serif;
          padding: 8px 16px;
          transition: opacity 0.3s ease;
        }

        .hero-nav-desktop a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, #B600A8, #7621B0);
          transition: transform 0.3s ease;
        }

        .hero-nav-desktop a:hover {
          opacity: 0.7;
        }

        .hero-nav-desktop a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Mobile hamburger button */
        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1001;
          width: 52px;
          height: 52px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          outline: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .hamburger-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .hamburger-btn:active {
          transform: scale(0.95);
        }

        @media (min-width: 769px) {
          .hamburger-btn {
            display: none;
          }
        }

        /* Hamburger icon lines */
        .hamburger-icon {
          position: relative;
          width: 22px;
          height: 16px;
        }

        .hamburger-icon span {
          position: absolute;
          width: 100%;
          height: 2px;
          background: #D7E2EA;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          left: 0;
        }

        .hamburger-icon span:nth-child(1) {
          top: 0;
        }

        .hamburger-icon span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger-icon span:nth-child(3) {
          bottom: 0;
        }

        /* Transform to X when open */
        .hamburger-btn.open .hamburger-icon span:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        .hamburger-btn.open .hamburger-icon span:nth-child(2) {
          opacity: 0;
          transform: translateY(-50%) scaleX(0);
        }

        .hamburger-btn.open .hamburger-icon span:nth-child(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
        }

        /* Mobile menu panel */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: min(85vw, 380px);
          height: 100vh;
          background: rgba(12, 12, 12, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5);
          z-index: 1000;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 32px;
          padding: 80px 32px;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu a {
          color: #D7E2EA;
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-family: 'Kanit', sans-serif;
          transition: all 0.3s ease;
          position: relative;
          padding: 12px 24px;
          opacity: 0.9;
        }

        .mobile-menu a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          width: 4px;
          height: 60%;
          background: linear-gradient(180deg, #B600A8, #7621B0);
          border-radius: 2px;
          transition: transform 0.3s ease;
          box-shadow: 0 0 12px rgba(182, 0, 168, 0.6);
        }

        .mobile-menu a:hover {
          color: #FFFFFF;
          padding-left: 32px;
          opacity: 1;
        }

        .mobile-menu a:hover::before {
          transform: translateY(-50%) scaleX(1);
        }

        /* Overlay backdrop */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        @media (min-width: 769px) {
          .mobile-menu,
          .menu-overlay {
            display: none;
          }
        }

        /* Hero content container - stacks on mobile */
        .hero-content {
          position: relative;
          z-index: 20;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: clamp(80px, 12vh, 100px);
          gap: clamp(16px, 3vh, 32px);
        }

        @media (min-width: 769px) {
          .hero-content {
            /* Desktop: remove stacking, let children position absolutely */
            padding-top: 0;
            gap: 0;
          }
          
          .hero-heading-wrapper {
            position: relative;
            z-index: 20;
            width: 100%;
            margin-top: clamp(10px, 2vw, 20px);
          }
        }

        .hero-bottom-bar {
          position: absolute;
          bottom: clamp(20px, 3vw, 48px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 clamp(16px, 4vw, 40px);
          z-index: 20;
          pointer-events: none;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .hero-bottom-bar {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .hero-tagline {
            text-align: center !important;
            max-width: 280px !important;
          }
        }

        /* Avatar positioning */
        .avatar-container {
          position: relative;
          width: min(80vw, 500px);
          max-width: calc(100vw - 32px);
          pointer-events: none;
        }

        @media (min-width: 769px) {
          .avatar-container {
            position: absolute;
            left: 50%;
            top: clamp(240px, 38vh, 340px);
            transform: translateX(-50%);
            width: min(58vw, 560px);
            z-index: 10;
          }
          
          .avatar-container img {
            max-height: calc(100svh - clamp(270px, 42vh, 370px));
          }
        }
      `}</style>

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

      {/* Desktop Navigation */}
      <div style={{ position: 'relative', zIndex: 30 }}>
        <FadeIn delay={0} y={-20}>
          <nav className="hero-nav-desktop">
            {['About', 'Price', 'Projects', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </nav>
        </FadeIn>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <div className="hamburger-icon">
          <span />
          <span />
          <span />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['About', 'Price', 'Projects', 'Contact'].map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={handleLinkClick}
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Hero Content - Heading + Avatar stacked on mobile */}
      <div className="hero-content">
        {/* Heading */}
        <div className="hero-heading-wrapper">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading"
              style={{
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 0.95,
                fontSize: 'clamp(2.6rem, 13.8vw, 12rem)',
                padding: '0 clamp(16px, 4vw, 40px)',
                textAlign: 'center',
                fontFamily: "'Kanit', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              Hi, i&apos;m ayan
            </h1>
          </FadeIn>
        </div>

        {/* Portrait - 3D avatar with Magnet effect intact */}
        <div className="avatar-container">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src="/images/avatar.png"
                alt="Ayan portrait"
                style={{
                  width: '100%',
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
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom-bar">
        <FadeIn delay={0.35} y={20}>
          <div style={{ pointerEvents: 'auto' }}>
            <p
              className="hero-tagline"
              style={{
                color: '#D7E2EA',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1.3,
                fontSize: 'clamp(0.7rem, 1.4vw, 1.5rem)',
                maxWidth: 'clamp(180px, 20vw, 240px)',
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
