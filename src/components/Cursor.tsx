import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const ringX = useRef(0);
  const ringY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const isHovering = useRef(false);

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      dotX.current = e.clientX;
      dotY.current = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button') && !isHovering.current) {
        isHovering.current = true;
        if (ringRef.current) {
          ringRef.current.style.width = '52px';
          ringRef.current.style.height = '52px';
          ringRef.current.style.marginLeft = '-26px';
          ringRef.current.style.marginTop = '-26px';
          ringRef.current.style.borderColor = 'rgba(48, 159, 233, 0.9)';
          ringRef.current.style.backgroundColor = 'rgba(48, 159, 233, 0.06)';
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button') && isHovering.current) {
        isHovering.current = false;
        if (ringRef.current) {
          ringRef.current.style.width = '34px';
          ringRef.current.style.height = '34px';
          ringRef.current.style.marginLeft = '-17px';
          ringRef.current.style.marginTop = '-17px';
          ringRef.current.style.borderColor = 'rgba(48, 159, 233, 0.5)';
          ringRef.current.style.backgroundColor = 'transparent';
        }
      }
    };

    const animate = () => {
      ringX.current += (dotX.current - ringX.current) * 0.1;
      ringY.current += (dotY.current - ringY.current) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX.current}px`;
        dotRef.current.style.top = `${dotY.current}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: '#309fe9',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          marginLeft: '-3px',
          marginTop: '-3px',
          top: 0,
          left: 0,
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '34px',
          height: '34px',
          border: '1.5px solid rgba(48, 159, 233, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          marginLeft: '-17px',
          marginTop: '-17px',
          top: 0,
          left: 0,
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
        }}
      />
    </>
  );
}
