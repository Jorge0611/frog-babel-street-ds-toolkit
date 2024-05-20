/// <reference types="react" />
export declare const MenuStyled: import("@emotion/styled").StyledComponent<import("@mui/material").MenuProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & Omit<import("@mui/material").MenuProps, "open"> & {
    menuItems: import("../Menu").MenuItemObject[];
    displayAsNav?: boolean | undefined;
    withDividers?: boolean | undefined;
    withAccessQuota?: boolean | undefined;
}, {}, {}>;
export declare const MenuItemStyled: import("@emotion/styled").StyledComponent<{
    autoFocus?: boolean | undefined;
    classes?: Partial<import("@mui/material").MenuItemClasses> | undefined;
    dense?: boolean | undefined;
    disabled?: boolean | undefined;
    disableGutters?: boolean | undefined;
    divider?: boolean | undefined;
    selected?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | import("react").RefObject<HTMLLIElement> | null | undefined;
}, "autoFocus" | "tabIndex" | "children" | "sx" | "dense" | "disabled" | keyof import("@mui/material/OverridableComponent").CommonProps | "action" | "selected" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "divider" | "disableGutters"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    displayAsNav?: boolean | undefined;
    withAccessQuota?: boolean | undefined;
}, {}, {}>;
//# sourceMappingURL=MenuStyled.d.ts.map