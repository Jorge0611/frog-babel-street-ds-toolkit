import React from "react";
export type DocumentState = "loading" | "loaded" | "threat";
export interface FooterProps {
    documentState?: DocumentState;
    newComments?: boolean;
    bookmarked?: boolean;
    messageAction?: React.MouseEventHandler<HTMLElement>;
    bookmarkAction?: React.MouseEventHandler<HTMLElement>;
    active?: boolean;
}
export declare const footerProps: string[];
export declare function Footer(props: FooterProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Footer.d.ts.map