import { useRef } from "react";
import { TabsProps } from "./Tabs.type";
import { List, Root, Trigger, Content } from "./TabsBase";
import { useTabsIndicator } from "./useTabsIndicator";

const Tabs: React.FC<TabsProps> = props => {
  const { width = "100%", tabItems, value, ...rest } = props;
  const listRef = useRef<HTMLDivElement>(null);
  const { indicatorStyle } = useTabsIndicator({ listRef });

  return (
    <Root value={value} {...rest} style={{ width }}>
      <div ref={listRef} className="tabs--list-wrapper">
        <List data-orientation="horizontal">
          {tabItems.map(item => (
            <Trigger key={`tabTrigger_${item.value}`} value={item.value}>
              {item.text}
            </Trigger>
          ))}
        </List>
        <div className="tabs--indicator" style={indicatorStyle} />
      </div>
      {tabItems.map(item => (
        <Content key={`tabContent_${item.value}`} value={item.value}>
          {item.content}
        </Content>
      ))}
    </Root>
  );
};

export { Tabs };
