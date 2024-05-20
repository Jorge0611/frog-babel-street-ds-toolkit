import * as React from "react";
import { MenuProps } from "@mui/material";
import { menuOptionType, ChipType } from "./ChipBooleanSearch";
export type ChipBooleanSearchMenuProps = MenuProps & {
    menuOptions: menuOptionType[];
    chipId: string | number;
    handleChipEditChange?: (newChipInfo: ChipType) => void;
    searchType: string | null;
    setAnchorEl: (value: null | HTMLElement) => void;
};
declare const _default: React.MemoExoticComponent<{
    (props: ChipBooleanSearchMenuProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export default _default;
//# sourceMappingURL=ChipBooleanSearchMenu.d.ts.map