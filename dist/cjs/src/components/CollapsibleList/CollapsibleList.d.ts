import { SxProps, Theme } from "@mui/material";
import React from "react";
export type CollapsibleListItemProps = {
    title?: React.ReactNode;
    titleIcon?: React.ReactNode;
    itemType?: string;
    itemMeta?: string;
};
export type CollapsibleListProps = {
    children?: React.ReactNode;
    listItems?: CollapsibleListItemProps[];
    label?: string;
    isCollapsible?: boolean;
    variant?: any;
    sx?: SxProps<Theme> | undefined;
};
export declare function CollapsibleList(props: CollapsibleListProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CollapsibleList {
    var displayName: string;
}
//# sourceMappingURL=CollapsibleList.d.ts.map