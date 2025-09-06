import type { Meta, StoryObj } from "@storybook/react";
import OrderProductCard, {
  OrderProductCardRoot,
  OrderProductCardHeader,
  OrderProductCardItem,
  OrderProductCardActions,
  OrderProductCardCancelAction,
} from "@/components/Orders/OrderProductCards";

import { SquareButton } from "@/components";
import { MoreVertical } from "lucide-react";

const meta: Meta<typeof OrderProductCardRoot> = {
  title: "Components/주문(Order)/OrderProductCard",
  component: OrderProductCard,
  subcomponents: {
    OrderProductCardHeader,
    OrderProductCardItem,
    OrderProductCardActions,
    OrderProductCardCancelAction,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OrderProductCardRoot>;

const baseItem = {
  image: "/images/thumbnail.png",
  quantity: 2,
  price: 9000,
  options: [
    { label: "브러쉬 타입", value: "1개" },
    { label: "마스카라 타입", value: "1개" },
  ],
};

export const 주문상품카드_배송완료: Story = {
  render: () => (
    <OrderProductCard>
      <OrderProductCard.Header
        status="배송완료"
        guaranteeLabel="당일 출고 보장"
        actions={
          <button className="ml-auto flex h-7 w-7 items-center justify-center">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        }
      />
      <OrderProductCard.List>
        <OrderProductCard.Item
          {...baseItem}
          id={1}
          name="노몬드 속눈썹 영양제 블랙"
          status="배송완료"
        >
          <SquareButton variant="ghost" color="gray" size="sm">
            장바구니 담기
          </SquareButton>
        </OrderProductCard.Item>
      </OrderProductCard.List>
      <OrderProductCard.Actions
        controls={
          <>
            <SquareButton variant="ghost" color="gray" fullWidth>
              교환/반품
            </SquareButton>
            <SquareButton variant="ghost" color="primary" fullWidth>
              배송조회
            </SquareButton>
          </>
        }
      />
    </OrderProductCard>
  ),
};

export const 주문상품카드_멀티상품: Story = {
  render: () => (
    <OrderProductCard>
      <OrderProductCard.Header
        status="배송완료"
        guaranteeLabel="당일 출고 보장"
        actions={
          <button className="ml-auto flex h-7 w-7 items-center justify-center">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        }
      />
      <OrderProductCard.List>
        <OrderProductCard.Item
          {...baseItem}
          id={1}
          name="노몬드 속눈썹 영양제 블랙"
          status="배송완료"
        />
        <OrderProductCard.Item
          {...baseItem}
          id={2}
          name="노몬드 속눈썹 영양제 화이트"
          status="배송완료"
        />
      </OrderProductCard.List>
      <OrderProductCard.Actions
        controls={
          <>
            <SquareButton variant="ghost" color="gray" fullWidth>
              교환/반품
            </SquareButton>
            <SquareButton variant="ghost" color="primary" fullWidth>
              배송조회
            </SquareButton>
          </>
        }
      />
    </OrderProductCard>
  ),
};

export const 주문상품카드_추적_취소: Story = {
  render: () => (
    <OrderProductCard>
      <OrderProductCard.Header
        status="배송준비중"
        actions={
          <button className="ml-auto flex h-7 w-7 items-center justify-center">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        }
      />
      <OrderProductCard.List>
        <OrderProductCard.Item
          id={1}
          name="[밀본] 올디브 더 프로페셔널 헤어컬러 염색약 80g, 베이지톤"
          image="/images/thumbnail.png"
          quantity={2}
          price={6200}
          status="배송준비중"
          options={[{ label: "색상", value: "베이지톤" }]}
        />
        <OrderProductCard.Item
          id={2}
          name="고속도로 공사현장용 오렌지 꼬깔콘 헤비 웨이트콘 4.3kg, 2개, 레드"
          image="/images/thumbnail.png"
          quantity={1}
          price={37860}
          status="배송준비중"
        />
      </OrderProductCard.List>
      <OrderProductCard.Actions
        controls={
          <SquareButton color="gray" fullWidth>
            주문취소
          </SquareButton>
        }
      />
    </OrderProductCard>
  ),
};
