import { ChartDataset } from "chart.js";
export type LineDataset = Pick<ChartDataset<"line">, "data" | "label" | "order">;
export interface LineChartProps {
    title?: string;
    yAxisUnit?: string;
    xAxisUnit?: string;
    labels: string[];
    datasets: LineDataset[];
}
export declare function LineChart(props: LineChartProps): import("react/jsx-runtime").JSX.Element;
export declare namespace LineChart {
    var displayName: string;
}
//# sourceMappingURL=LineChart.d.ts.map