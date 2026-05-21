import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px clamp(16px,4vw,40px)',
        background: '#0C0C0C',
        overflow: 'hidden',
      }}
    >
      {/* Decorative 3D objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        style={{
          position: 'absolute',
          top: '4%',
          left: 'clamp(8px,4vw,64px)',
          zIndex: 1,
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          style={{ width: 'clamp(120px,16vw,210px)' }}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: 'clamp(12px,10vw,100px)',
          zIndex: 1,
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          style={{ width: 'clamp(100px,14vw,180px)' }}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        style={{
          position: 'absolute',
          top: '4%',
          right: 'clamp(8px,4vw,64px)',
          zIndex: 1,
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          style={{ width: 'clamp(120px,16vw,210px)' }}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        style={{
          position: 'absolute',
          bottom: '8%',
          right: 'clamp(12px,10vw,100px)',
          zIndex: 1,
        }}
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          style={{ width: 'clamp(130px,17vw,220px)' }}
        />
      </FadeIn>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(32px,5vw,64px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading"
            style={{
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textAlign: 'center',
              fontSize: 'clamp(3rem,12vw,160px)',
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            About me
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(48px,6vw,96px)',
          }}
        >
          <AnimatedText
            text="I’m a passionate developer who enjoys building clean, modern, and user-friendly applications from idea to deployment. I love creating smooth digital experiences for both web and mobile platforms while continuously learning and improving through real-world projects. Let's build something incredible together!"
            style={{
              color: '#D7E2EA',
              fontWeight: 500,
              textAlign: 'center',
              lineHeight: 1.6,
              maxWidth: 560,
              fontSize: 'clamp(1rem,2vw,1.35rem)',
              fontFamily: "'Kanit', sans-serif",
            }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
