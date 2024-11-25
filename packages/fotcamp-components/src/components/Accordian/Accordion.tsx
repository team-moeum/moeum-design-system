import * as AccordionBase from "@radix-ui/react-accordion";
import * as AccordinaProps from "./Accordion.type";

const Root = ({ ...props }: AccordinaProps.RootProps) => (
  <AccordionBase.Root data-fotcamp-component="Accordion" {...props} />
);

const Item = ({ children, ...props }: AccordinaProps.ItemProps) => (
  <AccordionBase.Item className="accordion-item" data-fotcamp-component="AccordionItem" {...props}>
    {children}
  </AccordionBase.Item>
);

const Trigger = ({ children, ...props }: AccordinaProps.TriggerProps) => (
  <AccordionBase.Header className="flex">
    <AccordionBase.Trigger
      className="accordion-trigger"
      data-fotcamp-component="AccordionTrigger"
      {...props}
    >
      {children}
    </AccordionBase.Trigger>
  </AccordionBase.Header>
);

const Content = ({ children, ...props }: AccordinaProps.ContentProps) => (
  <AccordionBase.Content
    className="accordion-content"
    data-fotcamp-component="AccordionContent"
    {...props}
  >
    {children}
  </AccordionBase.Content>
);

export { Root, Item, Trigger, Content };
