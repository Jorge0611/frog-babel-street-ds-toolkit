import * as React from "react";
import { DialogProps as MuiDialogProps } from "@mui/material";
import { ModalHeaderProps } from "./components/ModalHeader";
import { ModalContentProps } from "./components/ModalContent";
import { ModalActionsProps } from "./components/ModalActions";
export type ModalProps = MuiDialogProps & ModalHeaderProps & ModalActionsProps & ModalContentProps & {
    children?: React.ReactNode;
    title?: string;
    titleIcon?: React.ReactNode;
    open: boolean;
    titleLabel?: string;
    onClose: () => void;
};
export declare function Modal(props: ModalProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Modal {
    var displayName: string;
}
//# sourceMappingURL=Modal.d.ts.map