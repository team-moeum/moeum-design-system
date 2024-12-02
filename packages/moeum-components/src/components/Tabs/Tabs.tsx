import * as TabsBase from "@radix-ui/react-tabs";

const Root = ({ ...props }: TabsBase.TabsProps) => {
  return <TabsBase.Root data-fotcamp-component="Tabs" {...props} />;
};

const List = ({ ...props }: TabsBase.TabsListProps) => {
  return <TabsBase.List data-fotcamp-component="TabsList" {...props} />;
};

const Trigger = ({ ...props }: TabsBase.TabsTriggerProps) => {
  return <TabsBase.Trigger data-fotcamp-component="TabsTrigger" {...props} />;
};

const Content = ({ ...props }: TabsBase.TabsContentProps) => {
  return (
    <TabsBase.Content data-fotcamp-component="TabsContent" className="tabs-content" {...props} />
  );
};

export { Root, List, Trigger, Content };
