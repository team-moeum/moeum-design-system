import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from ".";

const meta = {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: ["on", "off"],
      description: "토글의 현재 상태를 설정합니다"
    },
    disabled: {
      control: "boolean",
      description: "토글의 비활성화 상태를 설정합니다"
    },
    onChange: {
      action: "pressed changed",
      description: "토글 상태가 변경될 때 호출되는 콜백 함수"
    }
  }
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Toggles: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center"
      }}
    >
      <Toggle status="on" />
      <Toggle status="off" />
      <Toggle disabled="on" />
    </div>
  )
};
