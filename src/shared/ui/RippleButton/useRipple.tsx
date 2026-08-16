import type { MouseEvent } from "react";
import { memo, useCallback, useState } from "react";

type TRipple = {
  x: number;
  y: number;
  id: number;
  diameter: number;
};

const RippleEffect = memo(
  ({
    ripples,
    onAnimationEnd,
  }: {
    ripples: TRipple[];
    onAnimationEnd: (id: number) => void;
  }) => (
    <>
      {ripples.map(({ diameter, id, x, y }) => (
        <span
          key={id}
          style={{
            width: diameter,
            height: diameter,
            left: x,
            top: y,
            transform: "scale(0)",
            opacity: 0.5,
          }}
          onAnimationEnd={() => onAnimationEnd(id)}
          className="absolute rounded-full bg-white/75 animate-ripple pointer-events-none"
        />
      ))}
    </>
  ),
);

export const useRipple = () => {
  const [ripples, setRipples] = useState<TRipple[]>([]);

  const start = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - diameter / 2;
    const y = e.clientY - rect.top - diameter / 2;

    const newRipple: TRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
      diameter,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  const onAnimationEnd = useCallback((id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  }, []);

  return { start, ripples, onAnimationEnd, RippleEffect };
};
