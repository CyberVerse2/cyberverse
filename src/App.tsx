import './App.css';
import wafflesLogo from './assets/waffles/logo.svg';
import wafflesBanner from './assets/waffles/banner.png';
import predoLogo from './assets/predo/logo.svg';
import predoBanner from './assets/predo/banner.png';
import fofLogo from './assets/fof/logo.jpg';
import fofBanner from './assets/fof/banner.jpg';
import proxiLogo from './assets/proxi/logo.png';
import proxiBanner from './assets/proxi/banner.png';
import imitationgameLogo from './assets/imitationgame/logo.png';
import imitationgameBanner from './assets/imitationgame/banner.png';

const projects = [
  {
    name: 'Proxi',
    description: 'clone yourself as an ai agent that talks to people on your behalf.',
    url: 'proxi.fun',
    twitter: 'https://x.com/proxiagent',
    year: '2026',
    logo: proxiLogo,
    banner: proxiBanner,
    roundLogo: true,
  },
  {
    name: 'Imitation Game',
    description: 'a social deduction game where you figure out who\'s human and who\'s AI.',
    url: 'https://imitationgame.fun',
    twitter: 'https://x.com/imitationgame',
    year: '2026',
    logo: imitationgameLogo,
    banner: imitationgameBanner,
    roundLogo: true,
  },
  {
    name: 'Waffles',
    description: 'guess movie scenes in 10 seconds and win usdc.',
    url: 'https://farcaster.xyz/miniapps/sbpPNle-R2-V/waffles',
    twitter: 'https://x.com/playwaffles',
    year: '2025',
    logo: wafflesLogo,
    banner: wafflesBanner,
  },
  {
    name: 'Friends on Farcaster',
    description: 'A social experiment where users mint a group photo of their friends on Christmas Day.',
    url: 'https://fof.fun',
    twitter: 'https://x.com/fof',
    year: '2025',
    logo: fofLogo,
    banner: fofBanner,
  },
  {
    name: 'Predo',
    description: 'prediction market agent for cabal groups.',
    url: 'https://predo.fun',
    twitter: 'https://x.com/predofun',
    year: '2024',
    logo: predoLogo,
    banner: predoBanner,
  },
];

function App() {
  return (
    <main
      style={{
        maxWidth: '68rem',
        margin: '0 auto',
        padding: '8rem 2.4rem 12rem',
      }}
    >
      {/* Header */}
      <header
        className="fade-in fade-in-1"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '4rem',
          gap: '0.6rem',
        }}
      >
        <img
          src="/sentra.svg"
          alt="Cyberverse logo"
          style={{ height: '2.4rem', width: 'auto' }}
        />
      </header>

      {/* Bio */}
      <section className="fade-in fade-in-2" style={{ marginBottom: '2rem' }}>
        <p
          style={{
            fontSize: '1.7rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}
        >
          We're a product studio building at the edge of what's possible. We play around with AI, crypto, and apps — but really, it's whatever really feels
          like the future.
        </p>
      </section>

      <section className="fade-in fade-in-3" style={{ marginBottom: '4rem' }}>
        <p
          style={{
            fontSize: '1.7rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}
        >
          We started Cyberverse because we wanted to build things that make people
          say{' '}
          <em
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              color: 'var(--text)',
            }}
          >
            "wait, that's possible?"
          </em>{' '}
          . We experiment
          relentlessly, ship fast, and rebuild what didn't work before, now.
        </p>
      </section>
      {/* Projects */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          className="fade-in fade-in-4"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.3rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
          }}
        >
          Projects
        </h2>

        <div className="project-list" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`project-row fade-in fade-in-${index + 5}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: 1, minWidth: '20rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: '0.4rem',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: project.roundLogo ? 'scale(1.3)' : 'none',
                      }}
                    />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      textDecoration: 'none',
                    }}
                  >
                    {project.name}
                  </a>
                </div>
                <p
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.3rem',
                    lineHeight: 1.5,
                  }}
                >
                  {project.description}
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '1.3rem',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {project.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        className="fade-in fade-in-8"
        style={{
          width: '100%',
          height: '1px',
          background: 'var(--border)',
          margin: '0 0 4rem',
        }}
      />

      {/* Contact */}
      <section className="fade-in fade-in-9">
        <p
          style={{
            fontSize: '1.7rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}
        >
          Find me on{' '}
          <a
            href="https://x.com/thecyberverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thecyberverse
          </a>{' '}
          or reach out at{' '}
          <a href="mailto:ejioforcelestine77@gmail.com">
            ejioforcelestine77@gmail.com
          </a>
          . We're also on{' '}
          <a
            href="https://t.me/thecyberverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default App;
