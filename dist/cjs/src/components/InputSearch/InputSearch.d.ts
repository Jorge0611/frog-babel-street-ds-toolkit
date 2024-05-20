import { MouseEvent } from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
export type InputSearchProps = MuiTextFieldProps & {
    onClickSearchButton?: (event: MouseEvent) => void;
};
export declare function InputSearch(props: InputSearchProps): import("react/jsx-runtime").JSX.Element;
export declare namespace InputSearch {
    var displayName: string;
}
//# sourceMappingURL=InputSearch.d.ts.map