import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '2.2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(6, 6, 8, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
        <img src="/cyberverse.svg" alt="Cyberverse" style={{ height: '3rem', width: 'auto' }} />
        <span style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '2rem', letterSpacing: '-0.03em', color: '#F0EDE6' }}>
          CYBERVERSE
        </span>
      </a>

      {/* Desktop nav */}
      <nav
        style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}
        className="hidden lg:flex"
      >
        {['Home', 'About', 'Products'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '1.25rem',
              color: 'rgba(240, 237, 230, 0.5)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EDE6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240, 237, 230, 0.5)')}
          >
            {item}
          </a>
        ))}

        <a
          href="https://x.com/cyberverselabs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '1.25rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
            padding: '1rem 2.6rem',
            border: '1px solid rgba(48, 159, 233, 0.5)',
            color: '#309fe9',
            borderRadius: '10rem',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s, border-color 0.2s',
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
          @cyberverselabs →
        </a>
      </nav>

      {/* Mobile CTA */}
      <a
        href="https://x.com/cyberverselabs"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden"
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '1.2rem',
          letterSpacing: '0.04em',
          padding: '0.9rem 2rem',
          border: '1px solid rgba(48, 159, 233, 0.5)',
          color: '#309fe9',
          borderRadius: '10rem',
          textDecoration: 'none',
        }}
      >
        @cyberverselabs
      </a>
    </header>
  );
}
