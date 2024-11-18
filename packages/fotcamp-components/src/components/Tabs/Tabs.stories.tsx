import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { Button } from "../Button";
import { useState } from "react";

/**
 * **radix docs**
 * https://www.radix-ui.com/primitives/docs/components/tabs
 */
const meta = {
  title: "Components/Tabs",
  component: Tabs,
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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dir: "ltr"
  },
  render: args => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
        <TabsTrigger value="tab3">Tab3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Tab1 Content</TabsContent>
      <TabsContent value="tab2">Tab2 Content</TabsContent>
      <TabsContent value="tab3">Tab3 Content</TabsContent>
    </Tabs>
  )
};

export function ControlledTabs() {
  const [value, setValue] = useState<string>("tab1");

  const handleChangeTab = (value: string) => {
    setValue(value);
    console.log("Active Tab: ", value);
  };

  return (
    <Tabs value={value} onValueChange={handleChangeTab}>
      <TabsList>
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
        <TabsTrigger value="tab3">Tab3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Tab1 Content</TabsContent>
      <TabsContent value="tab2">Tab2 Content</TabsContent>
      <TabsContent value="tab3">Tab3 Content</TabsContent>
    </Tabs>
  );
}
