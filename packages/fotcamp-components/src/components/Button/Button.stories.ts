import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import {
  ButtonDisplay,
  ButtonSize,
  ButtonStyle,
  ButtonType,
} from "./Button.type";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: Object.values(ButtonSize),
      description: "버튼 사이즈",
    },
    style: {
      control: "select",
      options: Object.values(ButtonStyle),
      description: "버튼 스타일",
    },
    display: {
      control: "select",
      options: Object.values(ButtonDisplay),
      description: "버튼 Display",
    },
    type: {
      control: "select",
      options: Object.values(ButtonType),
      description: "버튼 타입",
    },
    loading: {
      control: "select",
      options: [false, true],
      description: "로딩 상태",
    },
    disabled: {
      control: "select",
      options: [false, true],
      description: "비활성화 상태",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: ButtonSize.LARGE,
    children: "button",
  },
};
