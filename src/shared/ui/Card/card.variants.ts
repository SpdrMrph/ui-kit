import { tv, type VariantProps } from "tailwind-variants";

/**
 * Стили для Card компонента
 */
export const card = tv({
  slots: {
    root: [
      "group/card",
      "bg-card text-card-foreground text-sm",
      "flex flex-col gap-4 py-4",
      "rounded-xl border ring-1 ring-foreground/10 shadow-sm",
      "data-[size=sm]:gap-3 data-[size=sm]:py-3",
      "data-[size=sm]:has-data-[slot=card-footer]:pb-0",
      "has-data-[slot=card-footer]:pb-0",
      "has-[>img:first-child]:pt-0",
      "*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
    ],
    header: [
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-4 rounded-t-xl",
      "has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4",
      "group-data-[size=sm]/card:px-3",
      "group-data-[size=sm]/card:[.border-b]:pb-3",
      "group/card-header",
      "has-data-[slot=card-description]:grid-rows-[auto_auto]",
    ],
    title: [
      "text-base leading-snug font-medium",
      "group-data-[size=sm]/card:text-sm",
    ],
    description: "text-muted-foreground text-sm",
    action: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
    content: "px-4 group-data-[size=sm]/card:px-3",
    footer: [
      "bg-muted/50 rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3 flex items-center",
    ],
  },
  variants: {
    size: {
      default: {},
      sm: {},
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type CardVariants = VariantProps<typeof card>;
