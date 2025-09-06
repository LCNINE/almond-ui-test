import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@/components/Base/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Base/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const 탭_기본: Story = {
  render: () => (
    <section className="w-[700px]">
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">구매</Tabs.Trigger>
          <Tabs.Trigger value="tab2">자주 산 상품</Tabs.Trigger>
          <Tabs.Trigger value="tab3">찜한 상품</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">탭 1의 내용입니다.</Tabs.Content>
        <Tabs.Content value="tab2">탭 2의 내용입니다.</Tabs.Content>
        <Tabs.Content value="tab3">탭 3의 내용입니다.</Tabs.Content>
      </Tabs>
    </section>
  ),
};

export const 비활성탭_탭: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">활성 탭</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          비활성 탭
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">탭 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">활성 탭의 내용입니다.</Tabs.Content>
      <Tabs.Content value="tab2">비활성 탭의 내용입니다.</Tabs.Content>
      <Tabs.Content value="tab3">탭 3의 내용입니다.</Tabs.Content>
    </Tabs>
  ),
};
