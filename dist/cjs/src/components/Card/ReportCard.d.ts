import React from "react";
import { CardProps as MuiCardProps } from "@mui/material";
export type ReportCardProps = MuiCardProps & {
    title?: string;
    noAvatar?: boolean;
    avatarImgs: string[];
    reportDate: Date | string;
    reportType: string;
    format?: string;
    cardMenu?: React.ReactNode | React.ReactNode[];
    href?: string;
    id: number;
};
export declare function formatDateOrTimePassed(date: Date | string): string;
export declare function getAvatarIcon(searchCategory: string): import("react/jsx-runtime").JSX.Element | undefined;
export declare function ReportCard(props: ReportCardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ReportCard {
    var displayName: string;
}
//# sourceMappingURL=ReportCard.d.ts.map