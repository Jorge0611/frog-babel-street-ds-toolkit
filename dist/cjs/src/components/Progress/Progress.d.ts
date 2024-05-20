import { CircularProgressProps as MuiCircularProgressProps } from "@mui/material";
import { LinearProgressProps as MuiLinearProgressProps } from "@mui/material/LinearProgress";
export type ProgressProps = MuiLinearProgressProps & MuiCircularProgressProps & {
    isLinear?: boolean;
};
export type CircularProgressProps = MuiCircularProgressProps & {
    isLinear?: boolean;
};
export declare function Linear(props: MuiLinearProgressProps): import("react/jsx-runtime").JSX.Element;
export declare function Circular(props: CircularProgressProps): import("react/jsx-runtime").JSX.Element;
export declare function Progress(props: ProgressProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Progress {
    var displayName: string;
}
//# sourceMappingURL=Progress.d.ts.map