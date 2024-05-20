import * as React from "react";
import { MenuProps } from "@mui/material";
type CardMenuProps = MenuProps & {
    children: React.ReactNode;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
};
export declare function CardMenu(props: CardMenuProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardMenu {
    var displayName: string;
}
export {};
//# sourceMappingURL=CardMenu.d.ts.map