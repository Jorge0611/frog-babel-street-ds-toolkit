import { FormLabelProps as MuiFormLabelProps } from "@mui/material";
import { DateTimePickerProps as MuiDateTimePickerProps } from "@mui/x-date-pickers-pro";
import { TimeZoneProps } from "../../index";
export interface InputDateTimePickerProps<TInputDate, TDate> extends Omit<MuiDateTimePickerProps<TInputDate, TDate>, "renderInput"> {
    variant?: string;
    error?: boolean;
    errorMsg: string;
    helperText?: string;
    eyebrowLabel?: boolean;
    size?: string;
    timeZone?: TimeZoneProps;
}
export type FormLabelProps = MuiFormLabelProps & {
    size?: string;
};
export declare function InputDateTimePicker<TInputDate, TDate>(props: InputDateTimePickerProps<TInputDate, TDate>): import("react/jsx-runtime").JSX.Element;
export declare namespace InputDateTimePicker {
    var displayName: string;
}
//# sourceMappingURL=InputDateTimePicker.d.ts.map