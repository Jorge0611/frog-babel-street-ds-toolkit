import { ChartDataset } from "chart.js";
export type BarDataset = Pick<ChartDataset<"bar">, "data" | "label" | "order">;
export type BarChartData = {
    index: number;
    label: string;
    value: number;
};
export type BarChartProps = {
    labels: string[];
    datasets: BarDataset[];
    variant?: "docOverview";
    onClick?: (data: BarChartData) => void;
};
export declare function BarChart(props: BarChartProps): import("react/jsx-runtime").JSX.Element;
export declare namespace BarChart {
    var displayName: string;
}
//# sourceMappingURL=BarChart.d.ts.map