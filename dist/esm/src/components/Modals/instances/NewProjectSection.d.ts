import { InputTextareaProps, InputTextProps } from "../../../index";
export interface NewProjectSectionProps {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    name?: string;
    description?: string;
    error?: boolean;
    errorMsg?: string;
    setName?: InputTextProps["onChange"];
    setDescription?: InputTextareaProps["onChange"];
}
export declare function NewProjectSection(props: NewProjectSectionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NewProjectSection.d.ts.map