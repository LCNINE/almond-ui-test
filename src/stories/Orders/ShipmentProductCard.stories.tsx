import type { Meta, StoryObj } from "@storybook/react";
import { ShipmentProductCard } from "@/components/Orders/ShipmentProductCard";

const meta = {
  title: "Components/주문(Order)/ShipmentProductCard",
  component: ShipmentProductCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ShipmentProductCard>;

export default meta;

type Story = StoryObj<typeof ShipmentProductCard>;

/* ------------------------------------------------------------------ */
/*  Stories – Compound Pattern                                        */
/* ------------------------------------------------------------------ */

/** 가장 기본 형태 ― 썸네일 + 주문번호 + “배송 중” */
export const 기본: Story = {
  render: () => (
    <ShipmentProductCard>
      <ShipmentProductCard.Thumbnail src="/images/thumbnail.png" />

      <ShipmentProductCard.Info>
        <ShipmentProductCard.OrderNumber>
          주문번호 20102-202031
        </ShipmentProductCard.OrderNumber>
        <ShipmentProductCard.Status>배송 중</ShipmentProductCard.Status>
      </ShipmentProductCard.Info>
    </ShipmentProductCard>
  ),
};

/** 오른쪽 커스텀 아이콘을 넣은 예시 */
export const 커스텀우측아이콘: Story = {
  render: () => (
    <ShipmentProductCard>
      <ShipmentProductCard.Thumbnail src="/images/thumbnail.png" />
      <ShipmentProductCard.Info>
        <ShipmentProductCard.OrderNumber>
          주문번호 20232-202031
        </ShipmentProductCard.OrderNumber>
        <ShipmentProductCard.Status>배송 중</ShipmentProductCard.Status>
      </ShipmentProductCard.Info>
      <ShipmentProductCard.Right>
        <span className="text-primary-500 text-sm">상세보기</span>
      </ShipmentProductCard.Right>
    </ShipmentProductCard>
  ),
};
