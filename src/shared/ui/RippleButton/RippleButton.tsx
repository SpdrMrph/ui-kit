import { useRipple } from "@/shared/ui/RippleButton/useRipple";
import { Button } from "../Button";
import type { IButton } from "../Button/button.types";

export const RippleButton = (props: IButton) => {
  const { variant, ...rest } = props;
  const { RippleEffect, onAnimationEnd, ripples, start } = useRipple();
  const rippleCondition = variant === "default" || variant === "secondary";

  return (
    <Button
      onMouseDown={rippleCondition ? start : undefined}
      variant={variant}
      {...rest}
    >
      {rippleCondition && (
        <RippleEffect ripples={ripples} onAnimationEnd={onAnimationEnd} />
      )}
    </Button>
  );
};
