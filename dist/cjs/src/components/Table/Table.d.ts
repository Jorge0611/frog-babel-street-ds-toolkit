import { TableProps as MuiTableProps } from "@mui/material";
export type TablePropsType = {
    tableHeadCols?: String[];
    tableData?: any[];
};
export type TableProps = MuiTableProps & TablePropsType;
export declare function Table(props: TableProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Table {
    var displayName: string;
}
//# sourceMappingURL=Table.d.ts.map