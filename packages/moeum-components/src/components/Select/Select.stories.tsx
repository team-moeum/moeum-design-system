import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta = {
  title: "Select",
  component: Select.Root,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof Select.Root>;

export const Default: Story = {
  render: args => (
    <Select.Root defaultValue="apple" {...args}>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">
                <Select.ItemText>Apple</Select.ItemText>
              </Select.Item>
              <Select.Item value="banana">
                <Select.ItemText>Banana</Select.ItemText>
              </Select.Item>
              <Select.Item value="orange">
                <Select.ItemText>Orange</Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
};
