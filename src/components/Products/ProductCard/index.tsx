"use client";
import React from "react";
import { cn } from "@/lib/utils";
import MemberShipTagIcon from "@/assets/icons/membership-tag.svg?react";
import { Rating } from "@/components/Base/Rating";
import ImageWrapper from "@/components/Base/ImageWrapper";
// Root
function Root({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex w-[112px] flex-col bg-white", className)}>
      {children}
    </div>
  );
}

// Image
function Thumbnail({
  src,
  alt,
  children,
  className,
  rank,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  rank?: number;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center bg-gray-300",
        className,
      )}
    >
      {rank !== undefined && (
        <span className="absolute top-0 left-0 z-10 flex h-5 w-5 items-center justify-center rounded-sm bg-black/80 text-xs font-bold text-white">
          {rank}
        </span>
      )}
      <ImageWrapper
        src={src || "/images/thumbnail.png"}
        alt={alt}
        className="h-full w-full object-cover"
      />
      {children}
    </div>
  );
}

// Content
function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-[6px] pt-2 pb-1", className)}>
      {children}
    </div>
  );
}

// Title
function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={cn("typo-product-name", className)}>{children}</h3>;
}

function PriceWithMembershipSection({
  className,
  discount,
  originalPrice,
  isMembership,
  children,
}: {
  className?: string;
  discount?: number;
  originalPrice: number;
  isMembership?: boolean;
  children?: React.ReactNode;
}) {
  const price = discount
    ? originalPrice - originalPrice * (discount / 100)
    : originalPrice;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="text-gray-20 flex flex-row gap-[3px]">
        {discount && (
          <span className="typo-small-normal font-bold">{discount}%</span>
        )}
        <span className="typo-small-cancel line-through">
          {originalPrice.toLocaleString()}원
        </span>
      </div>
      <div className="typo-price font-bold text-black">
        {price.toLocaleString()}원
      </div>
      {children}
      {isMembership && <Membership isMembership />}
    </div>
  );
}

// Membership 뱃지
function Membership({
  isMembership = false,
  className,
}: {
  isMembership?: boolean;
  className?: string;
}) {
  if (!isMembership) return null;
  return <MemberShipTagIcon width={70} height={16} className={className} />;
}

// Timer (썸네일 하단 오버레이)
function Timer({ time, className }: { time: string; className?: string }) {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 w-full bg-black/70 py-1 text-center text-xs text-white",
        className,
      )}
    >
      {time}
    </div>
  );
}

// Badge (공통)
type BadgeColor = "red" | "white";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: BadgeColor;
}

function Badge({ children, className, color = "red" }: BadgeProps) {
  const colorClass =
    color === "red" ? "bg-[#ff3b30] text-white" : "bg-white text-[#ff3b30]";

  return (
    <span
      className={cn(
        "mb-1 w-fit rounded-sm px-[4px] py-[2px] text-[8px] font-bold",
        colorClass,
        className,
      )}
    >
      {children}
    </span>
  );
}

// Compound pattern 적용
const ProductCard = Object.assign(Root, {
  Thumbnail,
  Content,
  Title,
  Rating,
  Timer,
  Badge,

  PriceWithMembershipSection,
});

export default ProductCard;

// 명시적 개별 export (문서화/테스트용)
export {
  Root as ProductCardRoot,
  Thumbnail as ProductCardThumbnail,
  Content as ProductCardContent,
  Title as ProductCardTitle,
  Rating as ProductCardRating,
  Timer as ProductCardTimer,
  Badge as ProductCardBadge,
  PriceWithMembershipSection as ProductCardPriceWithMembershipSection,
};
