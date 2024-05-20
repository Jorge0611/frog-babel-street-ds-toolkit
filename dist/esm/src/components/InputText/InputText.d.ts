import * as React from "react";
import { TextFieldProps as MuiInputTextProps, FormLabelProps as MuiFormLabelProps } from "@mui/material";
export type InputTextProps = MuiInputTextProps & {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    readOnly?: boolean;
    noHelperText?: boolean;
    eyebrowLabel?: boolean;
    border?: boolean;
    errorMsg?: string;
};
export type FormLabelProps = MuiFormLabelProps & {
    size?: string;
};
export declare const HelperTextStyled: import("@emotion/styled").StyledComponent<{
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").FormHelperTextClasses> | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    filled?: boolean | undefined;
    focused?: boolean | undefined;
    margin?: "dense" | undefined;
    required?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"filled" | "outlined" | "standard", import("@mui/material").FormHelperTextPropsVariantOverrides> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | React.RefObject<HTMLParagraphElement> | null | undefined;
}, "children" | "sx" | "margin" | "variant" | "filled" | "disabled" | keyof import("@mui/material/OverridableComponent").CommonProps | "required" | "error" | "focused"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const InputText: {
    (props: InputTextProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputText.d.ts.map