import * as React from "react";
import { MenuProps as MuiMenuProps, MenuItemProps as MuiMenuItemProps } from "@mui/material";
import { ProgressProps } from "../../index";
type CustomMenuProps = {
    toggleElem: React.ReactNode;
    dense?: boolean;
    displayAsNav?: boolean;
    menuMaxHeight?: number;
    menuWidth?: number | string;
    withAccessQuota?: boolean;
    withDividers?: boolean;
};
export type MenuItemObject = Pick<MuiMenuProps, "anchorOrigin" | "transformOrigin"> & Omit<CustomMenuProps, "toggleElem" | "displayAsNav"> & {
    title: string | React.ReactFragment;
    divider?: boolean;
    topDivider?: boolean;
    header?: boolean;
    footer?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    subtitle?: string;
    unread?: boolean;
    menuItems?: MenuItemObject[];
    listItems?: MenuItemObject[];
    progressIndicator?: React.ReactNode & {
        props: ProgressProps;
    };
};
export type MenuProps = Omit<MuiMenuProps, "open"> & {
    menuItems: MenuItemObject[];
    displayAsNav?: boolean;
    withDividers?: boolean;
    withAccessQuota?: boolean;
};
export type MenuItemProps = MuiMenuItemProps & {
    displayAsNav?: boolean;
    withAccessQuota?: boolean;
};
export type MenuContainerProps = MenuProps & CustomMenuProps;
export declare function Menu(props: MenuContainerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Menu {
    var displayName: string;
}
export {};
//# sourceMappingURL=Menu.d.ts.map