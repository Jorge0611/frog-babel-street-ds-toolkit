import * as React from "react";
import { AccordionProps as MuiAccordionProps } from "@mui/material";
export type AccordionProps = MuiAccordionProps & {
    labelText: string;
    children: React.ReactNode;
    ariaControls?: string;
    accordionId?: string;
};
export declare const Accordion: {
    (props: AccordionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Accordion.d.ts.map