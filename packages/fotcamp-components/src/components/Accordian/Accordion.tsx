import { Root, Item, Header, Content, Trigger } from "@radix-ui/react-accordion";
import { AccordionContentProps, AccordionItemProps, AccordionTriggerProps } from "./Accordion.type";

const Accordion = Root;

const AccordionItem = ({ children, ...props }: AccordionItemProps) => (
  <Item className={"accordion-item"} data-fotcamp-component="AccordionItem" {...props}>
    {children}
  </Item>
);

const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
  <Header className="flex">
    <Trigger className="accordion-trigger" data-fotcamp-component="AccordionTrigger" {...props}>
      {children}
    </Trigger>
  </Header>
);

const AccordionContent = ({ children, ...props }: AccordionContentProps) => (
  <Content className="accordion-content" data-fotcamp-component="AccordionContent" {...props}>
    {children}
  </Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
