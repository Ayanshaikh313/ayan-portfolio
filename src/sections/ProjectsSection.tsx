import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { LiveProjectButton } from '../components/Buttons'

const projects = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1a: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1b: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2:  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1a: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1b: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2:  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1a: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1b: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2:  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  totalCards: number
  scrollProgress: MotionValue<number>
}

function ProjectCard({
  project,
  index,
  totalCards,
  scrollProgress,
}: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(
    scrollProgress,
    [index / totalCards, 1],
    [1, targetScale]
  )
  const br = 'clamp(28px,5vw,60px)'

  return (
    <div
      style={{
        height: '85vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'sticky',
        top: `${96 + index * 28}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          width: '100%',
          maxWidth: 1100,
          background: '#0C0C0C',
          border: '2px solid #D7E2EA',
          borderRadius: br,
          padding: 'clamp(12px,2.5vw,32px)',
          transformOrigin: 'top center',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 'clamp(12px,2vw,24px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(12px,2vw,28px)',
            }}
          >
            <span
              style={{
                fontWeight: 900,
                fontSize: 'clamp(2.5rem,8vw,120px)',
                color: '#D7E2EA',
                lineHeight: 0.85,
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              {project.num}
            </span>
            <div>
              <p
                style={{
                  color: '#D7E2EA',
                  opacity: 0.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontSize: 'clamp(0.7rem,1vw,0.9rem)',
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {project.category}
              </p>
              <p
                style={{
                  color: '#D7E2EA',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: 'clamp(1rem,2.5vw,2rem)',
                  letterSpacing: '-0.01em',
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {project.name}
              </p>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image grid */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(8px,1.5vw,16px)',
          }}
        >
          {/* Left col 40% */}
          <div
            style={{
              flex: '0 0 40%',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(8px,1.5vw,16px)',
            }}
          >
            <img
              src={project.col1a}
              alt=""
              style={{
                width: '100%',
                height: 'clamp(130px,16vw,230px)',
                objectFit: 'cover',
                borderRadius: br,
              }}
              loading="lazy"
            />
            <img
              src={project.col1b}
              alt=""
              style={{
                width: '100%',
                height: 'clamp(160px,22vw,340px)',
                objectFit: 'cover',
                borderRadius: br,
              }}
              loading="lazy"
            />
          </div>
          {/* Right col 60% */}
          <div style={{ flex: '1' }}>
            <img
              src={project.col2}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: br,
              }}
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        background: '#0C0C0C',
        borderRadius: '60px 60px 0 0',
        marginTop: '-56px',
        zIndex: 10,
        position: 'relative',
        padding:
          'clamp(48px,6vw,96px) clamp(16px,4vw,40px) clamp(120px,16vw,220px)',
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 'clamp(3rem,12vw,160px)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(40px,5vw,80px)',
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Project
        </h2>
      </FadeIn>

      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
