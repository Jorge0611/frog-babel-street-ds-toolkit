import { ReactNode } from "react";
import { TagProps } from "../../Tag/Tag";
export type HeaderTagProps = Pick<TagProps, "color" | "text"> & {
    category?: number;
};
export interface HeaderProps {
    title: string;
    action?: ReactNode;
    avatarImgSrc?: string;
    fallbackIcon: ReactNode;
    tagProps?: HeaderTagProps[];
    condensed?: boolean | undefined;
}
export declare function Header(props: HeaderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Header {
    var displayName: string;
}
//# sourceMappingURL=Header.d.ts.map