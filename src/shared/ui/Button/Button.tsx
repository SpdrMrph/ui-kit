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
  const styles = button({ variant, size, disabled, className });

  return (
    <button disabled={disabled} className={styles} type={type} {...rest}>
      {children}
    </button>
  );
};
