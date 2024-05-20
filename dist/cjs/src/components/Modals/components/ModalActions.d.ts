import React from "react";
export type ModalActionsProps = {
    onClose: () => void;
    confirmBtnText?: string | React.ReactNode;
    cancelBtnText?: string;
    handleConfirm?: () => void;
    confirmHref?: string;
    handleCancel?: () => void;
    fullWidthControls?: boolean;
    hideCancelBtn?: boolean;
    hideBtns?: boolean;
    confirmBtnStartIcon?: JSX.Element;
    confirmBtnDisabled?: boolean;
    isDestructive?: boolean;
};
declare const ModalActions: ({ onClose, handleConfirm, confirmBtnText: confirmBtnChildren, cancelBtnText, handleCancel, hideCancelBtn, hideBtns, fullWidthControls, confirmBtnStartIcon, confirmBtnDisabled, isDestructive, confirmHref, }: ModalActionsProps) => import("react/jsx-runtime").JSX.Element;
export default ModalActions;
//# sourceMappingURL=ModalActions.d.ts.map