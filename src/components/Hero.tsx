import { motion } from 'framer-motion';
import { useScrambleText } from '../hooks/useScrambleText';

export default function Hero() {
  const line1 = useScrambleText('BUILDING', 0);
  const line2 = useScrambleText('AT THE EDGE', 300);
  const line3 = useScrambleText("OF WHAT'S POSSIBLE.", 600);

  return (
    <section
      className="px-6 md:px-16"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#060608',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '14rem',
        paddingBottom: '10rem',
      }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Pulsing blue orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90rem',
          height: '80rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(48, 159, 233, 0.07) 0%, rgba(48, 159, 233, 0.02) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Headline */}
      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          lineHeight: 1,
          width: '100%',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 9vw, 13.5rem)',
            letterSpacing: '-0.03em',
            color: '#F0EDE6',
            lineHeight: 0.95,
          }}
        >
          {line1}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 9vw, 13.5rem)',
            letterSpacing: '-0.03em',
            color: '#309fe9',
            lineHeight: 0.95,
          }}
        >
          {line2}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 9vw, 13.5rem)',
            letterSpacing: '-0.03em',
            color: '#F0EDE6',
            lineHeight: 0.95,
          }}
        >
          {line3}
        </motion.div>
      </div>

      {/* Subtext + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        style={{
          marginTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
            color: 'rgba(240, 237, 230, 0.45)',
            textAlign: 'center',
            letterSpacing: '0.01em',
            maxWidth: '60rem',
            lineHeight: 1.75,
          }}
        >
          A product studio creating apps that push the limits of AI, crypto, and the internet itself.
        </p>

        <a
          href="https://x.com/cyberverselabs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 1.8vw, 1.7rem)',
            letterSpacing: '-0.01em',
            padding: '1.6rem 4rem',
            background: '#309fe9',
            color: '#060608',
            borderRadius: '10rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s, transform 0.2s',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.88';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          FOLLOW ON X →
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ width: '1px', height: '5rem', background: 'linear-gradient(to bottom, transparent, rgba(48, 159, 233, 0.5))' }} />
      </motion.div>
    </section>
  );
}
