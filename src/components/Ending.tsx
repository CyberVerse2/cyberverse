import { motion } from 'framer-motion';

export default function Ending() {
  return (
    <section
      className="px-6 md:px-16"
      style={{
        background: '#060608',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '12rem',
        paddingBottom: '12rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top divider */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
        }}
      />

      {/* Pulsing lime orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '110rem',
          height: '70rem',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(48, 159, 233, 0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          maxWidth: '150rem',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 6.5vw, 11rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            color: '#F0EDE6',
            marginBottom: '5rem',
          }}
        >
          WHERE CREATIVITY,<br />
          CODE & THE<br />
          <span style={{ color: '#309fe9' }}>IMPOSSIBLE</span><br />
          CONVERGE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 'clamp(1.3rem, 1.9vw, 2rem)',
            color: 'rgba(240, 237, 230, 0.4)',
            lineHeight: 1.75,
            maxWidth: '72rem',
            margin: '0 auto 6rem',
          }}
        >
          Every product is a window into the future, designed to make people say "Wait, that's possible?"
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href="https://x.com/cyberverselabs"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 1.8vw, 1.8rem)',
            letterSpacing: '-0.01em',
            padding: '1.8rem 4rem',
            background: '#309fe9',
            color: '#060608',
            borderRadius: '10rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          FOLLOW ON X →
        </motion.a>
      </div>
    </section>
  );
}
