import { dropdownStateType, searchOptionsType } from "../Search";
import "./DocumentSearchWithin.scss";
export type DocumentSearchWithinType = {
    searchOptionsState: searchOptionsType;
    updateSearchOptionsState: (value: searchOptionsType) => void;
    dropdownState: dropdownStateType;
    updateDropdownState: (value: dropdownStateType) => void;
    textInputState: string;
    addInputTextDocChip: (value: string) => void;
    clearSearchInputText: () => void;
};
export declare const searchWithinOptions: {
    name: string;
    chipText: string;
    type: string;
}[];
export declare const getSearchWithinDisplayAttribute: (searchWithinAttribute: string | undefined) => string | undefined;
export declare const DocumentSearchWithin: (props: DocumentSearchWithinType) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DocumentSearchWithin.d.ts.map