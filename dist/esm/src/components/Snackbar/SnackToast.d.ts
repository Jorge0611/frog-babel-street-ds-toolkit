import React from "react";
import { AlertColor, SnackbarProps as MuiSnackbarProps } from "@mui/material";
import { ToastProps } from "./SnackbarProvider";
import { ButtonProps } from "../Button/Button";
type SnackbarToastProps = {
    toast: ToastProps;
};
declare const SnackbarToast: React.FC<SnackbarToastProps>;
export default SnackbarToast;
type SnackbarSeverity = AlertColor;
type SnackbarCtaProps = Omit<ButtonProps, "variant" | "size" | "color">;
export type SnackbarProps = Omit<MuiSnackbarProps, "action"> & {
    severity: SnackbarSeverity;
    ctaProps?: SnackbarCtaProps;
};
//# sourceMappingURL=SnackToast.d.ts.map