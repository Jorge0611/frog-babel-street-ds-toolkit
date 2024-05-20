import * as React from "react";
import { ChipProps as MuiChipProps } from "@mui/material";
export type ChipProps = MuiChipProps & {
    labelText: React.ReactNode;
    count?: number;
    selected?: boolean;
    disableRipple?: boolean;
    useConstantTheme?: boolean;
};
export declare const Chip: {
    (props: ChipProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Chip.d.ts.map