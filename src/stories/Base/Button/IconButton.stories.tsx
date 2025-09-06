import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@/components/Buttons/IconButton";
import { CircleHelp, Mail } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "Base/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "link"],
      description: "The visual style of the button",
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg"],
      description: "The size of the button",
    },
    icon: {
      description: "The icon to display in the button",
    },
    onClick: {
      description: "Function called when the button is clicked",
      action: "clicked",
    },
    "aria-label": {
      description: "Accessibility label for the button",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component that displays an icon. Can be used as a regular button or as a link.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <CircleHelp />,
    "aria-label": "Help",
    onClick: () => console.log("Help button clicked"),
  },
};

export const Link: Story = {
  args: {
    icon: <Mail />,
    variant: "link",
    "aria-label": "Mail",
    onClick: () => console.log("Mail button clicked"),
  },
};
