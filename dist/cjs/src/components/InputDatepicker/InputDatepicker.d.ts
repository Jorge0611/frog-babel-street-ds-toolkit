import { FormLabelProps as MuiFormLabelProps } from "@mui/material";
import { DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers-pro";
export interface InputDatepickerProps<TInputDate, TDate> extends MuiDatePickerProps<TInputDate, TDate> {
    size?: string;
    variant?: any;
    error?: boolean;
    errorMsg: string;
    helperText?: string;
    eyebrowLabel?: boolean;
}
export type FormLabelProps = MuiFormLabelProps & {
    size?: string;
};
export declare function InputDatepicker<TInputDate, TDate>(props: InputDatepickerProps<TInputDate, TDate>): import("react/jsx-runtime").JSX.Element;
export declare namespace InputDatepicker {
    var displayName: string;
}
//# sourceMappingURL=InputDatepicker.d.ts.map