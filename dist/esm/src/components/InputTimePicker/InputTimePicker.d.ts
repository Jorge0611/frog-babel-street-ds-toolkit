import { FormLabelProps as MuiFormLabelProps } from "@mui/material";
import { TimePickerProps as MuiTimePickerProps } from "@mui/x-date-pickers-pro";
export interface InputTimePickerProps<TInputDate, TDate> extends MuiTimePickerProps<TInputDate, TDate> {
    variant?: any;
    error?: boolean;
    errorMsg?: string;
    helperText?: string;
    eyebrowLabel?: boolean;
    size?: string;
}
export type FormLabelProps = MuiFormLabelProps & {
    size?: string;
};
export declare function InputTimePicker<TInputDate, TDate>(props: InputTimePickerProps<TInputDate, TDate>): import("react/jsx-runtime").JSX.Element;
export declare namespace InputTimePicker {
    var displayName: string;
}
//# sourceMappingURL=InputTimePicker.d.ts.map