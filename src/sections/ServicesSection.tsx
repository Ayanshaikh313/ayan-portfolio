import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from '../components/FadeIn'

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const smooth = { stiffness: 45, damping: 20, mass: 0.35 }
  const topX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-72, 72]),
    smooth,
  )
  const middleX = useSpring(
    useTransform(scrollYProgress, [0, 1], [126, -126]),
    smooth,
  )
  const lowerX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-138, 138]),
    smooth,
  )
  const bottomX = useSpring(
    useTransform(scrollYProgress, [0, 1], [104, -104]),
    smooth,
  )

  const textStyle = {
    color: '#0C0C0C',
    fontFamily: "'Kanit', sans-serif",
    fontSize: 'clamp(1.7rem,5.35vw,5.45rem)',
    fontWeight: 400,
    lineHeight: 0.96,
    letterSpacing: 0,
    whiteSpace: 'nowrap',
  } as const

  const separatorStyle = {
    display: 'inline-block',
    width: 'clamp(34px,4.8vw,86px)',
    height: 3,
    background: '#C89D43',
    flex: '0 0 auto',
  } as const

  return (
    <section
      ref={sectionRef}
      id="price"
      style={{
        background: '#FFFFFF',
        borderRadius: '60px 60px 0 0',
        padding:
          'clamp(64px,8vw,118px) 0 clamp(76px,9vw,140px)',
        overflow: 'hidden',
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          style={{
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 'clamp(2.8rem,10vw,120px)',
            color: '#0C0C0C',
            lineHeight: 1,
            letterSpacing: 0,
            marginBottom: 'clamp(40px,6vw,92px)',
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Services
        </h2>
      </FadeIn>

      <div
        style={{
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(18px,2.8vw,42px)',
        }}
      >
        <motion.div
          style={{
            x: topX,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 clamp(18px,4vw,54px)',
          }}
        >
          <motion.span
            style={textStyle}
            whileInView={{ opacity: [0, 1], y: [28, 0] }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Architecture
          </motion.span>
        </motion.div>

        <motion.div
          style={{
            x: middleX,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(16px,2.8vw,36px)',
            padding: '0 clamp(18px,4vw,54px)',
          }}
        >
          <span style={textStyle}>Development</span>
          <span style={separatorStyle} />
          <span style={textStyle}>Deployment</span>
        </motion.div>

        <motion.div
          style={{
            x: lowerX,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(16px,2.8vw,36px)',
            padding: '0 clamp(18px,4vw,54px)',
          }}
        >
          <span style={textStyle}>APIs</span>
          <span
            style={{
              ...separatorStyle,
              width: 'clamp(30px,4.2vw,76px)',
            }}
          />
          <span style={{ ...textStyle, fontStyle: 'italic' }}>Frontends</span>
          <span
            style={{
              ...separatorStyle,
              width: 'clamp(30px,4.2vw,76px)',
            }}
          />
          <span style={textStyle}>Scalability</span>
        </motion.div>

        <motion.div
          style={{
            x: bottomX,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 clamp(18px,4vw,54px)',
          }}
        >
          <span style={textStyle}>Databases</span>
        </motion.div>
      </div>
    </section>
  )
}
