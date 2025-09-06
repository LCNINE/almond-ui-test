import type { Meta, StoryObj } from "@storybook/react";
import ProductCard, {
  ProductCardThumbnail,
  ProductCardContent,
  ProductCardTitle,
  ProductCardRating,
  ProductCardPriceWithMembershipSection,
  ProductCardTimer,
  ProductCardBadge,
} from "@/components/Products/ProductCard";

const meta = {
  title: "Components/상품(Product)/ProductCard",
  component: ProductCard,
  subcomponents: {
    ProductCardThumbnail,
    ProductCardContent,
    ProductCardTitle,
    ProductCardRating,
    ProductCardPriceWithMembershipSection,
    ProductCardTimer,
    ProductCardBadge,
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const 상품카드_기본: Story = {
  render: () => (
    <ProductCard>
      <ProductCard.Thumbnail src="/images/thumbnail.png" alt="상품" />
      <ProductCard.Content>
        <ProductCard.Title>상품명</ProductCard.Title>
        <ProductCard.PriceWithMembershipSection
          discount={78}
          originalPrice={39600}
          isMembership={true}
        />

        <ProductCard.Rating value={4} readonly>
          <ProductCard.Rating.Text>(123)</ProductCard.Rating.Text>
        </ProductCard.Rating>
        <ProductCard.Badge className="relative flex h-4 items-center justify-center rounded-[3px] bg-[rgba(118,118,128,0.12)] px-1 text-xs text-[8px] text-[#ff2d55]">
          BEST
        </ProductCard.Badge>
      </ProductCard.Content>
    </ProductCard>
  ),
};

export const 한꺼번에_구매시_할인_상품카드: Story = {
  render: () => (
    <ProductCard>
      <ProductCard.Thumbnail src="/images/thumbnail.png" alt="상품" />
      <ProductCard.Content>
        <ProductCard.Title>상품명</ProductCard.Title>
        <ProductCard.PriceWithMembershipSection
          discount={78}
          originalPrice={39600}
        />

        <ProductCard.Rating value={4} readonly>
          <ProductCard.Rating.Text>(123)</ProductCard.Rating.Text>
        </ProductCard.Rating>
        <ProductCard.Badge className="relative flex h-4 items-center justify-center rounded-[3px] bg-[rgba(118,118,128,0.12)] px-1 text-xs text-[8px] text-[#ff2d55]">
          한꺼번에 구매시 할인
        </ProductCard.Badge>
      </ProductCard.Content>
    </ProductCard>
  ),
};

export const 랭크_1_상품카드: Story = {
  render: () => (
    <ProductCard>
      <ProductCard.Thumbnail src="/images/thumbnail.png" alt="상품" rank={1} />
      <ProductCard.Content>
        <ProductCard.Title>상품명</ProductCard.Title>
        <ProductCard.PriceWithMembershipSection
          discount={78}
          originalPrice={39600}
        />

        <ProductCard.Rating value={4} readonly>
          <ProductCard.Rating.Text>(123)</ProductCard.Rating.Text>
        </ProductCard.Rating>
        <ProductCard.Badge className="relative flex h-4 items-center justify-center rounded-[3px] bg-[rgba(118,118,128,0.12)] px-1 text-xs text-[8px] text-[#ff2d55]">
          한꺼번에 구매시 할인
        </ProductCard.Badge>
      </ProductCard.Content>
    </ProductCard>
  ),
};

export const 기간한정특가_상품카드: Story = {
  render: () => (
    <ProductCard>
      <ProductCard.Thumbnail src="/images/thumbnail.png" alt="상품">
        <ProductCard.Timer time="16:01:10" />
      </ProductCard.Thumbnail>
      <ProductCard.Content>
        <ProductCard.Title>기간한정 특가 상품</ProductCard.Title>

        <ProductCard.PriceWithMembershipSection
          originalPrice={39600}
          discount={78}
          isMembership={true}
        >
          <ProductCard.Badge
            color="red"
            className="typo-small-semibold font-normal text-white"
          >
            78% 할인
          </ProductCard.Badge>
        </ProductCard.PriceWithMembershipSection>

        <ProductCard.Rating value={5} readonly>
          <ProductCard.Rating.Text>(401)</ProductCard.Rating.Text>
        </ProductCard.Rating>
        <ProductCard.Badge className="relative flex h-4 items-center justify-center rounded-[3px] bg-[rgba(118,118,128,0.12)] px-1 text-xs text-[8px] text-[#ff2d55]">
          BEST
        </ProductCard.Badge>
      </ProductCard.Content>
    </ProductCard>
  ),
};
