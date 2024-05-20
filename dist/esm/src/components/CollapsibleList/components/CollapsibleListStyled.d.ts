/// <reference types="react" />
import { CollapsibleListProps } from "../CollapsibleList";
declare const StaticListStyled: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ListClasses> | undefined;
    dense?: boolean | undefined;
    disablePadding?: boolean | undefined;
    subheader?: import("react").ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void) | import("react").RefObject<HTMLUListElement> | null | undefined;
}, "children" | "sx" | "dense" | keyof import("@mui/material/OverridableComponent").CommonProps | "disablePadding" | "subheader"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & CollapsibleListProps, {}, {}>;
export default StaticListStyled;
//# sourceMappingURL=CollapsibleListStyled.d.ts.map