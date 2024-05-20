import { InputSelectItem } from "../../InputSelect/InputSelect";
import { AdditionalSearchOption } from "../Search";
export interface ISelectedUseCaseValues {
    selectedGlbaUseCaseValue: InputSelectItem;
    selectedDppaUseCaseValue: InputSelectItem;
}
interface INoticeOfUserModalProps {
    additionalSearchOption?: AdditionalSearchOption;
    handleConfirm: (selectedValues: ISelectedUseCaseValues) => void;
    onClose: () => void;
}
export declare const NoticeOfUseModal: (props: INoticeOfUserModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NoticeOfUseModal.d.ts.map