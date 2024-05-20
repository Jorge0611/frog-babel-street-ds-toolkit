import { ChipType } from "../../ChipBooleanSearch/ChipBooleanSearch";
import { AdditionalSearchOption } from "../Search";
interface IUpdatePeopleSearchOptionsProps {
    optionToToggle: string;
    searchOptions: AdditionalSearchOption[];
    setSearchOptions: (searchOptions: AdditionalSearchOption[]) => void;
    setSelectedAdditionalSearchOptionRequiringNoticeOfUse: (searchOption: AdditionalSearchOption) => void;
    searchState: ChipType[];
    setSearchState: (value: ChipType[]) => void;
}
export default function UpdatePeopleSearchOptions(props: IUpdatePeopleSearchOptionsProps): void;
interface IUpdateSearchOptionsProps {
    searchOption: AdditionalSearchOption;
    searchOptions: AdditionalSearchOption[];
    setSearchOptions: (searchOptions: AdditionalSearchOption[]) => void;
    isSelected: boolean;
    searchState: ChipType[];
    setSearchState: (value: ChipType[]) => void;
}
export declare function UpdateSearchOptions(props: IUpdateSearchOptionsProps): void;
export declare function sortOptionsAlphabetically(a: AdditionalSearchOption, b: AdditionalSearchOption): number;
export {};
//# sourceMappingURL=UpdatePeopleSearchOptions.d.ts.map