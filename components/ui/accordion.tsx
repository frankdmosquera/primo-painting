"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b lg:py-3.5 py-2 last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-[22px] font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-90",
          className
        )}
        {...props}
      >
        {children}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform"
        >
          <path
            d="M23.5 2.19995C23.5 1.37152 22.8284 0.69995 22 0.699951L8.5 0.69995C7.67157 0.69995 7 1.37152 7 2.19995C7 3.02838 7.67157 3.69995 8.5 3.69995H20.5V15.6999C20.5 16.5284 21.1716 17.1999 22 17.1999C22.8284 17.1999 23.5 16.5284 23.5 15.6999L23.5 2.19995ZM3.06066 23.2606L23.0607 3.26058C23.4512 2.87006 23.4512 2.24009 23.0607 1.84957C22.6702 1.45905 22.0402 1.45905 21.6497 1.84957L1.64975 21.8496C1.25924 22.2401 1.25924 22.8701 1.64975 23.2606C2.04026 23.6511 2.67023 23.6511 3.06066 23.2606Z"
            fill="currentColor"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn("overflow-hidden text-base text-gray-400", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
