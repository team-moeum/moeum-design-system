import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from ".";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "라디오 그룹의 초기 선택값"
    },
    value: {
      control: "text",
      description: "라디오 그룹의 현재 선택값"
    },
    disabled: {
      control: "boolean",
      description: "라디오 그룹의 비활성화 상태"
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "라디오 그룹의 정렬 방향"
    },
    onValueChange: {
      action: "value changed",
      description: "선택값이 변경될 때 호출되는 콜백 함수"
    }
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option1",
    children: (
      <>
        <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
        <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
      </>
    )
  }
};

export const Orientation: Story = {
  args: {
    defaultValue: "option1",
    orientation: "horizontal",
    children: (
      <>
        <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
        <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
      </>
    )
  }
};

export const Disabled: Story = {
  args: {
    defaultValue: "option1",
    disabled: true,
    children: (
      <>
        <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
        <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
      </>
    )
  }
};

export const ItemDisabled: Story = {
  args: {
    defaultValue: "option1",
    children: (
      <>
        <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="option2" disabled>
          Option 2 (Disabled)
        </RadioGroup.Item>
        <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
      </>
    )
  }
};

export const CustomLabel: Story = {
  args: {
    defaultValue: "small",
    children: (
      <>
        <RadioGroup.Item value="small">
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <strong>Small Pack</strong>
            <span style={{ fontSize: "14px", color: "#666" }}>Perfect for small teams</span>
          </div>
        </RadioGroup.Item>
        <RadioGroup.Item value="medium">
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <strong>Medium Pack</strong>
            <span style={{ fontSize: "14px", color: "#666" }}>Great for growing teams</span>
          </div>
        </RadioGroup.Item>
      </>
    )
  }
};
