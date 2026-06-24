import type { CSSProperties, ReactNode } from "react";
import { RevealGroup } from "./Reveal";

/* ------------------------------------------------------------------ *
 * Shared styles — single source of truth for article typography.
 * Tweak here and every article updates.
 * ------------------------------------------------------------------ */
export const para = {
  fontSize: "1.7rem",
  lineHeight: 1.85,
  color: "var(--text-secondary)",
  marginBottom: "2rem",
} as const;

export const headingStyle = {
  fontSize: "1.3rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  margin: "4.5rem 0 2rem",
  scrollMarginTop: "9rem",
} as const;

const emphasisStyle = { color: "var(--text)", fontWeight: 400 } as const;

/* Turn heading text into a stable id for the table of contents. */
export function slug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ------------------------------------------------------------------ *
 * Building blocks. Compose these in an article Body instead of
 * re-typing inline styles.
 * ------------------------------------------------------------------ */

/* Wrap an article body in this. Marks the body for the TOC scanner and
   gives every top-level block a scroll-triggered reveal. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div data-article-body>
      <RevealGroup>{children}</RevealGroup>
    </div>
  );
}

/* Paragraph. Pass `style` to override (e.g. `{ marginBottom: 0 }`). */
export function P({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <p style={{ ...para, ...style }}>{children}</p>;
}

/* Inline emphasis that lifts text to the primary ink colour. */
export function Em({ children }: { children: ReactNode }) {
  return <span style={emphasisStyle}>{children}</span>;
}

/* Section heading. `id` is auto-derived from the text if omitted, and
   the TOC reads its label from `label` (falling back to the text). */
export function H2({
  children,
  id,
  label,
}: {
  children: ReactNode;
  id?: string;
  label?: string;
}) {
  const text = typeof children === "string" ? children : "";
  const resolvedId = id ?? slug(text);
  return (
    <h2 id={resolvedId} data-toc-label={label} style={headingStyle}>
      {children}
    </h2>
  );
}

/* Centered accent callout, e.g. a formula or key takeaway. */
export function Formula({ children }: { children: ReactNode }) {
  return (
    <div
      className="formula-box"
      style={{
        fontSize: "1.9rem",
        textAlign: "center",
        color: "var(--text)",
        background: "rgba(4, 26, 59, 0.03)",
        border: "1px solid var(--border)",
        borderLeft: "3px solid var(--accent)",
        borderRadius: "0.6rem",
        padding: "2rem 2.4rem",
        margin: "0 0 3rem",
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </div>
  );
}

/* Editorial aside / callout. Use for author's notes, caveats, framing. */
export function Note({
  children,
  label = "Note",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <aside
      style={{
        display: "flex",
        gap: "1.4rem",
        background: "rgba(4, 26, 59, 0.025)",
        border: "1px solid var(--border)",
        borderRadius: "0.8rem",
        padding: "1.6rem 1.8rem",
        margin: "0 0 2.4rem",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          fontSize: "1.1rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent)",
          paddingTop: "0.35rem",
        }}
      >
        {label}
      </span>
      <p
        style={{
          margin: 0,
          fontSize: "1.5rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
        }}
      >
        {children}
      </p>
    </aside>
  );
}

/* Large pull-quote with an accent rule. */
export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote
      style={{
        margin: "3rem 0",
        padding: "0.4rem 0 0.4rem 2.4rem",
        borderLeft: "3px solid var(--accent)",
        fontSize: "2.3rem",
        lineHeight: 1.5,
        fontStyle: "italic",
        color: "var(--text)",
        fontWeight: 300,
      }}
    >
      {children}
    </blockquote>
  );
}

/* Stacked lines (each on its own row). `bold` lifts them to ink colour. */
export function Stack({
  lines,
  bold = false,
}: {
  lines: string[];
  bold?: boolean;
}) {
  return (
    <p
      style={{
        ...para,
        ...(bold ? { color: "var(--text)", fontWeight: 400 } : {}),
      }}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

/* A "First, …" style step: emphasised lead line, then explanation. */
export function Step({
  lead,
  children,
}: {
  lead: ReactNode;
  children: ReactNode;
}) {
  return (
    <p style={para}>
      <Em>{lead}</Em>
      <br />
      {children}
    </p>
  );
}

/* Numbered question/answer list with the accent circles. */
export function Questions({
  items,
}: {
  items: { q: ReactNode; a: ReactNode }[];
}) {
  return (
    <ol style={{ listStyle: "none", margin: "0 0 2rem", padding: 0 }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="q-item"
          style={{
            position: "relative",
            padding: "2rem 0 2rem 5.6rem",
            borderTop: "1px solid var(--border)",
            ...(i === items.length - 1
              ? { borderBottom: "1px solid var(--border)" }
              : {}),
          }}
        >
          <span
            className="q-num"
            style={{
              position: "absolute",
              left: 0,
              top: "2rem",
              width: "3.6rem",
              height: "3.6rem",
              lineHeight: "3.6rem",
              textAlign: "center",
              borderRadius: "50%",
              background: "var(--accent)",
              color: "var(--bg)",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            {i + 1}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "1.8rem",
              color: "var(--text)",
              marginBottom: "0.4rem",
            }}
          >
            {item.q}
          </span>
          <span
            style={{
              fontSize: "1.6rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
            }}
          >
            {item.a}
          </span>
        </li>
      ))}
    </ol>
  );
}
