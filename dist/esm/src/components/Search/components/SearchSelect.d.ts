import * as React from "react";
import { IFeature } from "../Search";
export type SearchCategoryType = {
    icon: React.ReactNode;
    label: string;
    permission?: IFeature;
    onClick?: (category?: SearchCategoryType) => void;
};
export type SearchSelectProps = {
    options: SearchCategoryType[];
    getAnchorEl?: () => HTMLElement;
    onSelect: (option: SearchCategoryType) => void;
    selectedCategory?: SearchCategoryType;
    onOpen?: () => void;
    onClose?: () => void;
};
export declare const SearchSelect: import("@emotion/styled").StyledComponent<SearchSelectProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
//# sourceMappingURL=SearchSelect.d.ts.map