import { Dayjs } from "dayjs";
import "./DocumentSearchFilters.scss";
import { TimeZoneProps, searchOptionsType } from "../../Search/Search";
export type DocumentSearchFiltersType = {
    searchOptionsState: searchOptionsType;
    updateSearchOptionsState: (value: searchOptionsType) => void;
    startDateCallback: (startDate: Dayjs | null) => void;
    endDateCallback: (endDate: Dayjs | null) => void;
    onMultiLingualSmartSearchChange?: (value: boolean) => void;
    timeZone?: TimeZoneProps;
};
export declare const DocumentSearchFilters: (props: DocumentSearchFiltersType) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DocumentSearchFilters.d.ts.map