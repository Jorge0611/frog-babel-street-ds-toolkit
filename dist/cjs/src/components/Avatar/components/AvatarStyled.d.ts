import React from "react";
declare const AvatarStyled: import("@emotion/styled").StyledComponent<{
    alt?: string | undefined;
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").AvatarClasses> | undefined;
    imgProps?: (React.ImgHTMLAttributes<HTMLImageElement> & {
        sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    }) | undefined;
    sizes?: string | undefined;
    src?: string | undefined;
    srcSet?: string | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"square" | "circular" | "rounded", import("@mui/material").AvatarPropsVariantOverrides> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "children" | "sx" | "variant" | keyof import("@mui/material/OverridableComponent").CommonProps | "sizes" | "alt" | "src" | "srcSet" | "imgProps"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    size?: "large" | "medium" | "small" | undefined;
    name?: string | undefined;
    group?: {
        name: string;
        img: string;
        userOnline: boolean;
    }[] | undefined;
    groupMax?: number | undefined;
    userOnline?: boolean | undefined;
    role?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
}, {}, {}>;
export default AvatarStyled;
//# sourceMappingURL=AvatarStyled.d.ts.map