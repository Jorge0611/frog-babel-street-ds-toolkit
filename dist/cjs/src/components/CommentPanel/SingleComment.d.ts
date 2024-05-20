import { MouseEventHandler } from "react";
import { InputTextareaProps } from "../InputTextarea/InputTextarea";
export interface CommentData {
    author: string;
    creationDate: Date;
    updateDate?: Date;
    content: string;
    editable?: boolean;
}
export interface SingleCommentProps extends CommentData {
    onDelete?: MouseEventHandler;
    onUpdate?: MouseEventHandler;
    inputTextProps?: InputTextareaProps;
}
export declare function SingleComment(props: SingleCommentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SingleComment.d.ts.map