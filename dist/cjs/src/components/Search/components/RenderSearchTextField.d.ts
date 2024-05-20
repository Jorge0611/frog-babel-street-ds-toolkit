import { AutocompleteRenderInputParams } from "@mui/material";
import React from "react";
import { SearchCategoryType } from "./SearchSelect";
import { ChipType } from "../../..";
import { dropdownStateType, searchOptionsType } from "../Search";
type RenderSearchTextFieldProps = {
    params: AutocompleteRenderInputParams;
    inputSearchRef: React.MutableRefObject<undefined>;
    onTabPress: (inputText: string) => void;
    textInputState: string;
    searchCategory: SearchCategoryType;
    searchState: ChipType[] | undefined;
    open: boolean | undefined;
    searchOptionsState: searchOptionsType;
    updateSearchOptionsState: (newSearchOptionsInfo: searchOptionsType) => void;
    dropdownState: dropdownStateType;
    handleChipEditChange: (newChipInfo: ChipType) => void;
};
declare const RenderSearchTextField: ({ params, inputSearchRef, onTabPress, textInputState, searchCategory, searchState, open, searchOptionsState, updateSearchOptionsState, dropdownState, handleChipEditChange, }: RenderSearchTextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default RenderSearchTextField;
//# sourceMappingURL=RenderSearchTextField.d.ts.map