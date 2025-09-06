// ShipmentProductCard.tsx
import React, { forwardRef } from "react";
import ImageWrapper from "../Base/ImageWrapper";

/* ------------------------------------------------------------------ */
/* 1. 썸네일                                                           */
/* ------------------------------------------------------------------ */
interface ThumbnailProps {
  src: string;
  alt?: string;
  className?: string;
}
const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  alt = "thumbnail",
  className,
}) => (
  <ImageWrapper
    src={src}
    alt={alt}
    width={48}
    height={48}
    className={[
      "flex-shrink-0 rounded-[5px] border border-neutral-300 object-cover",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  />
);
Thumbnail.displayName = "ShipmentProductCard.Thumbnail";

/* ------------------------------------------------------------------ */
/* 2. 정보 영역(주문번호·상태 등)                                       */
/* ------------------------------------------------------------------ */
const Info: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={["flex flex-col gap-[7px]", className].filter(Boolean).join(" ")}
  >
    {children}
  </div>
);
Info.displayName = "ShipmentProductCard.Info";

const OrderNumber: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[9.5px] leading-[1.19] font-medium text-neutral-500">
    {children}
  </span>
);
OrderNumber.displayName = "ShipmentProductCard.OrderNumber";

const Status: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className="text-[15px] leading-[1] font-medium -tracking-[0.01em]"
    style={{ color: "#007AFF" }} // 항상 “배송 중” 컬러
  >
    {children}
  </span>
);
Status.displayName = "ShipmentProductCard.Status";

/* ------------------------------------------------------------------ */
/* 3. 기본 화살표 & Right 슬롯                                         */
/* ------------------------------------------------------------------ */
const DefaultArrow = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path
      d="M8 5l8 7-8 7"
      stroke="#1E1E1E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Right: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="ml-auto flex-shrink-0">{children ?? <DefaultArrow />}</div>
);
Right.displayName = "ShipmentProductCard.Right";

/* ------------------------------------------------------------------ */
/* 4. (옵션) ProductList                                               */
/* ------------------------------------------------------------------ */
const ProductList: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className, ...rest }) => (
  <ul
    className={["flex flex-col gap-1", className].filter(Boolean).join(" ")}
    {...rest}
  >
    {children}
  </ul>
);
ProductList.displayName = "ShipmentProductCard.ProductList";

/* ------------------------------------------------------------------ */
/* 5. Root                                                             */
/* ------------------------------------------------------------------ */
interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Root = forwardRef<HTMLDivElement, RootProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        "flex w-full items-center gap-[17px] bg-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  ),
);
Root.displayName = "ShipmentProductCard.Root";

/* ------------------------------------------------------------------ */
/* 6. Aggregate & Named Exports                                        */
/* ------------------------------------------------------------------ */
export const ShipmentProductCard = Object.assign(Root, {
  Thumbnail,
  Info,
  OrderNumber,
  Status,
  Right,
  ProductList,
});

export {
  Root as ShipmentProductCardRoot,
  Thumbnail as ShipmentProductCardThumbnail,
  Info as ShipmentProductCardInfo,
  OrderNumber as ShipmentProductCardOrderNumber,
  Status as ShipmentProductCardStatus,
  Right as ShipmentProductCardRight,
  ProductList as ShipmentProductCardProductList,
};
