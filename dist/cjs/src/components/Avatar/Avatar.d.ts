import { AvatarGroupProps as MuiAvatarGroupProps, AvatarProps as MuiAvatarProps } from "@mui/material";
import { BadgeProps } from "../Badge/Badge";
export type AvatarProps = MuiAvatarProps & {
    size?: "small" | "medium" | "large";
    name?: string;
    group?: {
        name: string;
        img: string;
        userOnline: boolean;
    }[];
    groupMax?: number;
    userOnline?: boolean;
    role?: string;
    height?: string | number;
    width?: string | number;
};
export type AvatarGroupProps = MuiAvatarGroupProps & {
    size: "small" | "medium" | "large";
    height?: string | number;
    width?: string | number;
};
export type AvatarBadgeStyledProps = BadgeProps & {
    userOnline: boolean;
    size: "small" | "medium" | "large";
};
export declare function Avatar(props: AvatarProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Avatar {
    var displayName: string;
}
//# sourceMappingURL=Avatar.d.ts.map