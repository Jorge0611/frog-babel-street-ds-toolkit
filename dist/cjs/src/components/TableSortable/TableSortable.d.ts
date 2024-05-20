import { TableProps as MuiTableProps } from "@mui/material";
export type TableSortableProps = MuiTableProps & {
    headCells: any[];
    rowData: any[];
    rowClickHandler?: (clickedIndex: number, selectedIndexes: readonly string[]) => void;
    rowsPerPageOptions: number[];
    variant?: "Styled1";
    withCheckboxes: boolean;
};
export declare function TableSortable(props: TableSortableProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TableSortable {
    var displayName: string;
}
//# sourceMappingURL=TableSortable.d.ts.map