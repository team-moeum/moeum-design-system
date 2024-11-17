import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const meta = {
  title: "Components/Accordian",
  component: Accordion,
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
} satisfies Meta<typeof Accordion>;

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
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item1</AccordionTrigger>
        <AccordionContent>Item1 Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item2</AccordionTrigger>
        <AccordionContent>Items2 Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item3</AccordionTrigger>
        <AccordionContent>Item3 Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};

export const Multiple: Story = {
  args: {
    type: "multiple"
  },
  render: args => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item1</AccordionTrigger>
        <AccordionContent>Item1 Content</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Item2</AccordionTrigger>
        <AccordionContent>Items2 Content</AccordionContent>
      </AccordionItem>
    </Accordion>
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
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item1</AccordionTrigger>
        <AccordionContent>Item1 Content</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Item2</AccordionTrigger>
        <AccordionContent>Items2 Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};
