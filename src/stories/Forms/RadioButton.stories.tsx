import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup, { Radio } from "@/components/Forms/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/폼(Form)/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  subcomponents: {
    RadioGroup: RadioGroup,
    Radio: Radio,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// 기본 비선택 상태
export const Status_기본라디오버튼: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroup.Radio
        id="radio-default"
        name="fruit"
        label="기본 라디오 버튼"
        value="default"
      />
    </RadioGroup>
  ),
};

// checked를 true로 설정한 선택 상태
export const Status_선택된라디오버튼: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroup.Radio
        id="radio-checked"
        name="fruit"
        label="선택된 라디오 버튼"
        value="checked"
        checked
      />
    </RadioGroup>
  ),
};

// disabled 상태
export const Status_비활성화된라디오버튼: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroup.Radio
        id="radio-disabled"
        name="fruit"
        label="비활성화된 라디오 버튼"
        value="disabled"
        disabled
      />
    </RadioGroup>
  ),
};

// 라디오 그룹 예시 (HTML native로 name만 같게)
export const Status_라디오그룹: Story = {
  render: () => (
    <RadioGroup id="favorite-fruit" legend="좋아하는 과일">
      <RadioGroup.Radio id="apple" name="fruits" value="apple" label="사과" />
      <RadioGroup.Radio
        id="banana"
        name="fruits"
        value="banana"
        label="바나나"
      />
      <RadioGroup.Radio id="cherry" name="fruits" value="cherry" label="체리" />
    </RadioGroup>
  ),
};
