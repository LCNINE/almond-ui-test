import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/components/Tags/Tag";

const meta: Meta<typeof Tag> = {
  title: "Base/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "The size of the tag",
    },
    className: {
      description: "Additional CSS classes to apply to the tag",
    },
    onRemove: {
      description: "Function called when the remove button is clicked",
      action: "removed",
    },
    children: {
      description: "The content of the tag",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A tag component that can be used to display information in a compact way. Can include a remove button.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag",
    onRemove: undefined,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Tag",
    className: "opacity-50 cursor-not-allowed",
    onRemove: undefined,
  },
};

export const Deletable: Story = {
  args: {
    children: "Deletable Tag",
    onRemove: () => console.log("Tag removed"),
  },
};

export const TagExamples: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex flex-wrap gap-2">
        <Tag>기본 태그</Tag>
        <Tag className="cursor-not-allowed opacity-50">비활성화된 태그</Tag>
        <Tag onRemove={() => console.log("Tag removed")}>삭제 가능 태그</Tag>
      </div>

      <div className="flex flex-wrap gap-2">
        <Tag size="sm">작은 태그</Tag>
        <Tag size="sm" className="cursor-not-allowed opacity-50">
          작은 비활성화 태그
        </Tag>
        <Tag size="sm" onRemove={() => console.log("Tag removed")}>
          작은 삭제 가능 태그
        </Tag>
      </div>

      <div className="flex flex-wrap gap-2">
        <Tag size="lg">큰 태그</Tag>
        <Tag size="lg" className="cursor-not-allowed opacity-50">
          큰 비활성화 태그
        </Tag>
        <Tag size="lg" onRemove={() => console.log("Tag removed")}>
          큰 삭제 가능 태그
        </Tag>
      </div>
    </div>
  ),
};
