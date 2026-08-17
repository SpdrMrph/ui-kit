import type { CardVariants } from "./card.variants";

export interface CardProps extends React.ComponentProps<"div">, CardVariants {}
export interface CardHeaderProps extends React.ComponentProps<"div"> {}
export interface CardTitleProps extends React.ComponentProps<"div"> {}
export interface CardDescriptionProps extends React.ComponentProps<"div"> {}
export interface CardActionProps extends React.ComponentProps<"div"> {}
export interface CardContentProps extends React.ComponentProps<"div"> {}
export interface CardFooterProps extends React.ComponentProps<"div"> {}
