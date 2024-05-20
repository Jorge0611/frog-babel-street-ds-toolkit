import React from "react";
import { peopleFormType, peopleFormValidationType, AdditionalSearchOption, peopleSearchOptionsType } from "../../Search";
import { ChipType } from "../../../ChipBooleanSearch/ChipBooleanSearch";
import { stateCodeType } from "../../data/state_codes";
export type AdditionalSearchOptionsType = {
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
    showCreditsSection?: boolean;
    searchOptions?: AdditionalSearchOption[];
    inputTextStyleProps: any;
    handleInputKeyUp: (event: React.KeyboardEvent<HTMLInputElement>, name: string) => void;
};
export default function AdditionalSearchOptions(props: AdditionalSearchOptionsType): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AdditionalSearchOptions.d.ts.map