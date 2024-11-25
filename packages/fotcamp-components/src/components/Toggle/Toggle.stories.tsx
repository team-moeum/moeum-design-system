import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from ".";

const meta = {
  title: "Toggle",
  component: Toggle.Root,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    defaultPressed: {
      control: "boolean",
      description: "토글의 초기 상태를 설정합니다"
    },
    pressed: {
      control: "boolean",
      description: "토글의 현재 상태를 설정합니다"
    },
    disabled: {
      control: "boolean",
      description: "토글의 비활성화 상태를 설정합니다"
    },
    onPressedChange: {
      action: "pressed changed",
      description: "토글 상태가 변경될 때 호출되는 콜백 함수"
    },
    asChild: {
      control: "boolean",
      description: "자식 엘리먼트를 토글의 루트 엘리먼트로 사용할지 여부"
    }
  }
} satisfies Meta<typeof Toggle.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Toggle Button",
    defaultPressed: false,
    disabled: false
  }
};

export const Pressed: Story = {
  args: {
    children: "Pressed Toggle",
    defaultPressed: true,
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    children: "Disabled Toggle",
    defaultPressed: false,
    disabled: true
  }
};

export const CustomContent: Story = {
  args: {
    children: (
      <div style={{ padding: "8px 16px", border: "1px solid #ccc", borderRadius: "4px" }}>
        Custom Toggle Content
      </div>
    ),
    defaultPressed: false
  }
};
