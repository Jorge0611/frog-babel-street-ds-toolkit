import React from "react";
import { peopleFormType, peopleFormValidationType, AdditionalSearchOption, peopleSearchOptionsType } from "../Search";
import { ChipType } from "../../ChipBooleanSearch/ChipBooleanSearch";
import { stateCodeType } from "../data/state_codes";
export type PeopleSearchType = {
    peopleSearchFocusRef?: React.RefObject<HTMLInputElement>;
    peopleFormState: peopleFormType;
    updatePeopleFormState: (value: peopleFormType) => void;
    clearPeopleForm: () => void;
    addPeopleChips: (peopleFormInfo: peopleFormType, executeSearchCallback?: {
        (formState: ChipType[]): void;
    } | undefined) => void;
    peopleFormValidationState: peopleFormValidationType;
    handleEnterKeyPressed?: () => void;
    peopleSearchOptionsState: peopleSearchOptionsType;
    updatePeopleSearchOptions: (value: string) => void;
    handleOnAdditionalPeopleInputChange: (newValue: string | number | stateCodeType, inputName: keyof Omit<peopleSearchOptionsType, "options">) => void;
    showBulkSearchSection?: boolean;
    QuotaComponent?: React.FunctionComponent;
    searchOptions?: AdditionalSearchOption[];
};
export declare const PeopleSearch: (props: PeopleSearchType) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PeopleSearch.d.ts.map