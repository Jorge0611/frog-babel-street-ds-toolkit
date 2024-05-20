import * as React from "react";
import { ListProps as MuiListProps } from "@mui/material";
import { ListItemButtonProps } from "@mui/material/ListItemButton";
export type ListProps = MuiListProps & {
    children?: React.ReactNode;
    listItems?: RenderItemProps[];
    label?: string;
    withDividers?: boolean;
    selectedItem?: number;
    checkboxList?: boolean;
    variant?: "default" | "collapse" | "photos";
    isOpen?: boolean;
    disableSticky?: boolean;
};
export type RenderItemProps = ListItemButtonProps & ItemProps;
export type ItemProps = {
    text: string;
    onClick?: () => void;
    Icon?: any;
    iconColor?: string;
    withDividers?: boolean;
    selected: boolean;
    setSelected: Function;
    index: number;
    checkboxList?: boolean;
    disabled?: boolean;
    image?: string;
};
export declare function List(props: ListProps): import("react/jsx-runtime").JSX.Element;
export declare namespace List {
    var displayName: string;
}
//# sourceMappingURL=List.d.ts.map