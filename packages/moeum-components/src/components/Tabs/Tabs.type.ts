import * as TabsBase from "@radix-ui/react-tabs";
import { ReactNode, RefObject } from "react";

interface TabItem {
  value: string;
  text: string;
  content: ReactNode;
}

interface TabsProps extends Omit<TabsBase.TabsProps, "children"> {
  width?: string;
  tabItems: TabItem[];
}

interface UseTabsIndicatorProps {
  listRef: RefObject<HTMLDivElement>;
}

export { TabsProps, TabItem, UseTabsIndicatorProps };
