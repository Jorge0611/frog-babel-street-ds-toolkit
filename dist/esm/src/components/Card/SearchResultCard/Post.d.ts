import { GeneralProps, InternalNotificationsProps } from "./utils";
import { HeaderTagProps } from "./Header";
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase";
export type PostSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    checked?: boolean;
    onCheckChange?: SwitchBaseProps["onChange"];
    tagProps?: HeaderTagProps[];
    articleImgSrc: string;
    source: string;
    language: string;
    dateOrTimePassed: Date | string;
};
export declare function PostSearchResultCard(props: PostSearchResultCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Post.d.ts.map