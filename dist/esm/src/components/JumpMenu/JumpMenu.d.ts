import * as React from "react";
import { BoxProps as MuiBoxProps } from "@mui/material";
type JumpMenuItems = {
    label?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
};
export type JumpMenuProps = MuiBoxProps & {
    attachment?: "left" | "right";
    items?: Array<JumpMenuItems>;
};
export declare function JumpMenu(props: JumpMenuProps): import("react/jsx-runtime").JSX.Element;
export declare namespace JumpMenu {
    var defaultProps: {
        attachment: string;
    };
    var displayName: string;
}
export {};
//# sourceMappingURL=JumpMenu.d.ts.map