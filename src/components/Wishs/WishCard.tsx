import ImageWrapper from "@/components/Base/ImageWrapper";
import LinkWrapper from "@/components/Base/LinkedWrapper";
import { cn } from "@/lib/utils";

function Root({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[10px] py-[15px]">
      <div className="flex gap-4">{children}</div>
    </div>
  );
}

function Image({ src, alt = "상품 이미지" }: { src: string; alt?: string }) {
  return (
    <div className="relative h-[66px] w-[65px] flex-shrink-0 overflow-hidden rounded">
      <ImageWrapper
        src={src}
        alt={alt}
        fill
        sizes="65px"
        className="object-cover"
      />
    </div>
  );
}

function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-1 flex-col gap-2", className)}>
      {children}
    </div>
  );
}

function Title({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <LinkWrapper href={href} className="typo-product-name text-gray-900">
      {children}
    </LinkWrapper>
  );
}

function DiscountInfo({
  isSoldOut,
  discountRate,
  originalPrice,
}: {
  isSoldOut: boolean;
  discountRate?: number;
  originalPrice?: number;
}) {
  return (
    <div className="flex items-center gap-[6px]">
      <span
        className={`typo-small-normal rounded-[4px] px-2 py-0.5 ${
          isSoldOut
            ? "bg-[#d9d9d9] text-white"
            : "bg-yellow-light-40 text-white"
        }`}
      >
        {discountRate}% 할인
      </span>
      <span
        className={`typo-ghost-tag font-medium ${
          isSoldOut ? "text-[#d9d9d9]" : "text-yellow-light-30"
        }`}
      >
        멤버십할인
      </span>
      <span
        className={`typo-small-cancel line-through ${
          isSoldOut ? "text-gray-300" : "text-gray-400"
        }`}
      >
        {originalPrice?.toLocaleString()}원
      </span>
    </div>
  );
}

function Price({
  isSoldOut,
  isDiscounted,
  discountedPrice,
  originalPrice,
}: {
  isSoldOut: boolean;
  isDiscounted?: boolean;
  discountedPrice?: number;
  originalPrice?: number;
}) {
  return (
    <span
      className={`typo-order-price-bold font-bold ${
        isSoldOut && isDiscounted ? "text-gray-300" : ""
      } ${isSoldOut && !isDiscounted ? "mt-[0px]" : ""}`}
    >
      {isDiscounted && discountedPrice
        ? `${discountedPrice.toLocaleString()}원`
        : `${originalPrice?.toLocaleString()}원`}
    </span>
  );
}

function SoldOutInfo({ restockDate }: { restockDate?: string }) {
  if (!restockDate) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="typo-price font-bold text-black">일시품절</span>
      <span className="typo-ghost-tag font-normal text-blue-500">
        재입고 일정 : {restockDate.replace(/-/g, ".")} 입고예정
      </span>
    </div>
  );
}

function Actions({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-row gap-[4px]">{children}</div>;
}

// ✅ 개발자 사용성: WishCard.Image, WishCard.Content 형태로 사용
const WishCard = Object.assign(Root, {
  Image,
  Content,
  Title,
  Price,
  DiscountInfo,
  SoldOutInfo,
  Actions,
});

export default WishCard;

// ✅ 문서화를 위한 명시적 개별 export (subcomponents에서 사용)
export {
  Root as WishCardRoot,
  Image as WishCardImage,
  Content as WishCardContent,
  Title as WishCardTitle,
  Price as WishCardPrice,
  DiscountInfo as WishCardDiscountInfo,
  SoldOutInfo as WishCardSoldOutInfo,
  Actions as WishCardActions,
};
