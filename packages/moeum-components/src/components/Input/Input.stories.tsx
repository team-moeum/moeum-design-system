import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Inputs: Story = {
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
      <Input type="text" display="box" />
      <Input type="text" display="box" value="텍스트 입력 완료" />
      <Input type="text" display="box" error value="텍스트 오류" />
      <Input type="text" display="box" disabled />
      <Input type="file" display="box" />
      <Input type="text" display="line" />
      <Input type="text" display="line" value="텍스트 입력 완료" />
      <Input type="text" display="line" error value="텍스트 오류" />
      <Input type="text" display="line" disabled />
      <Input type="file" display="line" />
    </div>
  )
};
