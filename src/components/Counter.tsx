"use client";
import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

interface CounterProp {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
}

const Counter = ({from = 0, to = 1000, duration = 1, className}:CounterProp) => {
    const [count, setCount] = useState(from);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
    if (prefersReducedMotion) {
      setCount(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return controls.stop;
  }, [from, to, duration, prefersReducedMotion]);

  return <span className={className}>{count.toLocaleString().padStart(2, '0')}</span>;

}

export default Counter;