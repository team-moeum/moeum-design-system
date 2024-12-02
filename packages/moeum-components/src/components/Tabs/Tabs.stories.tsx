import type { Meta, StoryObj } from "@storybook/react";
import * as Tabs from "./Tabs";
import { useState } from "react";

/**
 * **radix docs**
 * https://www.radix-ui.com/primitives/docs/components/tabs
 */
const meta = {
  title: "Components/Tabs",
  component: Tabs.Root,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
      description: "활성화 할 value"
    },
    onValueChange: {
      control: "object",
      description: "value 이벤트 핸들러"
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "tab의 읽기 방향을 지정"
    },
    defaultValue: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
      description: "초기 활성 tab 값을 설정"
    }
  }
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dir: "ltr"
  },
  render: args => (
    <Tabs.Root {...args}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Tab1 Content</Tabs.Content>
      <Tabs.Content value="tab2">Tab2 Content</Tabs.Content>
      <Tabs.Content value="tab3">Tab3 Content</Tabs.Content>
    </Tabs.Root>
  )
};

export function ControlledTabs() {
  const [value, setValue] = useState<string>("tab1");

  const handleChangeTab = (value: string) => {
    setValue(value);
    console.log("Active Tab: ", value);
  };

  return (
    <Tabs.Root value={value} onValueChange={handleChangeTab}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Tab1 Content</Tabs.Content>
      <Tabs.Content value="tab2">Tab2 Content</Tabs.Content>
      <Tabs.Content value="tab3">Tab3 Content</Tabs.Content>
    </Tabs.Root>
  );
}
