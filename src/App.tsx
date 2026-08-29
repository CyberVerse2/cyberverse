import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Article from "./Article";
import { articles } from "./articles";
import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Munari",
    description:
      "your design agent that helps you bring your ideas to life.",
    url: "https://munari.app",
    category: "app",
    isNew: true,
  },
  {
    name: "Asterion",
    description:
      "a superapp for novels, manhwa, manga, movies, and anime.",
    url: "https://github.com/CyberVerse2/asterion-ios",
    category: "app",
  },
  {
    name: "Cassie",
    description:
      "a trading agent that lets you trade any alpha on your timeline, on any chain.",
    url: "https://cassie.trade",
    category: "app",
  },
  {
    name: "Waffles",
    description: "guess movie scenes in 10 seconds and win usdc.",
    url: "https://farcaster.xyz/miniapps/sbpPNle-R2-V/waffles",
    category: "app",
  },
  {
    name: "Chicken",
    description: "an offline book reading app for all formats.",
    url: "https://github.com/CyberVerse2/chicken",
    category: "app",
  },
  {
    name: "Whot!",
    description:
      "Nigeria's card game except you play against agentic Tinubu.",
    url: "https://whot.cyberverse.cloud",
    category: "experiment",
  },
  {
    name: "Proxi",
    description:
      "clone yourself as an ai agent that talks to people on your behalf.",
    url: "https://proxi.fun",
    category: "experiment",
  },
  {
    name: "Imitation Game",
    description:
      "a social deduction game where you figure out who's human and who's AI.",
    url: "https://imitationgame.fun",
    category: "experiment",
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
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      {projects.map((project, index) => (
        <Reveal key={project.name} delay={(index % 6) * 0.05}>
          <div className="project-row">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.8rem",
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {project.name}
              </a>
              {project.isNew && <span className="new-label">new</span>}
            </div>
            <p
              style={{
                fontSize: "1.5rem",
                color: "var(--text-secondary)",
                marginTop: "0.25rem",
                lineHeight: 1.45,
              }}
            >
              {project.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

const projectTabs = [
  { id: "apps", label: "Apps", projects: apps },
  { id: "experiments", label: "Experiments", projects: experiments },
] as const;

function ProjectTabs() {
  const [active, setActive] = useState<(typeof projectTabs)[number]["id"]>(
    "apps"
  );
  const activeTab =
    projectTabs.find((tab) => tab.id === active) ?? projectTabs[0];

  return (
    <section style={{ marginBottom: "3.2rem" }}>
      <div
        className="fade-in"
        style={{
          display: "flex",
          gap: "2rem",
          marginBottom: "1.4rem",
          animationDelay: "0.18s",
        }}
      >
        {projectTabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "1.3rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isActive ? "var(--text)" : "var(--text-muted)",
                transition: "color 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <ProjectList key={activeTab.id} projects={activeTab.projects} />
    </section>
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
        padding: "5.6rem 2.4rem 8rem",
      }}
    >
      <header className="fade-in" style={{ marginBottom: "2.4rem" }}>
        <img
          src="/sentra.svg"
          alt="Cyberverse logo"
          style={{ height: "2.4rem", width: "auto" }}
        />
      </header>

      <section
        className="fade-in"
        style={{ marginBottom: "2.8rem", animationDelay: "0.06s" }}
      >
        <p
          style={{
            fontSize: "1.7rem",
            lineHeight: 1.55,
            color: "var(--text)",
          }}
        >
          wait, that's possible?
        </p>
      </section>

      <ProjectTabs />

      <section style={{ marginBottom: "3.2rem" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "1.4rem",
            }}
          >
            Writing
          </h2>
        </Reveal>

        <div
          className="project-list"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
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
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  {article.title}
                </Link>
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--text-secondary)",
                    marginTop: "0.25rem",
                    lineHeight: 1.45,
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
            margin: "0 0 2.8rem",
          }}
        />
      </Reveal>

      <Reveal>
        <section>
        <p
          style={{
            fontSize: "1.7rem",
            lineHeight: 1.55,
            color: "var(--text)",
          }}
        >
          Find me on{" "}
          <a
            href="https://x.com/thecyberverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thecyberverse
          </a>
          .
        </p>
        </section>
      </Reveal>
    </main>
  );
}

export default App;
