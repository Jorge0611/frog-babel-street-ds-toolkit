import React from "react";
import { GeneralProps, InternalNotificationsProps } from "./utils";
import { HeaderTagProps } from "./Header";
type ThreatLevel = "low" | "medium" | "high";
export declare enum CategoryTagId {
    "PublicProfile" = 1,
    "CriminalHistory" = 2,
    "InternationalPhone" = 3,
    "CreditHeader" = 4,
    "Vehicle" = 5,
    "Medical" = 6,
    "NpiExclusions" = 7,
    "Watchlist" = 8
}
export type PersonSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    condensed?: boolean;
    onClose?: React.MouseEventHandler;
    threatLevel: ThreatLevel;
    tagProps?: HeaderTagProps[];
    showTagsOnCondensed?: boolean;
    address?: string;
    gender?: string;
    usernames?: string;
    job?: string;
    language: string;
    dateOrTimePassed: Date | string;
    confidenceScore?: string;
    confidenceScoreColor?: string;
    offenseCount?: number;
    creditRecordsCount?: number;
    country?: string;
    npiNumber?: string;
    vehicleCount?: number;
    age?: string;
    watchlist?: string;
    region?: string;
    nationality?: string;
    caseType?: string;
};
declare function ThreatLevel(props: {
    threatLevel: ThreatLevel;
}): import("react/jsx-runtime").JSX.Element;
export declare function PersonSearchResultCard(props: PersonSearchResultCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Person.d.ts.map