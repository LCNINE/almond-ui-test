import type { Meta, StoryObj } from "@storybook/react";
import SquareButton from "@/components/Buttons/SquareButton";
import { ArrowRight } from "lucide-react";

const meta = {
  title: "Base/Buttons/Square",
  component: SquareButton,
  argTypes: {
    onClick: { action: "clicked" },
    iconLeft: { control: false },
    iconRight: { control: false },
    variant: {
      control: "radio",
      options: ["solid", "ghost", "text"],
      description: "버튼의 스타일 변형",
      defaultValue: "solid",
      table: {
        type: { summary: "solid | ghost | text" },
        defaultValue: { summary: "solid" },
      },
    },
    color: {
      control: "radio",
      options: ["primary", "secondary", "gray", "danger"],
      description: "버튼 색상",
      defaultValue: "primary",
      table: {
        type: { summary: "primary | secondary | gray | danger" },
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      description: "전체 너비 사용 여부",
      defaultValue: false,
    },
  },
  args: {
    children: "Button",
    variant: "solid",
    color: "primary",
  },
} satisfies Meta<typeof SquareButton>;

export default meta;
type Story = StoryObj<typeof SquareButton>;

// 기본 버튼
export const Default: Story = {};

// 아이콘이 있는 버튼
export const WithIcons: Story = {
  args: {
    children: "With Icons",
    iconRight: <ArrowRight size={18} />,
  },
};

// 전체 너비 버튼
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
};
