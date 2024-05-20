export declare const DeepSearchStatus: {
    inactive: string;
    active: string;
    complete: string;
    failure: string;
};
export type DeepSearchButtonProps = {
    status?: "inactive" | "active" | "complete" | "failure";
    onClick?: () => void;
    disabled?: boolean;
    persistentSearchDate?: Date;
};
export declare const DeepSearchButton: {
    (props: DeepSearchButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DeepSearchButton.d.ts.map