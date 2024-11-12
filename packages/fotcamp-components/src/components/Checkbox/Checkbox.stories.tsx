import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    defaultChecked: {
      control: "boolean",
      description: "체크박스의 초기 상태를 설정합니다"
    },
    checked: {
      control: "boolean",
      description: "체크박스의 현재 상태를 설정합니다"
    },
    disabled: {
      control: "boolean",
      description: "체크박스의 비활성화 상태를 설정합니다"
    },
    required: {
      control: "boolean",
      description: "필수 입력 여부를 설정합니다"
    },
    onCheckedChange: {
      action: "checked changed",
      description: "체크박스 상태가 변경될 때 호출되는 콜백 함수"
    }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <span>✓</span>,
    defaultChecked: false,
    disabled: false
  }
};

export const Checked: Story = {
  args: {
    children: <span>✓</span>,
    defaultChecked: true,
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    children: <span>✓</span>,
    defaultChecked: false,
    disabled: true
  }
};

export const Required: Story = {
  args: {
    children: <span>✓</span>,
    defaultChecked: false,
    required: true
  }
};
