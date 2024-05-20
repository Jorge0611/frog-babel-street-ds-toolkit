import { SxProps, Theme } from "@mui/material";
import React from "react";
export type StaticListItemProps = {
    title?: React.ReactNode;
    titleIcon?: React.ReactNode;
    itemType?: string;
    itemMeta?: string;
    children?: React.ReactNode;
};
export type StaticListProps = {
    children?: React.ReactNode;
    listItems?: StaticListItemProps[];
    label?: string;
    sx?: SxProps<Theme> | undefined;
    stickyHeaders?: boolean;
};
export declare function StaticList(props: StaticListProps): import("react/jsx-runtime").JSX.Element;
export declare namespace StaticList {
    var displayName: string;
}
//# sourceMappingURL=StaticList.d.ts.map