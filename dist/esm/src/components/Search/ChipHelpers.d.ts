import { peopleFormType } from "./Search";
import { ChipType } from "../ChipBooleanSearch/ChipBooleanSearch";
import { stateCodeType } from "./data/state_codes";
import { countryCodeType } from "./data/country_codes";
import { AdditionalSearchOption } from "./Search";
export declare const GetChip: (key: keyof peopleFormType, value: string | countryCodeType | stateCodeType, peopleFormState: peopleFormType) => ChipType;
export declare const ChipAlreadyExists: (newChip: ChipType, chips: ChipType[]) => boolean;
export declare const getValidationPropertyByChipKey: (chip: ChipType) => string | undefined;
export declare const GetKeyOfFieldWhoseValidationIsRequiredForDependentField: (fieldKey: keyof peopleFormType, value: string | countryCodeType | stateCodeType, peopleFormState: peopleFormType) => keyof peopleFormType | undefined;
export declare const optionToFieldsMapping: Record<string, (keyof peopleFormType)[]>;
export declare const ChipIsForAdditionalSearchOptionThatWasToggledOff: (newChip: ChipType, searchOptions: AdditionalSearchOption[]) => boolean;
//# sourceMappingURL=ChipHelpers.d.ts.map