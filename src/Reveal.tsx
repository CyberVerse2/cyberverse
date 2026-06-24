import {
  Children,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* Fires once when the element scrolls into view. No dependencies — just
   IntersectionObserver, the same primitive the Honk site leans on. */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
};

/* A single block that rises + settles with an overshoot spring on entry. */
export function Reveal({ children, delay = 0, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal${inView ? " in-view" : ""}`}
      style={{ "--reveal-delay": `${delay}s`, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* Wraps each direct child in a Reveal, with a small capped cascade so
   clusters stagger in instead of popping all at once. */
export function RevealGroup({
  children,
  step = 0.05,
}: {
  children: ReactNode;
  step?: number;
}) {
  return (
    <>
      {Children.toArray(children).map((child, i) => (
        <Reveal key={i} delay={(i % 6) * step}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
