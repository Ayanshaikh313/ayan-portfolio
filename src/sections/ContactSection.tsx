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
        height: '100svh',
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
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            padding: 'clamp(8px,1vw,12px) clamp(16px,2.5vw,40px) 0',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.8rem,1vw,1rem)',
              letterSpacing: '0.55em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            You dream it, I code it
          </p>

          <a
            href="#"
            aria-label="Back to top"
            style={{
              width: 'clamp(44px,5vw,64px)',
              height: 'clamp(44px,5vw,64px)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              color: '#F4F4F4',
              textDecoration: 'none',
              fontSize: 'clamp(1.6rem,2.4vw,2.25rem)',
              lineHeight: 1,
              flex: '0 0 auto',
            }}
          >
            -
          </a>
        </div>

        <FadeIn delay={0.05} y={30}>
          <h2
            style={{
              fontSize: 'clamp(3.25rem,9vw,8rem)',
              lineHeight: 0.88,
              fontWeight: 200,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              padding: 'clamp(12px,2vw,24px) clamp(16px,2.5vw,40px) 0',
            }}
          >
            Contact
          </h2>
        </FadeIn>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.8)',
            marginTop: 'clamp(4px,0.8vw,10px)',
            padding: 'clamp(18px,2.5vw,32px) clamp(16px,2.5vw,40px) 0',
          }}
        >
          <FadeIn delay={0.1} y={24}>
            <p
              style={{
                textAlign: 'right',
                marginLeft: 'auto',
                maxWidth: 680,
                fontSize: 'clamp(1rem,1.45vw,1.55rem)',
                lineHeight: 1.35,
                textTransform: 'uppercase',
                fontWeight: 400,
              }}
            >
              Got a question, or project idea?
              <br />
              I&apos;d love to hear from you and discuss further!
            </p>
          </FadeIn>

          <div
            style={{
              marginTop: 'clamp(22px,3vw,38px)',
              display: 'grid',
              gap: 'clamp(14px,2vw,24px)',
            }}
          >
            <ContactRow label="E-mail">
              <a
                href="mailto:ayanms7861@gmail.com"
                style={contactValueStyle}
              >
                ayanms7861@gmail.com
              </a>
            </ContactRow>

            <ContactRow label="Phone">
              <a href="tel:+918799862300" style={contactValueStyle}>
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
                      fontSize: 'clamp(0.8rem,1vw,1rem)',
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

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.24)',
          borderBottom: '1px solid rgba(255,255,255,0.24)',
          overflow: 'hidden',
          padding: 'clamp(10px,1.4vw,16px) 0',
          marginTop: 0,
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
                gap: 'clamp(28px,4vw,72px)',
                paddingRight: 'clamp(28px,4vw,72px)',
                flex: '0 0 auto',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.45rem,2.8vw,2.6rem)',
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
                  fontSize: 'clamp(1.45rem,2.8vw,2.6rem)',
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
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.24)',
        paddingBottom: 'clamp(7px,1vw,12px)',
      }}
    >
      <p
        style={{
          fontSize: 'clamp(1.2rem,1.7vw,1.75rem)',
          lineHeight: 1,
          textTransform: 'uppercase',
          marginBottom: 'clamp(5px,0.8vw,8px)',
        }}
      >
        {label}
      </p>
      {children}
    </div>
  )
}

const contactValueStyle = {
  color: '#F4F4F4',
  fontSize: 'clamp(0.98rem,1.35vw,1.35rem)',
  lineHeight: 1.2,
  textDecoration: 'none',
} as const
