import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs } from "./Tabs";

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
    width: "360px",
    tabItems: [
      { value: "tab1", text: "Tab1", content: <div></div> },
      { value: "tab2", text: "Tab2", content: <div></div> },
      { value: "tab3", text: "Tab3", content: <div></div> }
    ],
    defaultValue: "tab1",
    dir: "ltr"
  },
  render: args => <Tabs {...args} key={`tabs_${args.dir}_${args.defaultValue}`} />
};

export function ControlledTabs() {
  const [value, setValue] = useState<string>("tab1");

  const handleChangeTab = (value: string) => {
    setValue(value);
    console.log("Active Tab: ", value);
  };

  return (
    <div style={{ width: "calc(100vw * 0.5)", minWidth: 320, maxWidth: 540 }}>
      <Tabs
        tabItems={[
          { value: "tab1", text: "Tab1", content: <div>Tab1 Content</div> },
          { value: "tab2", text: "Tab2", content: <div>Tab2 Content</div> },
          { value: "tab3", text: "Tab3", content: <div>Tab3 Content</div> }
        ]}
        defaultValue="tab1"
        value={value}
        onValueChange={handleChangeTab}
      />
    </div>
  );
}
