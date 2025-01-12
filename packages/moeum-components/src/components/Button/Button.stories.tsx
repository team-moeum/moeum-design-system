import type { Meta, StoryObj } from "@storybook/react";
import Google from "./assets/google.svg?react";
import Apple from "./assets/apple.svg?react";
import Kakao from "./assets/kakao.svg?react";

import { Button } from ".";
import { Text } from "../Text";
import { Flex } from "../layout/Flex";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "버튼 사이즈"
    },
    style: {
      description: "버튼 스타일"
    },
    display: {
      description: "버튼 Display"
    },
    type: {
      description: "버튼 타입"
    },
    loading: {
      description: "로딩 상태"
    },
    disabled: {
      description: "비활성화 상태"
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonSNS: Story = {
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
      <Button type="solid-base" size="md" color="#391B1B" backgroundColor="#FAE300">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Kakao />
          <Text>Kakao로 로그인</Text>
        </Flex>
      </Button>
      <Button type="solid-base" size="md" color="#FFFFFF" backgroundColor="#191B1C">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Apple />
          <Text>Apple로 로그인</Text>
        </Flex>
      </Button>
      <Button type="solid-base" size="md" color="#191B1C" backgroundColor="#FFFFFF">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Google />
          <Text> Google로 로그인</Text>
        </Flex>
      </Button>
    </div>
  )
};

export const ButtonSolid: Story = {
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
      <Button type="solid-green" size="md">
        solid-green
      </Button>
      <Button type="solid-green" size="md" disabled>
        solid-green disabled
      </Button>
      <Button type="solid-green" size="md" loading>
        solid-green loading
      </Button>
      <Button type="solid-red" size="md">
        solid-red
      </Button>
      <Button type="solid-red" size="md" disabled>
        solid-red disabled
      </Button>
      <Button type="solid-red" size="md" loading>
        solid-red loading
      </Button>
    </div>
  )
};

export const ButtonOutline: Story = {
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
      <Button type="outline-green" size="md">
        outline-green
      </Button>
      <Button type="outline-green" size="md" disabled>
        outline-green disabled
      </Button>
      <Button type="outline-green" size="md" loading>
        outline-green loading
      </Button>
      <Button type="outline-gray" size="md">
        outline-gray
      </Button>
      <Button type="outline-gray" size="md" disabled>
        outline-gray disabled
      </Button>
      <Button type="outline-gray" size="md" loading>
        outline-gray loading
      </Button>
    </div>
  )
};

export const ButtonText: Story = {
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
      <Button type="text-none" size="md">
        text-none
      </Button>
      <Button type="text-none" size="md" disabled>
        text-none disabled
      </Button>
      <Button type="text-none" size="md" loading>
        text-none loading
      </Button>
    </div>
  )
};
