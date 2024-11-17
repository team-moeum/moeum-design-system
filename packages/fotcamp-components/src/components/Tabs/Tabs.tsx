import {
  Root,
  List,
  Trigger,
  Content,
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps
} from "@radix-ui/react-tabs";

const Tabs = ({ ...props }: TabsProps) => {
  return <Root data-fotcamp-component="Tabs" {...props} />;
};

const TabsList = ({ ...props }: TabsListProps) => {
  return <List data-fotcamp-component="TabsList" {...props} />;
};

const TabsTrigger = ({ ...props }: TabsTriggerProps) => {
  return <Trigger data-fotcamp-component="TabsTrigger" {...props} />;
};

const TabsContent = ({ ...props }: TabsContentProps) => {
  return <Content data-fotcamp-component="TabsContent" className="tabs-content" {...props} />;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
