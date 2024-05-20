import React, { RefObject } from "react";
import { ChipType } from "./ChipBooleanSearch";
interface ChipBooleanSearchContentProps {
    maxCharCount?: number;
    chipId: string | number;
    handleChipEditChange?: (newChipInfo: ChipType) => void;
    isEntity?: boolean;
    icon?: React.ReactNode;
    propertyDisplay?: string;
    value?: string;
    displayValue?: string;
    setMenuAnchorEl?: (value: HTMLElement | null) => void;
    chipRef: RefObject<HTMLDivElement>;
    property?: string;
    userEntered?: boolean;
}
export declare const ChipBooleanSearchContent: (props: ChipBooleanSearchContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ChipBooleanSearchContent.d.ts.map