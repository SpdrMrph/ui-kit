"use client";
import { useRipple } from "@/shared/lib/useRipple";
import type { IButton } from "./button.types";
import { button } from "./button.variants";

export const Button = ({
  children,
  className,
  type = "button",
  variant = "default",
  size,
  disabled,
  ...rest
}: IButton) => {
  const { start, onAnimationEnd, RippleEffect, ripples } = useRipple();
  const styles = button({ variant, size, disabled, className });
  const rippleCondition = variant === "default" || variant === "secondary";

  return (
    <button
      disabled={disabled}
      className={styles}
      type={type}
      onMouseDown={rippleCondition ? start : undefined}
      {...rest}
    >
      {rippleCondition && (
        <RippleEffect ripples={ripples} onAnimationEnd={onAnimationEnd} />
      )}
      {children}
    </button>
  );
};
