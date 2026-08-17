import type {
  CardActionProps,
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./card.types";
import { card } from "./card.variants";

function RootCard({ className, size = "default", ...props }: CardProps) {
  const slots = card();
  return (
    <div
      data-slot="card"
      data-size={size}
      className={slots.root({ class: className })}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  const slots = card();
  return (
    <div
      data-slot="card-header"
      className={slots.header({ class: className })}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: CardTitleProps) {
  const slots = card();
  return (
    <div
      data-slot="card-title"
      className={slots.title({ class: className })}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  const slots = card();
  return (
    <div
      data-slot="card-description"
      className={slots.description({ class: className })}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: CardActionProps) {
  const slots = card();
  return (
    <div
      data-slot="card-action"
      className={slots.action({ class: className })}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: CardContentProps) {
  const slots = card();
  return (
    <div
      data-slot="card-content"
      className={slots.content({ class: className })}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: CardFooterProps) {
  const slots = card();
  return (
    <div
      data-slot="card-footer"
      className={slots.footer({ class: className })}
      {...props}
    />
  );
}

export const Card = Object.assign(RootCard, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Header: CardHeader,
  Title: CardTitle,
  Footer: CardFooter,
});
