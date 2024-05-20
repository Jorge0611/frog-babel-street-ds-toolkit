import * as React from "react";
import { BadgeProps as MuiBadgeProps } from "@mui/material";
export type BadgeProps = MuiBadgeProps & {
    children?: React.ReactNode;
    badgeContent?: number | string | React.ReactNode;
    dotColor?: string;
    dotFontColor?: string;
};
export declare function Badge(props: BadgeProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Badge {
    var displayName: string;
}
//# sourceMappingURL=Badge.d.ts.map