import * as React from "react";
import { CardProps as MuiCardProps, CardContent } from "@mui/material";
interface CardContent {
    number: number | string;
    contentText: string;
}
export type CardProps = MuiCardProps & {
    cardMenu?: React.ReactNode | React.ReactNode[];
    title: string;
    subTitle: string;
    cardContent?: CardContent[];
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    target?: string;
    id: number;
};
export declare function HomepageProjectCard(props: CardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace HomepageProjectCard {
    var displayName: string;
}
export {};
//# sourceMappingURL=HomepageProjectCard.d.ts.map