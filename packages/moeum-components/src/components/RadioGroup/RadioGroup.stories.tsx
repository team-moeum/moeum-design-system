import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from ".";

const meta = {
  title: "RadioGroup",
  component: RadioGroup.Root,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1">
      <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
    </RadioGroup.Root>
  )
};

export const Orientation: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1" orientation="horizontal">
      <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
    </RadioGroup.Root>
  )
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1" disabled>
      <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
      <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
    </RadioGroup.Root>
  )
};

export const ItemDisabled: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1">
      <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="option2" disabled>
        Option 2
      </RadioGroup.Item>
      <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
    </RadioGroup.Root>
  )
};
