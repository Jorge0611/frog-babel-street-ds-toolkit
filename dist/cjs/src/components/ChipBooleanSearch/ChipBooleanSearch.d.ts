import React from "react";
import { ChipProps as MuiChipProps } from "@mui/material";
export interface ChipType {
    id: string | number;
    property?: string;
    value?: string;
    displayValue?: string;
    count?: number;
    searchType?: null | string;
    isEntity?: boolean;
    propertyDisplay?: string;
    userEntered?: boolean;
    preserveSelectedSearchTypeForPill?: boolean;
    showAllMenuOptions?: boolean;
}
export type ChipBooleanSearchProps = MuiChipProps & {
    maxCharCount?: number;
    readOnly?: boolean;
    isEntity?: boolean;
    chipId: string | number;
    property?: string;
    value?: string;
    displayValue?: string;
    disableRipple?: boolean;
    searchType: string | null;
    handleChipEditChange?: (newChipInfo: ChipType) => void;
    userEntered?: boolean;
    isDocSearch?: boolean;
    showAllMenuOptions?: boolean;
    pillTextMapping?: Record<string, string>;
};
export type menuOptionType = {
    id: string;
    name: string;
    icon: React.ReactNode;
};
export declare const ChipBooleanSearch: React.MemoExoticComponent<(props: ChipBooleanSearchProps) => import("react/jsx-runtime").JSX.Element>;
//# sourceMappingURL=ChipBooleanSearch.d.ts.map