import { darkTheme } from "../muiTokens";
export declare function SentimentIcon(props: {
    fillColor: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const sentimentData: (theme: typeof darkTheme) => {
    label: string;
    type: string;
    filterId: string;
    options: {
        label: import("react/jsx-runtime").JSX.Element;
        checkboxProps: {
            name: string;
            value: string;
        };
    }[];
};
export declare function injectSentiment(payload: any[] | undefined, theme: typeof darkTheme): any[];
//# sourceMappingURL=injectSentiment.d.ts.map