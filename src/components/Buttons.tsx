export function ContactButton() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToContact}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181,1,167,0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
        borderRadius: '9999px',
        border: 'none',
        color: 'white',
        fontFamily: "'Kanit', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        cursor: 'pointer',
        padding: 'clamp(10px,1.5vw,16px) clamp(28px,3vw,48px)',
        fontSize: 'clamp(0.7rem,1.2vw,1rem)',
        whiteSpace: 'nowrap',
      }}
    >
      Contact Me
    </button>
  )
}

export function LiveProjectButton() {
  return (
    <button
      style={{
        background: 'transparent',
        border: '2px solid #D7E2EA',
        borderRadius: '9999px',
        color: '#D7E2EA',
        fontFamily: "'Kanit', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        cursor: 'pointer',
        padding: 'clamp(10px,1.2vw,14px) clamp(24px,2.5vw,40px)',
        fontSize: 'clamp(0.75rem,1.1vw,1rem)',
        whiteSpace: 'nowrap',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = 'transparent')
      }
    >
      Live Project
    </button>
  )
}
