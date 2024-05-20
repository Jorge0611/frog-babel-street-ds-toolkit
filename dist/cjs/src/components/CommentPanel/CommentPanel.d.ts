import { ReactNode } from "react";
import { type AccordionProps } from "../Accordion/Accordion";
export interface CommentPanelProps extends Omit<AccordionProps, "children"> {
    notValid?: boolean;
    invalidScreen?: ReactNode;
    legend?: string;
    comments?: ReactNode[];
    addCommentForm?: ReactNode;
}
export declare function CommentPanel(props: CommentPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CommentPanel.d.ts.map