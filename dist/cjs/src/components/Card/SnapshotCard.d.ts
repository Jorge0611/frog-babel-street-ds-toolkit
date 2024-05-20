import * as React from "react";
import { CardProps as MuiCardProps } from "@mui/material";
declare enum SnapshotCardVariant {
    image = "image",
    bigWord = "bigword",
    smallWord = "smallword"
}
type CardProps = MuiCardProps & {
    cardMenu?: React.ReactNode | React.ReactNode[];
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    cardVariant: SnapshotCardVariant;
    text?: string;
    cardImage?: string;
    cardAltText?: string;
    commentIconOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
    bookmarkIconOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
export declare function SnapshotCard(props: CardProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SnapshotCard {
    var displayName: string;
}
export {};
//# sourceMappingURL=SnapshotCard.d.ts.map