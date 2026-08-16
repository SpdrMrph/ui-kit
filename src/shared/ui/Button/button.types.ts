import type { ComponentProps, PropsWithChildren } from "react";
import type { ButtonVariants } from "./button.variants";

type ButtonBase = PropsWithChildren<ComponentProps<"button">>;

export interface IButton extends ButtonBase, ButtonVariants {}
