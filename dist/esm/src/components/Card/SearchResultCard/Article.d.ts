import { MouseEventHandler } from "react";
import { GeneralProps, InternalNotificationsProps } from "./utils";
import { TagGroup } from "../../Tag/Tag";
export type ArticleSearchResultCardProps = GeneralProps & InternalNotificationsProps & {
    onClose?: MouseEventHandler;
    source: string;
    noAvatar?: boolean;
    sourceImgSrc?: string;
    sourceImgAlt: string;
    language: string;
    dateOrTimePassed: Date | string;
    tagGroups: TagGroup[];
};
export declare function Header(props: ArticleSearchResultCardProps): import("react/jsx-runtime").JSX.Element;
export declare function ArticleSearchResultCard(props: ArticleSearchResultCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Article.d.ts.map