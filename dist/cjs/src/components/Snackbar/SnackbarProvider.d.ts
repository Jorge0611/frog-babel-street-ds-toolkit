import React from "react";
import { ButtonProps } from "../Button/Button";
export declare const SnackBarContext: React.Context<SnackStackContextProps>;
export declare const SnackBarProvider: React.FC<React.PropsWithChildren>;
export declare const useSnackBar: () => SnackStackContextProps;
export default SnackBarProvider;
export type ToastProps = {
    /**
     * Key to render multiple toasts.
     * This is being set automatically unless specified manually.
     */
    key?: number | string;
    /**
     * Alert title
     */
    title?: string;
    /**
     * Alert message
     */
    message?: React.ReactNode;
    /**
     * Custom component or html-layout
     */
    children?: React.ReactElement;
    /**
     * Indicates when the alert will disappear in ms. Defaults too 5000.
     * Pass 0 for infinite duration.
     */
    duration?: number;
    /**
     * Alert color
     */
    severity?: "success" | "info" | "warning" | "error";
    /**
     * Alert position on the screen
     */
    position?: {
        vertical?: "top" | "bottom";
        horizontal?: "left" | "right" | "center";
    };
    /**
     * On Close callback
     */
    onClose?: () => void;
    ctaProps?: ButtonProps;
};
export type SnackStackContextProps = {
    toastsList: ToastProps[];
    setToastsList: (toasts: ToastProps[]) => void;
    addToast: (toast: ToastProps) => void;
    addMultipleToast: (toasts: ToastProps[]) => void;
    removeToast: (key: ToastProps["key"]) => void;
};
//# sourceMappingURL=SnackbarProvider.d.ts.map