import { TabsProps as MuiTabsProps, TabProps as MuiTabProps, SxProps, Theme } from "@mui/material";
export type TabsProps = MuiTabsProps & {
    ariaLabel?: string;
    navigation?: boolean;
    fullHeight?: boolean;
    tabsId: string;
    tabProps: TabProps[];
};
export type TabProps = MuiTabProps & {
    name?: string;
    hoverText?: string;
    disabledText?: string;
    sx?: SxProps<Theme> | undefined;
};
export declare function Tabs(props: TabsProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Tabs {
    var defaultProps: {
        navigation: boolean;
        fullHeight: boolean;
    };
    var displayName: string;
}
//# sourceMappingURL=Tabs.d.ts.map