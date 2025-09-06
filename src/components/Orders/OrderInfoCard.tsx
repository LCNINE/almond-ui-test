/* OrderInfoCard.tsx ------------------------------------------------- */
import React from "react";
import {
  RoundedBaseCard,
  type RoundedBaseCardProps,
} from "../Base/RoundedBaseCard";
/* ---------------- Root & Divider ---------------------------------- */
export const OrderInfoCardRoot: React.FC<RoundedBaseCardProps> = (props) => (
  <RoundedBaseCard {...props} />
);

export const OrderInfoCardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <h3
    className={["mb-[9px] text-sm leading-snug font-bold", className]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </h3>
);

export const OrderInfoCardDivider: React.FC = () => (
  <hr className="my-4 border-gray-200" />
);

/* ---------------- Row Components ---------------------------------- */
/* ───────── RowItem (새 파츠) ───────────────────────────────────── */
export interface RowItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  bold?: boolean;
  align?: "left" | "right";
}

export const OrderInfoCardRowItem: React.FC<RowItemProps> = ({
  bold,
  align = "left",
  className,
  children,
  ...rest
}) => (
  <span
    className={[
      "text-sm",
      bold ? "font-medium" : "",
      align === "right" ? "text-right" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...rest}
  >
    {children}
  </span>
);
OrderInfoCardRowItem.displayName = "OrderInfoCard.RowItem";

/* ───────── Row (children 자유) ─────────────────────────────────── */
export const OrderInfoCardRow: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "between" | "gap";
    gap?: number;
  }
> = ({ children, className, variant = "between", gap = 52, ...rest }) => {
  const count = React.Children.toArray(children).length;
  const isGap = variant === "gap" && count === 2;

  return (
    <div
      className={[
        "mb-[9px] flex",
        isGap ? "" : count >= 2 ? "justify-between" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={isGap ? { gap: `${gap}px` } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};
OrderInfoCardRow.displayName = "OrderInfoCard.Row";
/* ---------------- Empty (공통) ------------------------------------ */
export const OrderInfoCardEmpty: React.FC<{ label?: string }> = ({
  label = "+ 새 정보 입력",
}) => (
  <OrderInfoCardRoot>
    <div className="flex h-28 items-center justify-center text-sm text-gray-400">
      {label}
    </div>
  </OrderInfoCardRoot>
);

/* ---------------- 네임스페이스 결합 ------------------------------- */
export const OrderInfoCard = Object.assign(OrderInfoCardRoot, {
  Title: OrderInfoCardTitle,
  Row: OrderInfoCardRow,
  RowItem: OrderInfoCardRowItem,
  Divider: OrderInfoCardDivider,
  Empty: OrderInfoCardEmpty,
});
