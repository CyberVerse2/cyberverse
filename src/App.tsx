import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import unbrokenLogo from "./assets/unbroken/logo.png";
import wafflesLogo from "./assets/waffles/logo.svg";
import proxiLogo from "./assets/proxi/logo.png";
import imitationgameLogo from "./assets/imitationgame/logo.png";
import whotLogo from "./assets/whot/logo.ico";
import asterionLogo from "./assets/asterion/logo.png";
import chickenLogo from "./assets/chicken/logo.png";
import cassieLogo from "./assets/cassie/logo.png";
import Article from "./Article";
import { articles } from "./articles";
import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Unbroken",
    description:
      "a free, open-source macOS habit tracker that lives in your menu bar — the flame stays lit while you show up.",
    url: "https://github.com/CyberVerse2/unbroken",
    year: "2026",
    logo: unbrokenLogo,
    roundLogo: true,
    category: "app",
  },
  {
    name: "Chicken",
    description:
      "a local-first macOS reading library for PDFs, EPUBs, and personal documents.",
    url: "https://github.com/CyberVerse2/chicken",
    year: "2026",
    logo: chickenLogo,
    roundLogo: true,
    category: "app",
  },
  {
    name: "Asterion",
    description:
      "an immersive native reading app for discovering novels and continuing deep-focus sessions.",
    url: "https://github.com/CyberVerse2/asterion-ios",
    year: "2026",
    logo: asterionLogo,
    roundLogo: true,
    category: "app",
  },
  {
    name: "Cassie",
    description:
      "a trading agent that lets you trade any alpha on your timeline, on any chain.",
    url: "https://cassie.trade",
    year: "2026",
    logo: cassieLogo,
    roundLogo: true,
    category: "app",
  },
  {
    name: "Whot!",
    description:
      "Nigeria's card game except you play against agentic Tinubu.",
    url: "https://whot.cyberverse.cloud",
    year: "2026",
    logo: whotLogo,
    category: "experiment",
  },
  {
    name: "Proxi",
    description:
      "clone yourself as an ai agent that talks to people on your behalf.",
    url: "https://proxi.fun",
    year: "2026",
    logo: proxiLogo,
    roundLogo: true,
    category: "experiment",
  },
  {
    name: "Imitation Game",
    description:
      "a social deduction game where you figure out who's human and who's AI.",
    url: "https://imitationgame.fun",
    year: "2026",
    logo: imitationgameLogo,
    roundLogo: true,
    category: "experiment",
  },
  {
    name: "Waffles",
    description: "guess movie scenes in 10 seconds and win usdc.",
    url: "https://farcaster.xyz/miniapps/sbpPNle-R2-V/waffles",
    year: "2025",
    logo: wafflesLogo,
    category: "app",
  },
];

const apps = projects.filter((project) => project.category === "app");
const experiments = projects.filter(
  (project) => project.category === "experiment"
);

function ProjectList({ projects }: { projects: typeof apps }) {
  return (
    <div
      className="project-list"
      style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}
    >
      {projects.map((project, index) => (
        <Reveal key={project.name} delay={(index % 6) * 0.05}>
          <div
            className="project-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "20rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
              >
                <div
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "0.4rem",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: project.roundLogo ? "scale(1.3)" : undefined,
                    }}
                  />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {project.name}
                </a>
              </div>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "var(--text-muted)",
                  marginTop: "0.3rem",
                  lineHeight: 1.5,
                }}
              >
                {project.description}
              </p>
            </div>
            <span
              style={{
                fontSize: "1.3rem",
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
              }}
            >
              {project.year}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ArticleRoute() {
  const { slug = "" } = useParams();
  return <Article key={slug} slug={slug} />;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing/:slug" element={<ArticleRoute />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <main
      style={{
        maxWidth: "68rem",
        margin: "0 auto",
        padding: "8rem 2.4rem 12rem",
      }}
    >
      <header className="fade-in" style={{ marginBottom: "4rem" }}>
        <img
          src="/sentra.svg"
          alt="Cyberverse logo"
          style={{ height: "2.4rem", width: "auto" }}
        />
      </header>

      <section
        className="fade-in"
        style={{ marginBottom: "2rem", animationDelay: "0.06s" }}
      >
        <p
          style={{
            fontSize: "1.7rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          We're a product studio building at the edge of what's possible. We
          play around with AI, crypto, and apps — but really, it's whatever
          really feels like the future.
        </p>
      </section>

      <section
        className="fade-in"
        style={{ marginBottom: "4rem", animationDelay: "0.12s" }}
      >
        <p
          style={{
            fontSize: "1.7rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          We started Cyberverse because we wanted to build things that make
          people say{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--text)",
            }}
          >
            "wait, that's possible?"
          </em>{" "}
          . We experiment relentlessly, ship fast, and rebuild what didn't work
          before, now.
        </p>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2
          className="fade-in"
          style={{
            fontSize: "1.3rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "2rem",
            animationDelay: "0.18s",
          }}
        >
          Apps
        </h2>

        <ProjectList projects={apps} />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "2rem",
            }}
          >
            Experiments
          </h2>
        </Reveal>

        <ProjectList projects={experiments} />
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "2rem",
            }}
          >
            Writing
          </h2>
        </Reveal>

        <div
          className="project-list"
          style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}
        >
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={(index % 6) * 0.05}>
              <div
                className="project-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
              <div style={{ flex: 1, minWidth: "20rem" }}>
                <Link
                  to={`/writing/${article.slug}`}
                  style={{
                    fontSize: "2rem",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {article.title}
                </Link>
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--text-muted)",
                    marginTop: "0.3rem",
                    lineHeight: 1.5,
                  }}
                >
                  {article.description}
                </p>
              </div>
              <span
                style={{
                  fontSize: "1.3rem",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {article.year}
              </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "var(--border)",
            margin: "0 0 4rem",
          }}
        />
      </Reveal>

      <Reveal>
        <section>
        <p
          style={{
            fontSize: "1.7rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          Find me on{" "}
          <a
            href="https://x.com/thecyberverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thecyberverse
          </a>{" "}
          or reach out at{" "}
          <a href="mailto:ejioforcelestine77@gmail.com">
            ejioforcelestine77@gmail.com
          </a>
          . We're also on{" "}
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
      </Reveal>
    </main>
  );
}

export default App;
