import React, { useEffect, useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: fine)").matches === false) return;

    const set = () => setEnabled(mq.matches);

    set();
    mq.addEventListener?.("change", set);

    return () => mq.removeEventListener?.("change", set);
  }, []);


  if (!enabled) return null;


  return (
    <motion.div
      animate={{
        x: x - 8,
        y: y - 8,
        height: 21,
        width: 21,
        backgroundColor: "#3b7bff",
        mixBlendMode: "difference",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
    />
  );
};

export default CustomCursor;
