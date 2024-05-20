import { InputTextProps } from "../InputText/InputText";
type InputModalProps = InputTextProps & {
    component?: "input" | "textarea";
    characterLimit?: number;
};
export declare function InputModal({ id, label, defaultValue, placeholder, helperText, component, children, characterLimit, ...props }: InputModalProps): import("react/jsx-runtime").JSX.Element;
export declare namespace InputModal {
    var defaultProps: {
        helperText: string;
    };
}
export {};
//# sourceMappingURL=InputModal.d.ts.map