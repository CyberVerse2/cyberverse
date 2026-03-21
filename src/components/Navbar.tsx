import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = ['Home', 'About', 'Products'];

  return (
    <>
      <header
        className="px-6 md:px-16"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
          background: scrolled || menuOpen ? 'rgba(6, 6, 8, 0.95)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
          borderBottom: scrolled && !menuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
        >
          <img src="/cyberverse.svg" alt="Cyberverse" style={{ height: '2.8rem', width: 'auto' }} />
          <span style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-0.03em', color: '#F0EDE6' }}>
            CYBERVERSE
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: '4rem', alignItems: 'center' }}>
          {navLinks.map((item) => (
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

        {/* Hamburger button */}
        <button
          className="flex flex-col lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            padding: '0.8rem',
            gap: '0.6rem',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '2.4rem',
              height: '2px',
              background: '#F0EDE6',
              borderRadius: '2px',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '2.4rem',
              height: '2px',
              background: '#F0EDE6',
              borderRadius: '2px',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '2.4rem',
              height: '2px',
              background: '#F0EDE6',
              borderRadius: '2px',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="lg:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: '#060608',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4rem',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-1rem)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 10vw, 6rem)',
              letterSpacing: '-0.03em',
              color: '#F0EDE6',
              textDecoration: 'none',
              transition: `opacity 0.35s ease ${i * 0.07}s, transform 0.35s ease ${i * 0.07}s`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(1.5rem)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#309fe9')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#F0EDE6')}
          >
            {item}
          </a>
        ))}

        <a
          href="https://x.com/cyberverselabs"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '1.4rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '1.4rem 3.5rem',
            border: '1px solid rgba(48, 159, 233, 0.5)',
            color: '#309fe9',
            borderRadius: '10rem',
            textDecoration: 'none',
            marginTop: '2rem',
            transition: `opacity 0.35s ease ${navLinks.length * 0.07}s, transform 0.35s ease ${navLinks.length * 0.07}s`,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(1.5rem)',
          }}
        >
          @cyberverselabs →
        </a>
      </div>
    </>
  );
}
