import type { Meta, StoryObj } from "@storybook/react";
import * as Accordion from "./Accordion";

const meta = {
  title: "Components/Accordian",
  component: Accordion.Root,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["sigle", "multiple"],
      description: "아이템 단일/복수 열림을 지정합니다."
    },
    collapsible: {
      control: "boolean",
      description: "아이템 스스로 닫힐 수 있는지 설정합니다."
    },
    disabled: {
      control: "boolean",
      description: "아코디언 비활성 여부를 설정합니다."
    },
    defaultValue: {
      control: "select",
      options: ["item-1", "item-2", "item-3"],
      description: "초기 값을 설정합니다."
    }
  }
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    disabled: false,
    defaultValue: "item-1"
  },
  render: args => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Item1-1127-cd-test</Accordion.Trigger>
        <Accordion.Content>Item1 Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Item2</Accordion.Trigger>
        <Accordion.Content>Items2 Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Item3</Accordion.Trigger>
        <Accordion.Content>Item3 Content</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
};

export const Multiple: Story = {
  args: {
    type: "multiple"
  },
  render: args => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Item1</Accordion.Trigger>
        <Accordion.Content>Item1 Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Item2</Accordion.Trigger>
        <Accordion.Content>Items2 Content</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
};

export const WithCallBack: Story = {
  args: {
    type: "single",
    collapsible: true,
    onValueChange: (value: string) => {
      console.log("Selected value:", value);
    }
  },
  render: args => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Item1</Accordion.Trigger>
        <Accordion.Content>Item1 Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Item2</Accordion.Trigger>
        <Accordion.Content>Items2 Content</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
};
