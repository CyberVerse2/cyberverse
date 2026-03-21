const items = [
  'AI', 'CRYPTO', 'APPS', 'BUILD', 'SHIP', 'BREAK', 'REBUILD', 'WAFFLES', 'PREDO', 'FOF',
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      style={{
        background: '#309fe9',
        overflow: 'hidden',
        padding: '1.8rem 0',
        display: 'flex',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '3.5rem',
          animation: 'marquee-scroll 22s linear infinite',
          willChange: 'transform',
          flexShrink: 0,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontWeight: 700,
              fontSize: '1.4rem',
              letterSpacing: '0.1em',
              color: '#060608',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '3.5rem',
            }}
          >
            {item}
            <span style={{ opacity: 0.35, fontSize: '1rem' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
