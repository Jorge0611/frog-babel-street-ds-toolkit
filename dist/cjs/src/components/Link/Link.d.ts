import * as React from "react";
import { LinkProps as MuiLinkProps } from "@mui/material";
export type LinkProps = MuiLinkProps & {
    children?: React.ReactNode;
    type?: string;
};
export declare function Link(props: LinkProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Link {
    var displayName: string;
}
//# sourceMappingURL=Link.d.ts.map