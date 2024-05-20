/// <reference types="react" />
declare const ModalStyled: import("@emotion/styled").StyledComponent<import("@mui/material").DialogProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & import("./ModalHeader").ModalHeaderProps & import("./ModalActions").ModalActionsProps & import("./ModalContent").ModalContentProps & {
    children?: import("react").ReactNode;
    title?: string | undefined;
    titleIcon?: import("react").ReactNode;
    open: boolean;
    titleLabel?: string | undefined;
    onClose: () => void;
}, {}, {}>;
export default ModalStyled;
//# sourceMappingURL=ModalStyled.d.ts.map