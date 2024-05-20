import { FormGroupProps as MuiFormGroupProps } from "@mui/material";
export type InputCheckboxGroupProps = MuiFormGroupProps & {
    error?: boolean;
    errorMsg?: string;
    compact?: boolean;
};
export declare function InputCheckboxGroup(props: InputCheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace InputCheckboxGroup {
    var defaultProps: {
        compact: boolean;
    };
    var displayName: string;
}
//# sourceMappingURL=InputCheckboxGroup.d.ts.map