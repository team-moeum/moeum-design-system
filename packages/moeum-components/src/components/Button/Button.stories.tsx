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
      <Button type="base" size="md" color="#391B1B" backgroundColor="#FAE300">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Kakao />
          <Text>Kakao로 로그인</Text>
        </Flex>
      </Button>
      <Button type="base" size="md" color="#FFFFFF" backgroundColor="#191B1C">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Apple />
          <Text>Apple로 로그인</Text>
        </Flex>
      </Button>
      <Button type="base" size="md" color="#191B1C" backgroundColor="#FFFFFF">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Google />
          <Text> Google로 로그인</Text>
        </Flex>
      </Button>
      <Button type="base" size="lg" color="#391B1B" backgroundColor="#FAE300">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Kakao />
          <Text>Kakao로 로그인</Text>
        </Flex>
      </Button>
      <Button type="base" size="lg" color="#FFFFFF" backgroundColor="#191B1C">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Apple />
          <Text>Apple로 로그인</Text>
        </Flex>
      </Button>
      <Button type="base" size="lg" color="#191B1C" backgroundColor="#FFFFFF">
        <Flex direction="row" align="center" justify="center" gap={8}>
          <Google />
          <Text> Google로 로그인</Text>
        </Flex>
      </Button>
    </div>
  )
};

export const ButtonLarge: Story = {
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
      <Button type="solid-green" size="lg">
        버튼(active, pressed)
      </Button>
      <Button type="solid-red" size="lg">
        버튼(active, pressed)
      </Button>
      <Button type="outline-green" size="lg">
        버튼(active, pressed)
      </Button>
      <Button type="outline-gray" size="lg">
        버튼(active, pressed)
      </Button>
      <Button type="text-none" size="lg">
        버튼(active, pressed)
      </Button>
      <Button type="solid-green" size="lg" disabled>
        버튼(inactive)
      </Button>
      <Button type="solid-red" size="lg" disabled>
        버튼(inactive)
      </Button>
      <Button type="outline-green" size="lg" disabled>
        버튼(inactive)
      </Button>
      <Button type="outline-gray" size="lg" disabled>
        버튼(inactive)
      </Button>
      <Button type="text-none" size="lg" disabled>
        버튼(inactive)
      </Button>
      <Button type="solid-green" size="lg" loading>
        버튼(loading)
      </Button>
      <Button type="solid-red" size="lg" loading>
        버튼(loading)
      </Button>
      <Button type="outline-green" size="lg" loading>
        버튼(loading)
      </Button>
      <Button type="outline-gray" size="lg" loading>
        버튼(loading)
      </Button>
      <Button type="text-none" size="lg" loading>
        버튼(loading)
      </Button>
    </div>
  )
};

export const ButtonMedium: Story = {
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
        버튼(active, pressed)
      </Button>
      <Button type="solid-red" size="md">
        버튼(active, pressed)
      </Button>
      <Button type="outline-green" size="md">
        버튼(active, pressed)
      </Button>
      <Button type="outline-gray" size="md">
        버튼(active, pressed)
      </Button>
      <Button type="text-none" size="md">
        버튼(active, pressed)
      </Button>
      <Button type="solid-green" size="md" disabled>
        버튼(inactive)
      </Button>
      <Button type="solid-red" size="md" disabled>
        버튼(inactive)
      </Button>
      <Button type="outline-green" size="md" disabled>
        버튼(inactive)
      </Button>
      <Button type="outline-gray" size="md" disabled>
        버튼(inactive)
      </Button>
      <Button type="text-none" size="md" disabled>
        버튼(inactive)
      </Button>
      <Button type="solid-green" size="md" loading>
        버튼(loading)
      </Button>
      <Button type="solid-red" size="md" loading>
        버튼(loading)
      </Button>
      <Button type="outline-green" size="md" loading>
        버튼(loading)
      </Button>
      <Button type="outline-gray" size="md" loading>
        버튼(loading)
      </Button>
      <Button type="text-none" size="md" loading>
        버튼(loading)
      </Button>
    </div>
  )
};
