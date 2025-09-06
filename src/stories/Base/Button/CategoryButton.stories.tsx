import type { Meta, StoryObj } from "@storybook/react";
import CategoryButton from "@/components/Buttons/CategoryButton";

const meta = {
  title: "Base/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: {
      control: "text",
      description: "카테고리 이미지 URL",
      defaultValue: "https://picsum.photos/200",
    },
    title: {
      control: "text",
      description: "카테고리명(이미지 대체 텍스트 및 하단 텍스트)",
      defaultValue: "샘플 카테고리",
    },
    as: {
      control: "radio",
      options: ["button", "a"],
      description: "button 또는 a 태그로 렌더링",
      defaultValue: "button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
      },
    },
    href: {
      control: "text",
      description: "as가 a일 때 링크 주소",
      defaultValue: "https://www.gongbizstore.com/shop/list.php?ca_id=10",
    },
    onClick: { action: "clicked" },
  },
  args: {
    imageSrc: "https://picsum.photos/200",
    title: "샘플 카테고리",
    as: "div",
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof CategoryButton>;

// 기본 버튼
export const 카테고리_버튼_기본: Story = {
  args: {
    imageSrc: "https://picsum.photos/200",
    title: "샘플 카테고리",
    as: "div",
  },
};

// 링크 버튼
export const 카테고리_버튼_링크: Story = {
  args: {
    imageSrc: "https://picsum.photos/200",
    title: "젤네일",
    as: "a",
    href: "https://www.gongbizstore.com/shop/list.php?ca_id=10",
  },
};
