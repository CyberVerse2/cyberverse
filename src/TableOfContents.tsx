import { useEffect, useMemo, useState, type MouseEvent } from "react";

type Section = { id: string; label: string };

/* Reads the article's headings straight from the DOM, so the body is the
   single source of truth — no separate list to keep in sync. */
function useArticleSections() {
  const [sections, setSections] = useState<Section[]>([]);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      "[data-article-body] h2[id]"
    );
    setSections(
      Array.from(nodes).map((el) => ({
        id: el.id,
        label: el.dataset.tocLabel || el.textContent?.trim() || el.id,
      }))
    );
  }, []);
  return sections;
}

/* Tracks which heading is currently at the top of the viewport.
   Deterministic (last heading whose top has passed the offset line),
   so it handles multi-line headings and variable spacing cleanly. */
function useScrollSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let frame = 0;
    const compute = () => {
      frame = 0;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, offset]);

  return active;
}

export function TableOfContents() {
  const sections = useArticleSections();
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useScrollSpy(ids);

  // Smooth-scroll without touching location.hash (the app uses hash routing).
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (sections.length === 0) return null;

  return (
    <nav className="toc fade-in" aria-label="Article contents">
      <ul className="toc-list">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`toc-link${active === s.id ? " active" : ""}`}
              aria-current={active === s.id ? "true" : undefined}
              onClick={(e) => handleClick(e, s.id)}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
