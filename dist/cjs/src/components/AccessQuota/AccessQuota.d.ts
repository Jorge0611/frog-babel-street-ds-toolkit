import * as React from "react";
import { ProgressProps } from "../../../src";
export type AccessQuotaItemProps = {
    title: string | React.ReactFragment;
    onClick?: () => void;
    subtitle?: string;
    progressIndicator: React.ReactNode & {
        props: ProgressProps;
    };
};
export type AccessQuotaProps = {
    menuItems: AccessQuotaItemProps[];
};
export declare const AccessQuota: {
    (props: AccessQuotaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AccessQuota.d.ts.map