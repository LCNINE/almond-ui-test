/* ------------------------------------------------------------------
   OrderInfoCard.stories.tsx
   ----------------------------------------------------------------- */
import type { Meta, StoryObj } from "@storybook/react";
import { OrderInfoCard } from "@/components/Orders/OrderInfoCard";
import { SquareButton } from "@/components";

/* ---------------- Storybook Meta --------------------------------- */
const meta = {
  title: "Components/주문(Order)/OrderInfoCard",
  component: OrderInfoCard,
  tags: ["autodocs"],
} satisfies Meta<typeof OrderInfoCard>;

export default meta;

type Story = StoryObj<typeof OrderInfoCard>;

/* ------------------------------------------------------------------
      Stories
      ----------------------------------------------------------------- */

/** 1) 배송지(주소) 카드 */
export const 주문정보카드_배송지: Story = {
  render: () => (
    <OrderInfoCard>
      <OrderInfoCard.Title>이연정</OrderInfoCard.Title>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>받는분</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>이연정</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>
          (10303) 서울특별시 강북구 도봉로 89길 27(수유동) 4층
        </OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>전화번호</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>010-0000-0000</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Divider />
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>배송요청사항</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>부재 시 문앞에 두주세요.</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
    </OrderInfoCard>
  ),
};

/** 2) 결제정보 카드 */
export const 주문정보카드_결제정보: Story = {
  render: () => (
    <OrderInfoCard>
      <OrderInfoCard.Title>결제정보</OrderInfoCard.Title>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>총 상품금액</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>100,000원</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>총 배송비</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>10,000원</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Divider />
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>결제수단 · 네이버페이</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>110,000원</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>총 결제금액</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>110,000원</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
    </OrderInfoCard>
  ),
};

export const 주문정보카드_최종정보: Story = {
  render: () => (
    <OrderInfoCard>
      <OrderInfoCard.Row variant="gap" gap={52}>
        <OrderInfoCard.RowItem>받는사람</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>홍길동</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row variant="gap" gap={52}>
        <OrderInfoCard.RowItem>받는주소</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>
          (10303) 서울특별시 강북구 도봉로 89길 27(수유동) 4층
        </OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row variant="gap" gap={28}>
        <OrderInfoCard.RowItem>배송요청사항</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>부재 시 문앞에 두주세요.</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Divider />
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>총 상품가격</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>100,000원</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>총 배송비</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>10,000원</OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <OrderInfoCard.Divider />
      <OrderInfoCard.Row>
        <OrderInfoCard.RowItem>총 결제금액</OrderInfoCard.RowItem>
        <OrderInfoCard.RowItem>
          <span className="mr-[4px]">펌뱅킹/익월 이체</span>
          <span className="text-primary text-[14px] font-bold">110,000원</span>
        </OrderInfoCard.RowItem>
      </OrderInfoCard.Row>
      <SquareButton variant="ghost" fullWidth color="gray">
        주문내역 보기
      </SquareButton>
    </OrderInfoCard>
  ),
};
