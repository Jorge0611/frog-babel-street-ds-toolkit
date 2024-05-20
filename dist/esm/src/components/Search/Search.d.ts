import React from "react";
import "./Search.scss";
import { IDateRange, InputSelectItem, SearchCategoryType } from "../../index";
import { ChipType } from "../ChipBooleanSearch/ChipBooleanSearch";
import { Dayjs } from "dayjs";
import { stateCodeType } from "./data/state_codes";
import { countryCodeType } from "./data/country_codes";
export type SearchProps = {
    withSelect?: boolean;
    hideScroll?: boolean;
    setSearchState: (value: ChipType[]) => void;
    onCategorySelectCallback?: (category: SearchCategoryType) => void;
    category?: "Documents" | "People" | "Business";
    searchState?: ChipType[];
    autoCompleteData?: ChipType[];
    hasUnsearchedCriteria?: boolean;
    executeSearchCallback: (searchState: SearchState | null) => void;
    startDate?: null | Dayjs;
    endDate?: null | Dayjs;
    timeZone?: TimeZoneProps;
    startDateCallback: (startDate: Dayjs | null) => void;
    endDateCallback: (endDate: Dayjs | null) => void;
    showBulkSearchSection?: boolean;
    QuotaComponent?: React.FunctionComponent;
    OutOfQuotaMessageComponent?: React.FunctionComponent;
    searchButtonIsDisabled?: boolean;
    onMultiLingualSmartSearchChange?: (value: boolean) => void;
    entitySearch?: boolean;
    isMenuOpen?: boolean;
    peopleValidationCallback?: (search: string) => Promise<ValidationError[]>;
    additionalSearchOptions?: AdditionalSearchOption[];
    hasPermission?: (permission?: IFeature) => boolean;
    debug?: boolean;
    searchTypeWarningCallback?: (searchTypeWarning: string) => void;
    propertyToTextMappings?: {
        autocompleteSectionTitleMapping: Record<string, string>;
        pillTextMapping: Record<string, string>;
    };
};
export declare const searchCategoryOptions: SearchCategoryType[];
export declare const Search: {
    (props: SearchProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface propertyNameType {
    id: string;
    groupSectionTitle: string;
}
export type searchTypes = "exclude" | "includeAny" | "includeAll" | null;
export type searchWithinTypes = "Document Text" | "Author Information" | "Mentioned URL" | "Document Source URL" | "Avengers" | "Star Wars" | "Locations" | "Famous Actors";
export type searchWithinTypesShortened = "Doc Text" | "Author Info" | "Mentioned URL" | "Doc Source URL";
export interface dropdownStateType {
    open?: boolean;
    showResults?: boolean;
    noOptions?: boolean;
}
export interface searchOptionsType {
    searchTypeSelected?: searchTypes;
    entitySearch?: boolean;
    searchWithin?: searchWithinTypes | searchWithinTypesShortened;
    timeframe?: IDateRange;
}
export interface peopleFormType {
    name?: string;
    username?: string;
    email?: string;
    countryCode?: countryCodeType | null;
    phone?: string;
    address?: string;
    recordId?: string;
    ssn?: string;
    npi?: string;
    dob?: string;
    vehicleStateCode?: stateCodeType;
    vin?: string;
    plateNumber?: string;
}
export interface peopleFormValidationType {
    email?: {
        isValid: boolean;
        validationMessage: string;
    };
    phone?: {
        isValid: boolean;
        validationMessage: string;
    };
    address?: {
        isValid: boolean;
        validationMessage: string;
    };
    ssn?: {
        isValid: boolean;
        validationMessage: string;
    };
    npi?: {
        isValid: boolean;
        validationMessage: string;
    };
    dob?: {
        isValid: boolean;
        validationMessage: string;
    };
    vin?: {
        isValid: boolean;
        validationMessage: string;
    };
    plateNumber?: {
        isValid: boolean;
        validationMessage: string;
    };
    vehicleStateCode?: {
        isValid: boolean;
        validationMessage: string;
    };
}
export type TimeZoneProps = {
    offset: number;
    code: string;
    city: string;
    zone: string;
};
export interface ValidationError {
    message?: string;
    param?: string;
}
export interface peopleSearchOptionsType {
    options: {
        [key: string]: boolean | undefined;
        credit?: boolean;
        criminal?: boolean;
        medical?: boolean;
        internationalPhone?: boolean;
        pep?: boolean;
        watchlist?: boolean;
        vehicleInfo?: boolean;
    };
    ssn?: string;
    npi?: string;
    dob?: string;
    vin?: string;
    plateNumber?: string;
    vehicleStateCode?: stateCodeType;
}
export interface AdditionalSearchOption {
    id: string;
    label: string;
    glbaUseCaseValues?: InputSelectItem[];
    dppaUseCaseValues?: InputSelectItem[];
    selected?: boolean;
    selectedGlbaUseCaseValue?: InputSelectItem;
    selectedDppaUseCaseValue?: InputSelectItem;
    displayOrder?: number;
}
export interface SearchState {
    chips: ChipType[];
    additionalSearchOptions?: AdditionalSearchOption[];
}
export type IDateType = Date | Dayjs | string | null;
export type IFeature = "omnisearchLocationDropdown";
//# sourceMappingURL=Search.d.ts.map