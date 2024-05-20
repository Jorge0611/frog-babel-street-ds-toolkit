import { ChipType } from "../../ChipBooleanSearch/ChipBooleanSearch";
export interface IDeterminePlaceholderText {
    searchCategoryLabel: string;
    searchState: ChipType[] | undefined;
    open: boolean | undefined;
}
export declare const determinePlaceholderText: ({ searchCategoryLabel, searchState, open, }: IDeterminePlaceholderText) => "" | "Search Babel’s data library for posts, articles, photos, and other documents..." | "Search Babel’s database for people, individuals..." | "Search Babel’s database for companies, businesses..." | undefined;
//# sourceMappingURL=determinePlaceholderText.d.ts.map