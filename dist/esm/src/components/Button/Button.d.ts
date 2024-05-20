import { ButtonProps as MuiButtonProps } from "@mui/material";
export type ButtonProps = MuiButtonProps;
declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        ghost: true;
        inactive: true;
        active: true;
        complete: true;
        failure: true;
    }
}
export declare const ProcessStatus: {
    inactive: string;
    active: string;
    complete: string;
    failure: string;
};
export declare const Button: {
    (props: ButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Button.d.ts.map