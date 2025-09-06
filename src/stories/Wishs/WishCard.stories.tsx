import type { Meta, StoryObj } from "@storybook/react";

import WishCard, {
  WishCardRoot,
  WishCardImage,
  WishCardContent,
  WishCardTitle,
  WishCardPrice,
  WishCardDiscountInfo,
  WishCardSoldOutInfo,
  WishCardActions,
} from "@/components/Wishs/WishCard";
import { SquareButton } from "@/components/Buttons";

const meta: Meta<typeof WishCardRoot> = {
  title: "Components/찜(Wish)/WishCard",
  component: WishCard,
  subcomponents: {
    WishCardImage,
    WishCardContent,
    WishCardTitle,
    WishCardPrice,
    WishCardDiscountInfo,
    WishCardSoldOutInfo,
    WishCardActions,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WishCardRoot>;

export const 찜카드_일반상품: Story = {
  render: () => (
    <WishCard>
      <WishCard.Image src="/images/thumbnail.png" alt="썸네일" />
      <WishCard.Content className="gap-[11px]">
        <WishCard.Title href="/product/123">
          고속도로 공사현장용 오렌지 꼬깔콘 헤비 웨이트콘 4.3kg, 2개, 레드
        </WishCard.Title>
        <WishCard.Price isSoldOut={false} originalPrice={37860} />
        <WishCard.Actions>
          <SquareButton
            variant="ghost"
            color="primary"
            size="sm"
            className="typo-order-regular"
          >
            장바구니 담기
          </SquareButton>
          <SquareButton
            variant="ghost"
            color="gray"
            size="sm"
            className="typo-order-regular"
          >
            삭제
          </SquareButton>
        </WishCard.Actions>
      </WishCard.Content>
    </WishCard>
  ),
};

export const 찜카드_멤버십할인: Story = {
  render: () => (
    <WishCard>
      <WishCard.Image src="/images/thumbnail.png" alt="썸네일" />
      <WishCard.Content className="gap-[11px]">
        <WishCard.Title href="/product/456">
          [밀본] 올디브 더 프로페셔널 헤어컬러 염색약 80g, 베이지톤
        </WishCard.Title>
        <div>
          <WishCard.DiscountInfo
            isSoldOut={false}
            discountRate={31}
            originalPrice={9000}
          />
          <WishCard.Price
            isSoldOut={false}
            isDiscounted
            discountedPrice={6200}
            originalPrice={9000}
          />
        </div>
        <WishCard.Actions>
          <SquareButton variant="ghost" color="primary" size="sm">
            장바구니 담기
          </SquareButton>
          <SquareButton variant="ghost" color="gray" size="sm">
            삭제
          </SquareButton>
        </WishCard.Actions>
      </WishCard.Content>
    </WishCard>
  ),
};

export const 찜카드_일시품절: Story = {
  render: () => (
    <WishCard>
      <WishCard.Image src="/images/thumbnail.png" alt="썸네일" />
      <WishCard.Content className="gap-[11px]">
        <WishCard.Title href="/product/789">
          [일시품절] 한정수량 특가 상품 예시
        </WishCard.Title>
        <WishCard.Price isSoldOut originalPrice={12000} />
        <WishCard.SoldOutInfo restockDate="2025-06-15" />
        <WishCard.Actions>
          <SquareButton variant="ghost" color="gray" size="sm">
            삭제
          </SquareButton>
        </WishCard.Actions>
      </WishCard.Content>
    </WishCard>
  ),
};

export const 찜카드_멤버십할인_일시품절: Story = {
  render: () => (
    <WishCard>
      <WishCard.Image src="/images/thumbnail.png" alt="썸네일" />
      <WishCard.Content className="gap-[11px]">
        <WishCard.Title href="/product/999">
          [일시품절] 멤버십 할인 중인 헤어 트리트먼트 500ml
        </WishCard.Title>
        <div>
          <WishCard.DiscountInfo
            isSoldOut={true}
            discountRate={20}
            originalPrice={15000}
          />
          <WishCard.Price
            isSoldOut={true}
            isDiscounted
            discountedPrice={12000}
            originalPrice={15000}
          />
        </div>
        <WishCard.SoldOutInfo restockDate="2025-07-01" />
        <WishCard.Actions>
          <SquareButton variant="ghost" color="gray" size="sm">
            삭제
          </SquareButton>
        </WishCard.Actions>
      </WishCard.Content>
    </WishCard>
  ),
};
