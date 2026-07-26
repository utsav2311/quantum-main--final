"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 18, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ text, className = "", delay = 0 }) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden whitespace-pre mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function TiltCard({ children, className = "", tiltMax = 12 }) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltMax;
    const rotateY = ((x - centerX) / centerX) * tiltMax;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)" }}
      className={`[transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}

export function FloatingElement({ children, className = "", duration = 4, distance = 6 }) {
  return (
    <motion.div
      animate={{ y: [-distance, distance, -distance] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", delayChildren = 0.04, stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
