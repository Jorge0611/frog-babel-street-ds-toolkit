export interface DonutChartCallbackType {
    text: string;
    value: number;
}
export interface aggType {
    id: string;
    name?: string;
    count: number;
}
export type DonutDataSet = {
    data: number[];
};
export type DonutChartProps = DonutDataSet & {
    labels: string[];
    sentiment?: boolean;
    onClick: (obj: aggType | DonutChartCallbackType) => void;
    aggsArr?: aggType[];
};
export declare const defaultDonutLabels: string[];
export declare const defaultDonutData: number[];
export declare function DonutChart(props: DonutChartProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DonutChart {
    var displayName: string;
}
//# sourceMappingURL=DonutChart.d.ts.map