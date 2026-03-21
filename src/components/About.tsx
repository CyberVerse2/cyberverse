import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({
  target,
  suffix,
  label,
  isInfinity,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  isInfinity?: boolean;
  delay: number;
}) {
  const { count, ref } = useCountUp(target, 1400, delay);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <p
        style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(3.5rem, 5vw, 5.5rem)',
          color: '#309fe9',
          lineHeight: 1,
          marginBottom: '0.8rem',
        }}
      >
        {isInfinity ? '∞' : `${count}${suffix}`}
      </p>
      <p
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '1.2rem',
          color: 'rgba(240, 237, 230, 0.35)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16"
      style={{
        background: '#060608',
        paddingBottom: '10rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top divider */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '8rem' }} />

      <div
        style={{
          maxWidth: '140rem',
          margin: '0 auto',
          gridTemplateColumns: '1fr auto',
          gap: '6rem',
          alignItems: 'center',
        }}
        className="flex flex-col lg:grid"
      >
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '1.2rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#309fe9',
              marginBottom: '3rem',
            }}
          >
            // about us
          </p>

          <h2
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 5.5vw, 8rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#F0EDE6',
              marginBottom: '3.5rem',
            }}
          >
            WE EXPERIMENT.<br />
            WE SHIP.<br />
            <span style={{ color: '#309fe9' }}>WE BUILD BETTER.</span>
          </h2>

          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 'clamp(1.3rem, 1.8vw, 1.8rem)',
              color: 'rgba(240, 237, 230, 0.45)',
              lineHeight: 1.8,
              maxWidth: '65rem',
              marginBottom: '5rem',
            }}
          >
            At Cyberverse Labs, we break things and rebuild them better. Our playground is AI,
            crypto, and apps — but really, it's the edge of what's possible.
          </p>

          <a
            href="https://x.com/cyberverselabs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
              letterSpacing: '-0.01em',
              padding: '1.6rem 4rem',
              border: '1px solid rgba(48, 159, 233, 0.5)',
              color: '#309fe9',
              borderRadius: '10rem',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#309fe9';
              e.currentTarget.style.color = '#060608';
              e.currentTarget.style.borderColor = '#309fe9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#309fe9';
              e.currentTarget.style.borderColor = 'rgba(48, 159, 233, 0.5)';
            }}
          >
            FOLLOW ON X →
          </a>
        </motion.div>

        {/* Right: stat card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '3.5rem',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '2rem',
            background: 'rgba(255,255,255,0.02)',
            width: '100%',
          }}
        >
          {[
            { target: 3, suffix: '+', label: 'Products Shipped', delay: 0 },
            { target: 2, suffix: '+', label: 'Experiments', delay: 150 },
            { target: 0, suffix: '', label: 'Possibilities', isInfinity: true, delay: 300 },
          ].map((stat, i, arr) => (
            <div
              key={i}
              style={{
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                padding: '2.5rem 0',
              }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
