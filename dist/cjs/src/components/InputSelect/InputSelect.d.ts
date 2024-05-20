/// <reference types="react" />
import { SelectProps as MuiSelectProps, FormControlProps as MuiFormControlProps, FormLabelProps as MuiFormLabelProps } from "@mui/material";
export type InputSelectItem = {
    id: string;
    name: string;
    eyebrowText?: string;
};
export type InputSelectProps = MuiSelectProps & {
    helperText?: string;
    errorMsg?: string;
    label?: string;
    variant?: string;
    startIcon?: JSX.Element;
    eyebrowLabel?: boolean;
    border?: boolean;
    valuesList?: string[] | InputSelectItem[];
    placeholder?: string;
    itemOnClick?: (selection: string | InputSelectItem) => void;
    hideBackdrop?: boolean;
    fullLengthItems?: boolean;
};
export type FormControlProps = MuiFormControlProps & {
    startIcon?: JSX.Element;
    size?: string;
};
export type FormLabelProps = MuiFormLabelProps & {
    size?: string;
};
export declare function InputSelect(props: InputSelectProps): import("react/jsx-runtime").JSX.Element;
export declare namespace InputSelect {
    var displayName: string;
}
//# sourceMappingURL=InputSelect.d.ts.map