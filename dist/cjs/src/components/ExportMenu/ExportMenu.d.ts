import * as React from "react";
export type ExportMenuItemType = {
    label: string;
    onClick: () => void;
};
export type ExportMenuProps = {
    menuItems: ExportMenuItemType[];
    toggleBtnIcon?: React.ReactNode;
    isReport?: boolean;
    withPrint?: boolean;
    withViewFullScreen?: boolean;
    onPrintClick?: () => void;
    onFullScreenClick?: () => void;
    onExportIconClick?: () => void;
    exportText?: string;
    altExportIcon?: React.ReactNode;
    hideDivider?: boolean;
};
export declare function ExportMenu(props: ExportMenuProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ExportMenu {
    var displayName: string;
}
//# sourceMappingURL=ExportMenu.d.ts.map