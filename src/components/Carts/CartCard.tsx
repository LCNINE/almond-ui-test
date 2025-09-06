// CartCard.tsx

import React, { forwardRef } from "react";
import { X } from "lucide-react";
import MemberShipTagIcon from "@/assets/icons/membership-tag.svg?react";
import ImageWrapper from "../Base/ImageWrapper";

// 파츠 컴포넌트들
interface CartCardThumbnailProps {
  src: string;
  alt?: string;
}
function CartCardThumbnail({
  src,
  alt = "상품 이미지",
}: CartCardThumbnailProps) {
  return (
    <ImageWrapper
      src={src}
      alt={alt}
      width={65}
      height={66}
      className="h-16 w-16 rounded-md"
    />
  );
}
CartCardThumbnail.displayName = "CartCard.Thumbnail";

interface CartCardTitleProps {
  children: React.ReactNode;
}
function CartCardTitle({ children }: CartCardTitleProps) {
  return <p className="truncate text-sm font-medium text-black">{children}</p>;
}
CartCardTitle.displayName = "CartCard.Title";

interface CartCardOptionProps {
  children: React.ReactNode;
}
function CartCardOption({ children }: CartCardOptionProps) {
  return <p className="text-muted-foreground text-xs">옵션 : {children}</p>;
}
CartCardOption.displayName = "CartCard.Option";

interface CartCardBrandProps {
  children: React.ReactNode;
}
function CartCardBrand({ children }: CartCardBrandProps) {
  return (
    <div className="mt-1 text-sm font-medium text-zinc-800">
      {children} <span className="inline-block -translate-y-[1px]">›</span>
    </div>
  );
}
CartCardBrand.displayName = "CartCard.Brand";

interface CartCardBadgeProps {
  children: React.ReactNode;
}
function CartCardBadge({ children }: CartCardBadgeProps) {
  return <div className="text-sm text-green-600">{children}</div>;
}
CartCardBadge.displayName = "CartCard.Badge";

interface CartCardPriceProps {
  original: number;
  discounted?: number;
  discountRate?: number;
  membership?: boolean;
}
function CartCardPrice({
  original,
  discounted,
  discountRate,
  membership,
}: CartCardPriceProps) {
  return (
    <>
      {membership && discounted != null && (
        <p className="text-xs text-gray-400">
          {discountRate}%{" "}
          <span className="line-through">{original.toLocaleString()}원</span>
        </p>
      )}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">
          {(discounted ?? original).toLocaleString()}원
        </span>
        {membership && discounted != null && <MemberShipTagIcon />}
      </div>
    </>
  );
}
CartCardPrice.displayName = "CartCard.Price";

interface CartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  controlLeft?: React.ReactNode;
  controlRight?: React.ReactNode;
  controlBottom?: React.ReactNode;
  showRemoveButton?: boolean;
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
}

const CartCard = Object.assign(
  forwardRef<HTMLDivElement, CartCardProps>(
    (
      {
        controlLeft,
        controlRight,
        controlBottom,
        showRemoveButton = true,
        onRemove,
        children,
        className,
        ...rest
      },
      ref,
    ) => {
      // 파츠 구분(Thumbnail, Title, Option …)
      let thumbnail: React.ReactNode = null;
      const header: React.ReactNode[] = [];
      const body: React.ReactNode[] = [];

      React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;
        const name = (child.type as { displayName?: string })?.displayName;
        if (name === "CartCard.Thumbnail") thumbnail = child;
        else if (name === "CartCard.Title" || name === "CartCard.Option")
          header.push(child);
        else body.push(child);
      });

      return (
        <div
          ref={ref}
          className={[
            "grid grid-cols-[auto_1fr_auto] gap-x-2 gap-y-3",
            "border-b border-gray-200 px-4 py-5",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        >
          {/* 1행 ─ 좌측 컨트롤 · 제목/옵션 · 우측 컨트롤 */}
          <div className="col-start-1 row-start-1 pt-[3px]">{controlLeft}</div>
          <div className="col-start-2 row-start-1 min-w-0">
            {header.map((c, i) =>
              React.cloneElement(c as React.ReactElement, { key: i }),
            )}
          </div>
          <div className="col-start-3 row-start-1 p-1">
            {controlRight}
            {/* showRemoveButton/onRemove는 deprecated, 하위호환 */}
            {showRemoveButton && onRemove && !controlRight && (
              <button onClick={onRemove} aria-label="삭제" className="p-1">
                <X className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>
          {/* 2행 ─ 썸네일 · 본문 */}
          <div className="col-start-2 row-start-2 flex gap-4">
            {thumbnail}
            <div className="flex min-w-0 flex-col gap-1">
              {body.map((c, i) =>
                React.cloneElement(c as React.ReactElement, { key: i }),
              )}
              {/* 🔹 controls 슬롯은 본문 제일 아래 렌더 */}
              {controlBottom && <div className="mt-2">{controlBottom}</div>}
            </div>
          </div>
        </div>
      );
    },
  ),
  {
    Thumbnail: CartCardThumbnail,
    Title: CartCardTitle,
    Option: CartCardOption,
    Brand: CartCardBrand,
    Badge: CartCardBadge,
    Price: CartCardPrice,
  },
);

export default CartCard;
