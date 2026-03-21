import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Product } from '../utils/product';

export default function ProductCard({
  name,
  tagline,
  description,
  logo,
  banner,
  url,
  twitter,
}: Product) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [4, -4]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-4, 4]), { stiffness: 400, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width * 2 - 1);
    mouseY.set((e.clientY - rect.top) / rect.height * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '6rem 0',
      }}
    >
      {/* Card header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Logo + name + tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <motion.img
            whileHover={{ scale: 1.08, rotate: 5 }}
            src={logo}
            alt={`${name} logo`}
            style={{
              width: '6.5rem',
              height: '6.5rem',
              borderRadius: '1.4rem',
              objectFit: 'contain',
              border: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0,
            }}
          />
          <div>
            <h3
              style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 6.5rem)',
                letterSpacing: '-0.03em',
                color: '#F0EDE6',
                lineHeight: 1,
              }}
            >
              {name}
            </h3>
            <p
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 'clamp(1.2rem, 1.4vw, 1.55rem)',
                color: 'rgba(240, 237, 230, 0.38)',
                marginTop: '0.6rem',
                letterSpacing: '0.01em',
              }}
            >
              {tagline}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '4.8rem',
              height: '4.8rem',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(240, 237, 230, 0.55)',
              borderRadius: '50%',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(48, 159, 233, 0.4)';
              (e.currentTarget as HTMLElement).style.color = '#309fe9';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.color = 'rgba(240, 237, 230, 0.55)';
            }}
          >
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.97 1H12.93L8.69 5.88L13.68 13H9.8L6.77 9.01L3.3 13H1.33L5.86 7.77L1.07 1H5.05L7.79 4.63L10.97 1ZM10.29 11.85H11.37L4.52 2.1H3.36L10.29 11.85Z" fill="currentColor"/>
            </svg>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.1rem, 1.4vw, 1.5rem)',
              letterSpacing: '-0.01em',
              padding: '1.4rem 3.2rem',
              background: '#309fe9',
              color: '#060608',
              borderRadius: '10rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              whiteSpace: 'nowrap',
            }}
          >
            View Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: 'clamp(1.3rem, 1.7vw, 1.8rem)',
          color: 'rgba(240, 237, 230, 0.38)',
          lineHeight: 1.75,
          maxWidth: '80rem',
          marginBottom: '4.5rem',
        }}
      >
        {description}
      </p>

      {/* Banner with 3D tilt */}
      <div style={{ perspective: '1200px' }}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            overflow: 'hidden',
            borderRadius: '2rem',
            border: '1px solid rgba(255,255,255,0.06)',
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={banner}
            alt={`${name} banner`}
            style={{
              width: '100%',
              display: 'block',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
