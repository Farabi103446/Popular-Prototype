"use client";

import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <ShadcnAccordion type="single" collapsible defaultValue="item-0" className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-[15px]">{item.title}</AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
}
