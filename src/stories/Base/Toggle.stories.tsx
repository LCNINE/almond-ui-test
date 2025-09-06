import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "Base/Toggle",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "The controlled state of the switch",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
    onCheckedChange: {
      description: "Event handler called when the switch state changes",
      action: "checkedChange",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A toggle switch component that can be used to switch between on and off states.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
