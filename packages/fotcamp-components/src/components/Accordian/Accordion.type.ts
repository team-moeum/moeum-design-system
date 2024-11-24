import * as AccordionPropsBase from "@radix-ui/react-accordion";
import { ComponentProps } from "react";

type RootProps = ComponentProps<typeof AccordionPropsBase.Accordion>;

type ItemProps = AccordionPropsBase.AccordionItemProps;

type TriggerProps = AccordionPropsBase.AccordionTriggerProps;

type ContentProps = AccordionPropsBase.AccordionContentProps;

export { RootProps, ItemProps, TriggerProps, ContentProps };
