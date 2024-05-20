import React from "react";
import { dropdownStateType, searchOptionsType, peopleFormType, peopleFormValidationType } from "./Search";
import type { TimeZoneProps, peopleSearchOptionsType, AdditionalSearchOption } from "./Search";
import { ChipType } from "../ChipBooleanSearch/ChipBooleanSearch";
import { Dayjs } from "dayjs";
import { stateCodeType } from "./data/state_codes";
export type SearchOptionsSection = {
    withSelect?: boolean;
    textInputState: string;
    clearSearchInputText: () => void;
    searchCategoryLabel: string;
    updateDropdownState: (value: dropdownStateType) => void;
    dropdownState: dropdownStateType;
    searchOptionsState: searchOptionsType;
    updateSearchOptionsState: (value: searchOptionsType) => void;
    peopleSearchFocusRef?: React.RefObject<HTMLInputElement>;
    peopleFormState: peopleFormType;
    updatePeopleFormState: (value: peopleFormType) => void;
    clearPeopleForm: () => void;
    addInputTextDocChip: (vaue: string) => void;
    addPeopleChips: (peopleFormInfo: peopleFormType, executeSearchCallback?: {
        (formState: ChipType[]): void;
    } | undefined) => void;
    peopleFormValidationState: peopleFormValidationType;
    startDateCallback: (startDate: Dayjs | null) => void;
    endDateCallback: (endDate: Dayjs | null) => void;
    handlePeopleSearchEnterKeyPressed?: () => void;
    updatePeopleSearchOptions: (value: string) => void;
    peopleSearchOptionsState: peopleSearchOptionsType;
    handleOnAdditionalPeopleInputChange: (newValue: string | number | stateCodeType, inputName: keyof Omit<peopleSearchOptionsType, "options">) => void;
    onMultiLingualSmartSearchChange?: (value: boolean) => void;
    timeZone?: TimeZoneProps;
    searchOptions?: AdditionalSearchOption[];
    OutOfQuotaMessageComponent?: React.FunctionComponent;
};
export declare const SearchOptionsSection: (props: SearchOptionsSection) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchOptionsSection.d.ts.map