import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'X', icon: './x.svg', href: 'https://x.com/cyberverselabs' },
    { name: 'Mail', icon: './footer-mail.svg', href: 'mailto:ejioforcelestine77@gmail.com' },
    { name: 'Telegram', icon: './telegram.svg', href: 'https://t.me/thecyberverse' },
  ];

  const footerLinks = ['Home', 'About', 'Products'];

  return (
    <footer
      style={{
        background: '#060608',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '6rem 4rem',
      }}
    >
      <div
        style={{
          maxWidth: '140rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '3rem',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <img src="/cyberverse.svg" alt="Cyberverse" style={{ height: '3rem', width: 'auto' }} />
            <span style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 900, fontSize: '2rem', letterSpacing: '-0.03em', color: '#F0EDE6' }}>
              CYBERVERSE
            </span>
          </a>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '1.3rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(240, 237, 230, 0.38)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#309fe9')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(240, 237, 230, 0.38)')
                }
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '4.6rem',
                  height: '4.6rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(48, 159, 233, 0.45)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)')
                }
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  style={{ width: '1.8rem', height: '1.8rem' }}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '1.2rem',
              color: 'rgba(240, 237, 230, 0.22)',
              letterSpacing: '0.04em',
            }}
          >
            © 2026 Cyberverse Labs — Build what's next now.
          </p>
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '1.2rem',
              color: 'rgba(240, 237, 230, 0.22)',
              letterSpacing: '0.12em',
            }}
          >
            AI · CRYPTO · APPS
          </p>
        </div>
      </div>
    </footer>
  );
}
