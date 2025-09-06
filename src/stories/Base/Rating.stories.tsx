import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@/components/Base/Rating";
import { Heart } from "lucide-react";

const meta: Meta<typeof Rating> = {
  title: "Base/Rating",
  component: Rating,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const 평점_기본: Story = {
  render: () => <Rating value={0} readonly />,
};

export const 평점_텍스트: Story = {
  render: () => (
    <Rating value={4.2} readonly>
      <Rating.Text>(123)</Rating.Text>
    </Rating>
  ),
};

export const 커스텀아이콘_평점: Story = {
  render: () => (
    <Rating value={3.5} readonly Icon={Heart}>
      <Rating.Text>(99)</Rating.Text>
    </Rating>
  ),
};

export const 상호작용_평점: Story = {
  render: () => <Rating onValueChange={console.log} />,
};
