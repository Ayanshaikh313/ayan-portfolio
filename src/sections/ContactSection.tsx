import FadeIn from '../components/FadeIn'
import type { ReactNode } from 'react'

const contactLinks = [
  { label: 'Github', href: 'https://github.com/Ayanshaikh313' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/ayanshaikh786'},
]

const marqueeItems = Array.from({ length: 8 }, (_, index) => index)

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        minHeight: '100dvh',
        background: '#000',
        color: '#F4F4F4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 20,
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.24)',
        fontFamily: "'Kanit', sans-serif",
      }}
    >
      <style>{`
        /* Top bar responsive */
        .contact-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: clamp(12px, 1vw, 12px) clamp(16px, 2.5vw, 40px) 0;
        }

        .contact-tagline {
          font-size: clamp(0.65rem, 1vw, 1rem);
          letter-spacing: 0.55em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @media (max-width: 480px) {
          .contact-tagline {
            letter-spacing: 0.25em;
            font-size: 0.6rem;
          }
        }

        /* Description text alignment */
        .contact-description {
          text-align: right;
          margin-left: auto;
          max-width: 680px;
          font-size: clamp(0.85rem, 1.45vw, 1.55rem);
          line-height: 1.35;
          text-transform: uppercase;
          font-weight: 400;
        }

        @media (max-width: 600px) {
          .contact-description {
            text-align: left;
            margin-left: 0;
            font-size: 0.85rem;
            line-height: 1.4;
          }
        }

        /* Contact rows responsive */
        .contact-rows {
          margin-top: clamp(18px, 3vw, 38px);
          display: grid;
          gap: clamp(12px, 2vw, 24px);
        }

        .contact-row {
          border-bottom: 1px solid rgba(255,255,255,0.24);
          padding-bottom: clamp(7px, 1vw, 12px);
        }

        .contact-row-label {
          font-size: clamp(1rem, 1.7vw, 1.75rem);
          line-height: 1.1;
          text-transform: uppercase;
          margin-bottom: clamp(5px, 0.8vw, 8px);
        }

        .contact-row-value {
          color: #F4F4F4;
          font-size: clamp(0.85rem, 1.35vw, 1.35rem);
          line-height: 1.3;
          text-decoration: none;
          word-break: break-word;
        }

        @media (max-width: 600px) {
          .contact-row-label {
            font-size: 1rem;
          }
          .contact-row-value {
            font-size: 0.85rem;
          }
        }

        /* Heading responsive */
        .contact-heading {
          font-size: clamp(2.5rem, 9vw, 8rem);
          line-height: 0.88;
          font-weight: 200;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          padding: clamp(12px, 2vw, 24px) clamp(16px, 2.5vw, 40px) 0;
        }

        @media (max-width: 600px) {
          .contact-heading {
            font-size: 2.5rem;
            line-height: 0.95;
          }
        }
      `}</style>

      <div>
        {/* Top bar */}
        <div className="contact-top-bar">
          <p className="contact-tagline">
            You dream it, I code it
          </p>

          <a
            href="#"
            aria-label="Back to top"
            style={{
              width: 'clamp(44px, 5vw, 64px)',
              height: 'clamp(44px, 5vw, 64px)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              color: '#F4F4F4',
              textDecoration: 'none',
              fontSize: 'clamp(1.4rem, 2.4vw, 2.25rem)',
              lineHeight: 1,
              flex: '0 0 auto',
            }}
          >
            ↑
          </a>
        </div>

        {/* Heading */}
        <FadeIn delay={0.05} y={30}>
          <h2 className="contact-heading">
            Contact
          </h2>
        </FadeIn>

        {/* Content */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.8)',
            marginTop: 'clamp(4px, 0.8vw, 10px)',
            padding: 'clamp(16px, 2.5vw, 32px) clamp(16px, 2.5vw, 40px) 0',
          }}
        >
          <FadeIn delay={0.1} y={24}>
            <p className="contact-description">
              Got a question, or project idea?
              <br />
              I&apos;d love to hear from you and discuss further!
            </p>
          </FadeIn>

          {/* Contact rows */}
          <div className="contact-rows">
            <ContactRow label="E-mail">
              <a
                href="mailto:ayanms7861@gmail.com"
                className="contact-row-value"
              >
                ayanms7861@gmail.com
              </a>
            </ContactRow>

            <ContactRow label="Phone">
              <a
                href="tel:+918799862300"
                className="contact-row-value"
              >
                +91 8799862300
              </a>
            </ContactRow>

            <ContactRow label="Social media">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px 12px',
                }}
              >
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#F4F4F4',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontSize: 'clamp(0.75rem, 1vw, 1rem)',
                    }}
                  >
                    {'{ '}
                    {link.label}
                    {' }'}
                  </a>
                ))}
              </div>
            </ContactRow>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.24)',
          borderBottom: '1px solid rgba(255,255,255,0.24)',
          overflow: 'hidden',
          padding: 'clamp(10px, 1.4vw, 16px) 0',
          marginTop: 'clamp(24px, 4vw, 32px)',
        }}
      >
        <div
          className="contact-marquee"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {marqueeItems.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(20px, 4vw, 72px)',
                paddingRight: 'clamp(20px, 4vw, 72px)',
                flex: '0 0 auto',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.2rem, 2.8vw, 2.6rem)',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  fontWeight: 400,
                }}
              >
                You dream it, I code it
              </span>
              <span
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(1.2rem, 2.8vw, 2.6rem)',
                  lineHeight: 1,
                }}
              >
                ✧
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="contact-row">
      <p className="contact-row-label">
        {label}
      </p>
      {children}
    </div>
  )
}
