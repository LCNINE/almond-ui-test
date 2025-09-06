import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@/components/Buttons/CheckBox";
import CartCard from "@/components/Carts/CartCard";
import { X } from "lucide-react";

const meta = {
  title: "Components/장바구니(Cart)/CartCard",
  component: CartCard,
  subcomponents: {
    Thumbnail: CartCard.Thumbnail,
    Title: CartCard.Title,
    Option: CartCard.Option,
    Brand: CartCard.Brand,
    Badge: CartCard.Badge,
    Price: CartCard.Price,
  },
} satisfies Meta<typeof CartCard>;
export default meta;

type Story = StoryObj<typeof CartCard>;

const QuantityControl = ({ quantity = 1 }: { quantity?: number }) => (
  <div className="flex w-fit items-center overflow-hidden rounded border border-gray-300 text-sm">
    <button className="px-3 py-1">-</button>
    <span className="border-x border-gray-300 bg-white px-4 py-1">
      {quantity}
    </span>
    <button className="px-3 py-1">+</button>
  </div>
);

export const 장바구니카드_기본: Story = {
  render: () => (
    <CartCard
      controlLeft={
        <Checkbox
          defaultChecked
          id="cart-card-checkbox"
          name="cart-card-checkbox"
          value="1"
        />
      }
      controlRight={
        <button name="삭제" aria-label="삭제">
          <X />
        </button>
      }
      controlBottom={<QuantityControl quantity={2} />}
    >
      <CartCard.Thumbnail src="/images/thumbnail.png" />
      <CartCard.Title>
        [동성제약] 헤어콘 프로틴 무향료 칼라크림 100g...
      </CartCard.Title>
      <CartCard.Option>4 자연갈색</CartCard.Option>
      <CartCard.Brand>동성제약</CartCard.Brand>
      <CartCard.Badge>4시 이전 주문 시 당일 출고 보장</CartCard.Badge>
      <CartCard.Price
        original={30000}
        discounted={9000}
        discountRate={78}
        membership
      />
    </CartCard>
  ),
};
