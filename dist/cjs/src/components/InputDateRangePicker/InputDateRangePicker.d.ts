import { Dayjs } from "dayjs";
import { DateRangePickerProps as MuiDateRangePickerProps } from "@mui/x-date-pickers-pro";
import { TimeZoneProps } from "../Search/Search";
export interface InputDateRangePickerProps<TDayjs> extends Omit<MuiDateRangePickerProps<Dayjs | null, Dayjs | null>, "renderInput"> {
    variant?: string;
    error?: boolean;
    errorMsg?: string;
    helperText?: string;
    timeZone?: TimeZoneProps;
    stacked?: boolean;
    startDateCallback: (date: Dayjs | null) => void;
    endDateCallback: (date: Dayjs | null) => void;
}
export declare function InputDateRangePicker<TDayjs>(props: InputDateRangePickerProps<TDayjs>): import("react/jsx-runtime").JSX.Element;
export declare namespace InputDateRangePicker {
    var displayName: string;
}
//# sourceMappingURL=InputDateRangePicker.d.ts.map