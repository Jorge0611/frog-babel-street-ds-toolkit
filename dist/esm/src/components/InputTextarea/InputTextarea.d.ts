/// <reference types="react" />
import { TextFieldProps as MuiInputTextProps } from "@mui/material";
export type InputTextareaProps = MuiInputTextProps & {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    readOnly?: boolean;
    border?: boolean;
    eyebrowLabel?: boolean;
    width?: string;
};
export declare const InputTextarea: {
    (props: InputTextareaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputTextarea.d.ts.map