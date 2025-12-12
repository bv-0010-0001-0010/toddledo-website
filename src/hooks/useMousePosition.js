import { useEffect, useRef, useState } from "react";

const OFFSCREEN = { x: -100, y: -100 };

export default function useMousePosition() {
  const [position, setPosition] = useState(OFFSCREEN);
  const raf = useRef(null);

  useEffect(() => {
    const update = (x, y) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => setPosition({ x, y }));
    };

    const onPointerMove = (e) => {
      // Ignore touch pointers so it doesn't "stick" on tap devices
      if (e.pointerType === "touch") return;
      update(e.clientX, e.clientY);
    };

    const onMouseMove = (e) => update(e.clientX, e.clientY);

    const onLeave = () => setPosition(OFFSCREEN);
    const onBlur = () => setPosition(OFFSCREEN);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true }); // fallback
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onBlur);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return position;
}
