import { Link } from "react-router-dom";
import { getArticle } from "./articles";
import { TableOfContents } from "./TableOfContents";

function Article({ slug }: { slug: string }) {
  const article = getArticle(slug);

  if (!article) {
    return (
      <main
        style={{
          maxWidth: "68rem",
          margin: "0 auto",
          padding: "8rem 2.4rem 12rem",
        }}
      >
        <Link to="/" style={{ fontSize: "1.5rem" }}>
          ← Back
        </Link>
        <p
          style={{
            fontSize: "1.7rem",
            color: "var(--text-secondary)",
            marginTop: "3rem",
          }}
        >
          That article couldn't be found.
        </p>
      </main>
    );
  }

  const { title, date, readingTime, Body } = article;

  return (
    <main
      style={{
        maxWidth: "62rem",
        margin: "0 auto",
        padding: "6rem 2.4rem 12rem",
      }}
    >
      <TableOfContents />

      <header className="fade-in" style={{ marginBottom: "3rem" }}>
        <Link
          to="/"
          style={{
            fontSize: "1.4rem",
            color: "var(--text-muted)",
            textDecorationColor: "var(--border)",
          }}
        >
          ← Cyberverse
        </Link>
      </header>

      <article>
        <div
          className="fade-in"
          style={{ marginBottom: "3.5rem", animationDelay: "0.05s" }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.4rem",
            }}
          >
            Writing
          </p>
          <h1
            style={{
              fontSize: "clamp(3.2rem, 6vw, 4.6rem)",
              lineHeight: 1.12,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "1.6rem",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              color: "var(--text-muted)",
              display: "flex",
              gap: "1.2rem",
              alignItems: "center",
            }}
          >
            <span>{date}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>{readingTime}</span>
          </p>
        </div>

        <div
          className="fade-in"
          style={{
            width: "100%",
            height: "1px",
            background: "var(--border)",
            margin: "0 0 3.5rem",
            animationDelay: "0.1s",
          }}
        />

        <Body />
      </article>

      <div
        className="fade-in"
        style={{
          width: "100%",
          height: "1px",
          background: "var(--border)",
          margin: "5rem 0 3rem",
          animationDelay: "0.2s",
        }}
      />

      <footer className="fade-in" style={{ animationDelay: "0.25s" }}>
        <p style={{ fontSize: "1.6rem", color: "var(--text-secondary)" }}>
          Find me on{" "}
          <a
            href="https://x.com/thecyberverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thecyberverse
          </a>{" "}
          or back to{" "}
          <Link to="/">Cyberverse</Link>.
        </p>
      </footer>
    </main>
  );
}

export default Article;
