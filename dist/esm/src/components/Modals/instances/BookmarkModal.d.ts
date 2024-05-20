import { ModalProps } from "../../../index";
export interface Project {
    name: string;
    id: string;
    bookmarkedOn?: boolean;
}
export interface BookmarkModalProps extends ModalProps {
    modalText?: string;
    documentName: string;
    existingProjects?: Project[];
    multipleProjects?: boolean;
    onConfirmBookmarks: (bookmarkInfo: {
        newBookmarkedProjects?: Project[];
        unbookmarkedProjects?: Project[];
        newProject?: {
            name: string;
            description?: string;
        };
    }) => void;
    placeholderText?: string;
    newProjectNameErrorMsg?: string;
    onChangeNewProjectName: (msg: string | undefined) => void;
    setExpandedNew: (val: boolean) => void;
    expandedNew: boolean;
}
export declare function BookmarkModal(props: BookmarkModalProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BookmarkModal.d.ts.map