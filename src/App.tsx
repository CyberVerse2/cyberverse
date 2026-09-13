import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Reveal } from "./Reveal";

const projects = [
  {
    name: "Munari",
    description:
      "your design agent that helps you bring your ideas to life.",
    url: "https://munari.app",
    isNew: true,
  },
  {
    name: "Brainrot",
    description:
      "watch one livestream of AI slop for free, or bid $BRAINROT to put your prompt on air.",
    url: "https://brainrott.tv",
  },
  {
    name: "Imitation Game",
    description:
      "a social deduction game where you figure out who's human and who's AI.",
    url: "https://imitationgame.fun",
  },
];

function ProjectList() {
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
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  textDecoration: "none",
                }}
              >
                {project.name}
              </a>
              {project.isNew && (
                <span className="new-label">
                  new
                  <svg viewBox="0 0 52 30" fill="none" aria-hidden="true">
                    <path d="M43 6C34 1 12 3 5 12C-2 22 12 28 29 26C44 24 52 15 46 8C39 0 15 1 7 10" />
                  </svg>
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: "1.6rem",
                color: "var(--text-secondary)",
                marginTop: "0.4rem",
                lineHeight: 1.5,
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

function Apps() {
  return (
    <section aria-label="Projects" style={{ marginBottom: "2.8rem" }}>
      <ProjectList />
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

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <main
      className="home"
      style={{
        maxWidth: "60rem",
        margin: "0 auto",
      }}
    >
      <header className="fade-in" style={{ marginBottom: "2.8rem" }}>
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
            fontSize: "1.8rem",
            fontWeight: 500,
            lineHeight: 1.4,
            color: "var(--text)",
          }}
        >
          wait, that's possible?
        </p>
        <p className="intro-description">
          I'm Cyberverse. I build apps and experiments.
        </p>
      </section>

      <Apps />

      <Reveal>
        <section>
        <p
          style={{
            fontSize: "1.6rem",
            lineHeight: 1.5,
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
