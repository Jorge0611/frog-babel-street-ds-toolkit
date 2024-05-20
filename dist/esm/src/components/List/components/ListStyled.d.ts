import React from "react";
declare const ListStyled: import("@emotion/styled").StyledComponent<{
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").ListClasses> | undefined;
    dense?: boolean | undefined;
    disablePadding?: boolean | undefined;
    subheader?: React.ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void) | React.RefObject<HTMLUListElement> | null | undefined;
}, "children" | "sx" | "dense" | keyof import("@mui/material/OverridableComponent").CommonProps | "disablePadding" | "subheader"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    children?: React.ReactNode;
    listItems?: import("../List").RenderItemProps[] | undefined;
    label?: string | undefined;
    withDividers?: boolean | undefined;
    selectedItem?: number | undefined;
    checkboxList?: boolean | undefined;
    variant?: "collapse" | "default" | "photos" | undefined;
    isOpen?: boolean | undefined;
    disableSticky?: boolean | undefined;
}, {}, {}>;
export default ListStyled;
//# sourceMappingURL=ListStyled.d.ts.map