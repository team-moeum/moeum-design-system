import * as TabsBase from "@radix-ui/react-tabs";
import "./Tabs.scss";

const Root = ({ ...props }: TabsBase.TabsProps) => {
  return <TabsBase.Root data-moeum-component="Tabs" className="tabs" {...props} />;
};

const List = ({ ...props }: TabsBase.TabsListProps) => {
  return <TabsBase.List data-moeum-component="TabsList" className="tabs--list" {...props} />;
};

const Trigger = ({ ...props }: TabsBase.TabsTriggerProps) => {
  return (
    <TabsBase.Trigger data-moeum-component="TabsTrigger" className="tabs--trigger" {...props} />
  );
};

const Content = ({ ...props }: TabsBase.TabsContentProps) => {
  return (
    <TabsBase.Content data-moeum-component="TabsContent" className="tabs--content" {...props} />
  );
};

export { Root, List, Trigger, Content };
