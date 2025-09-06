import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@/components/Buttons/CheckBox";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Buttons/CheckBox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "checkbox-default",
    name: "agree",
    label: "Default checkbox",
    value: "default",
  },
};

export const Checked: Story = {
  args: {
    id: "checkbox-checked",
    name: "agree",
    label: "Checked state",
    value: "checked",
    checked: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    id: "checkbox-default-checked",
    name: "agree",
    label: "DefaultChecked state",
    value: "default-checked",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "checkbox-disabled",
    name: "agree",
    label: "Disabled checkbox",
    value: "disabled",
    disabled: true,
  },
};
