import { GeneralProps, InternalNotificationsProps } from "./utils";
import { HeaderTagProps } from "./Header";
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase";
export type BusinessSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    checked?: boolean;
    onCheckChange?: SwitchBaseProps["onChange"];
    tagProps?: HeaderTagProps[];
    address?: string;
    industry?: string;
    companySize?: number | string;
    revenue?: number | string;
};
export declare function BusinessSearchResultCard(props: BusinessSearchResultCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Business.d.ts.map