import { RoundedBaseCard } from "../Base/RoundedBaseCard";
import {
  OrderInfoCardRow,
  OrderInfoCardRowItem,
  OrderInfoCardDivider,
} from "../Orders/OrderInfoCard";
import React from "react";

const CartSummaryCardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <footer className={className}>
    <OrderInfoCardDivider />
    {children}
  </footer>
);

const CartSummaryCard = Object.assign(RoundedBaseCard, {
  Row: OrderInfoCardRow,
  RowItem: OrderInfoCardRowItem,
  Footer: CartSummaryCardFooter,
});

export { CartSummaryCard };
