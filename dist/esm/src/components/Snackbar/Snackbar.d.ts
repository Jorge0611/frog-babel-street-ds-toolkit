import { AlertColor, SnackbarProps as MuiSnackbarProps } from "@mui/material";
import { ButtonProps } from "../Button/Button";
type SnackbarSeverity = AlertColor;
type SnackbarCtaProps = Omit<ButtonProps, "variant" | "size" | "color">;
export type SnackbarProps = Omit<MuiSnackbarProps, "action"> & {
    severity: SnackbarSeverity;
    ctaProps?: SnackbarCtaProps;
};
export declare function Snackbar(props: SnackbarProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Snackbar {
    var displayName: string;
}
export {};
//# sourceMappingURL=Snackbar.d.ts.map