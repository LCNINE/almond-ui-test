// src/stories/Input.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Forms/Input";

const meta: Meta<typeof Input> = {
  title: "Components/폼(Form)/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["underline", "filled"],
      description: "Input 스타일",
      defaultValue: "underline",
    },
    state: {
      control: "radio",
      options: ["default", "focus", "error", "disabled"],
      description: "상태",
      defaultValue: "default",
    },
    disabled: {
      control: "boolean",
      description: "비활성화",
      defaultValue: false,
    },
    label: {
      control: "text",
      description: "라벨",
      defaultValue: "라벨",
    },
    placeholder: {
      control: "text",
      description: "placeholder",
      defaultValue: "입력하세요",
    },
    value: {
      control: "text",
      description: "입력값",
    },
  },
  args: {
    placeholder: "입력하세요",
    variant: "underline",
    state: "default",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {
  args: {
    label: "라벨",
    placeholder: "입력하세요",
  },
};

export const Default: Story = {
  args: {
    placeholder: "입력하세요",
  },
};
