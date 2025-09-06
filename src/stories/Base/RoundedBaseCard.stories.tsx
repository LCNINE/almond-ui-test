import type { Meta, StoryObj } from "@storybook/react";
import { RoundedBaseCard } from "@/components/Base/RoundedBaseCard";

const meta: Meta<typeof RoundedBaseCard> = {
  title: "Base/RoundedBaseCard",
  component: RoundedBaseCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <RoundedBaseCard>기본 카드</RoundedBaseCard>,
};
