import * as React from "react";
import { CardProps as MuiCardProps, CardContent } from "@mui/material";
interface ChipsCardContent {
    isEntity: boolean;
    chipId: number | string;
    property: string;
    value: string;
    displayValue: string;
    searchType: string;
}
interface CardContent {
    number: number | string;
    contentText: string;
}
type DeepSearchStatusType = "inprogress" | "completed";
type cardOrientationType = "horizontal" | "vertical";
export type QueryCardProps = MuiCardProps & {
    cardOrientation: cardOrientationType;
    deepSearchStatus?: DeepSearchStatusType;
    searchCategory: string;
    cardMenu?: React.ReactNode | React.ReactNode[];
    title: string;
    firstConductedDate: Date;
    inProgressUntilDate?: Date;
    lastUpdateTimeAgo?: string;
    cardContent?: CardContent[];
    chipsContent?: ChipsCardContent[];
    truncateTitle?: number;
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    cardContentInfo?: React.ReactElement;
};
export declare function QueryCard(props: QueryCardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace QueryCard {
    var displayName: string;
}
export {};
//# sourceMappingURL=QueryCard.d.ts.map