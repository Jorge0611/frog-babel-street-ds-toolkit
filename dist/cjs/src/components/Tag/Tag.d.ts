type variantType = "solid" | "outline" | "color";
type colorStyleType = "primary" | "secondary" | "card";
export interface TagGroup {
    label: string;
    tags: TagProps[];
}
export interface TagProps {
    variant: variantType;
    colorStyle?: colorStyleType;
    text: string;
    color?: string;
    removeCallback?: () => void;
}
export declare function Tag(props: TagProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Tag {
    var displayName: string;
}
export {};
//# sourceMappingURL=Tag.d.ts.map