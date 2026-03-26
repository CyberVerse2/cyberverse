import wafflesLogo from './assets/waffles/logo.svg';
import predoLogo from './assets/predo/logo.svg';
import fofLogo from './assets/fof/logo.jpg';
import proxiLogo from './assets/proxi/logo.png';
import imitationgameLogo from './assets/imitationgame/logo.png';

const projects = [
  {
    name: 'Proxi',
    description: 'clone yourself as an ai agent that talks to people on your behalf.',
    url: 'https://proxi.fun',
    year: '2026',
    logo: proxiLogo,
    roundLogo: true,
  },
  {
    name: 'Imitation Game',
    description: 'a social deduction game where you figure out who\'s human and who\'s AI.',
    url: 'https://imitationgame.fun',
    year: '2026',
    logo: imitationgameLogo,
    roundLogo: true,
  },
  {
    name: 'Waffles',
    description: 'guess movie scenes in 10 seconds and win usdc.',
    url: 'https://farcaster.xyz/miniapps/sbpPNle-R2-V/waffles',
    year: '2025',
    logo: wafflesLogo,
  },
  {
    name: 'Friends on Farcaster',
    description: 'A social experiment where users mint a group photo of their friends on Christmas Day.',
    url: 'https://fof.fun',
    year: '2025',
    logo: fofLogo,
  },
  {
    name: 'Predo',
    description: 'prediction market agent for cabal groups.',
    url: 'https://predo.fun',
    year: '2024',
    logo: predoLogo,
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
      <header
        className="fade-in"
        style={{ marginBottom: '4rem' }}
      >
        <img
          src="/sentra.svg"
          alt="Cyberverse logo"
          style={{ height: '2.4rem', width: 'auto' }}
        />
      </header>

      <section className="fade-in" style={{ marginBottom: '2rem', animationDelay: '0.1s' }}>
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

      <section className="fade-in" style={{ marginBottom: '4rem', animationDelay: '0.2s' }}>
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

      <section style={{ marginBottom: '4rem' }}>
        <h2
          className="fade-in"
          style={{
            fontSize: '1.3rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            animationDelay: '0.3s',
          }}
        >
          Projects
        </h2>

        <div className="project-list" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-row fade-in"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '2rem',
                flexWrap: 'wrap',
                animationDelay: `${(index + 4) * 0.1}s`,
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
                        transform: project.roundLogo ? 'scale(1.3)' : undefined,
                      }}
                    />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
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

      <div
        className="fade-in"
        style={{
          width: '100%',
          height: '1px',
          background: 'var(--border)',
          margin: '0 0 4rem',
          animationDelay: '0.9s',
        }}
      />

      <section className="fade-in" style={{ animationDelay: '1s' }}>
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
