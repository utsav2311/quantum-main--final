"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedCounter({ value, duration = 2, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse numbers vs suffixes (e.g., "5-10" or "99.4%" or "100+")
    const numericMatch = value.match(/^([\d.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[1]);
    const suffix = value.slice(numericMatch[1].length);

    const controls = animate(0, targetNumber, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const formatted = Number.isInteger(targetNumber)
          ? Math.round(latest).toString()
          : latest.toFixed(1);
        setDisplayValue(formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
