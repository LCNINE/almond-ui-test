import React from "react";
import ImageWrapper from "../Base/ImageWrapper";
import {
  RoundedBaseCard,
  type RoundedBaseCardProps,
} from "../Base/RoundedBaseCard";

export interface OrderItemOption {
  label: string;
  value: string;
}

export interface OrderItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  status: string;
  deliveryDate?: string;
  options?: OrderItemOption[];
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  guaranteeLabel?: string;
}

function Root({
  children,
  ...rest
}: React.PropsWithChildren<RoundedBaseCardProps>) {
  return (
    <RoundedBaseCard variant="default" {...rest}>
      {children}
    </RoundedBaseCard>
  );
}

function Header({
  status,
  guaranteeLabel,
  actions,
}: {
  status: string;
  guaranteeLabel?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-[19px] flex items-center">
      <span className="mr-2 text-base font-bold text-gray-900">{status}</span>
      {guaranteeLabel && (
        <span className="mr-2 text-sm font-medium text-green-500">
          {guaranteeLabel}
        </span>
      )}
      {actions && <div className="ml-auto flex items-center">{actions}</div>}
    </div>
  );
}

interface ItemProps extends OrderItem {
  children?: React.ReactNode;
}

function Item({ image, name, price, quantity, options, children }: ItemProps) {
  return (
    <div className="mb-4 flex gap-3">
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-gray-50">
        <ImageWrapper
          src={image || "/images/thumbnail.png"}
          alt={name}
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-1 text-sm font-semibold text-gray-900">{name}</div>
        <div className="mb-1 flex items-center text-sm text-gray-700">
          <span>{new Intl.NumberFormat("ko-KR").format(price)}원</span>
          <span className="mx-1">·</span>
          <span>{quantity}개</span>
        </div>
        {options && options.length > 0 && (
          <ul className="mb-1 text-xs text-gray-500">
            {options.map((opt, idx) => (
              <li key={idx}>
                - {opt.label} {opt.value}
              </li>
            ))}
          </ul>
        )}
      </div>
      {children && <div className="ml-2 flex items-center">{children}</div>}
    </div>
  );
}

interface ActionsProps {
  controls?: React.ReactNode;
}

function Actions({ controls }: ActionsProps) {
  if (!controls) return null;

  const rendered = React.Children.map(controls, (child, idx) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { key: idx })
      : child,
  );

  return <div className="flex gap-2">{rendered}</div>;
}

interface CancelActionProps {
  order: Order;
  onCancel?: (order: Order) => void;
  controls?: React.ReactNode;
}

function CancelAction({ controls }: CancelActionProps) {
  if (!controls) return null;

  const rendered = React.Children.map(controls, (child, idx) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { key: idx })
      : child,
  );

  return <div className="mt-2">{rendered}</div>;
}

function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={[className].filter(Boolean).join(" ")}>{children}</div>
  );
}

const OrderProductCard = Object.assign(Root, {
  Header,
  List,
  Item,
  Actions,
  CancelAction,
});

export default OrderProductCard;

export {
  Root as OrderProductCardRoot,
  Header as OrderProductCardHeader,
  List as OrderProductCardList,
  Item as OrderProductCardItem,
  Actions as OrderProductCardActions,
  CancelAction as OrderProductCardCancelAction,
};
