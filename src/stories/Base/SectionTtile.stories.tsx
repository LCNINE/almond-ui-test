import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "@/components/Base/SectionTitle";

const meta: Meta<typeof SectionTitle> = {
  title: "Base/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const 섹션타이틀_기본: Story = {
  render: () => <SectionTitle title="기본 섹션 타이틀" />,
};

export const 긴타이틀_섹션타이틀: Story = {
  render: () => (
    <SectionTitle title="이것은 매우 긴 섹션 타이틀입니다. 여러 줄로 표시될 수 있습니다." />
  ),
};

export const 이모지_섹션타이틀: Story = {
  render: () => <SectionTitle title="🔥 인기 상품" />,
};
