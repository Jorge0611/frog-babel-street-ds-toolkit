import React from "react";
import { DeepSearchButtonProps } from "../../index";
export type jumpMenuItem = {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
};
export type SubNavMenuProps = {
    activeTab?: number;
    tabOnClick: (index: number) => void;
    withDeepSearch?: boolean;
    deepSearchOnClick?: () => void;
    jumpMenuItems?: jumpMenuItem[];
    deepSearchStatus?: DeepSearchButtonProps["status"];
    searchCategory?: string;
    deepSearchElem?: React.ReactNode;
    documentCount?: number;
    temporaryHideOverviewTab?: boolean;
};
export declare const SubNavMenu: (props: SubNavMenuProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SubNavMenu.d.ts.map