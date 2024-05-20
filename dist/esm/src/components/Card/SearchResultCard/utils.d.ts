import React from "react";
import { CardProps as MuiCardProps } from "@mui/material";
import { IconButtonProps } from "../../IconButton/IconButton";
import { FooterProps } from "./Footer";
export type DisplayType = "stacked" | "static";
export type GeneralProps = MuiCardProps & {
    display: DisplayType;
    title: string;
    avatarImgSrc?: string;
    avatarImgAlt?: string;
    hovered?: boolean;
    active?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    href?: string;
};
export type InternalNotificationsProps = FooterProps;
export declare const ResultCardStyled: import("@emotion/styled").StyledComponent<Omit<import("@mui/material").PaperProps, "classes"> & {
    classes?: Partial<import("@mui/material").CardClasses> | undefined;
    raised?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "children" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "sx" | "ref" | "variant" | "square" | keyof import("@mui/material/OverridableComponent").CommonProps | "key" | "elevation" | "raised"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    display: DisplayType;
    title: string;
    avatarImgSrc?: string | undefined;
    avatarImgAlt?: string | undefined;
    hovered?: boolean | undefined;
    active?: boolean | undefined;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    href?: string | undefined;
}, {}, {}>;
/**
 * Extends an event handler to stop propagation and prevent default handling of the event.
 * Useful for onClick events of interactive elements inside other interactive elements.
 * @param handler
 * @returns New extended handler
 */
export declare function stopClickPropagation(handler: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined): ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
export declare function CloseButton(props: Omit<IconButtonProps, "children">): import("react/jsx-runtime").JSX.Element;
/**
 * Wraps the content with the ResultCardStyled and CardActionArea, and also manages "hovered" state
 * @param props Common Props of a Search Result card. As children, a specific component of a Search Result Card
 * @returns A styled search result card
 */
export declare function SearchResultCardWrapper(props: GeneralProps): import("react/jsx-runtime").JSX.Element;
export declare function formatDateOrTimePassed(date: Date | string): string;
export declare const docNameAcceptedTexts: string[];
export declare const docTextAceptedTexts: string[];
export declare const docURLAcceptedTexts: string[];
export declare const docAuthorAcceptedTexts: string[];
export declare const docLanguageAcceptedTexts: string[];
export declare const docDateAcceptedTexts: string[];
export declare const docCategoryAcceptedTexts: string[];
export declare const docSentimentAcceptedTexts: string[];
export declare const docGeoDataAcceptedTexts: string[];
export declare const docTypeAcceptedTexts: string[];
export declare const docReachAcceptedTexts: string[];
export declare const docSignificanceAcceptedTexts: string[];
export declare const docPopularityAcceptedTexts: string[];
export declare const docDateHourAcceptedTexts: string[];
export declare const docViolentIntentAcceptedTexts: string[];
export declare const docTopicAttributeAcceptedTexts: string[];
export declare const docLocationAttributeAcceptedTexts: string[];
export declare const docMentionedUrlAcceptedTexts: string[];
export declare const sourceDomainUrlsAcceptedTexts: string[];
export declare const docRiskCategories: string[];
export declare const authorFlags: string[];
export declare const demoAvengers: string[];
export declare const demoStarWars: string[];
export declare const demoFamousActors: string[];
export declare const demoLocations: string[];
export declare const getPropertyName: (text: string) => "Sites" | "DocumentAuthor" | "DocumentLanguage" | "DocumentLocationAttribute" | "DocumentSentiment" | "DocumentUrl" | "DocumentType" | "DocumentTopicAttribute" | "DocumentViolentIntent" | "DocumentRiskCategory" | "DocumentAuthorFlag" | "DocumentText" | "Avengers" | "Locations" | "DocumentName" | "DocumentDate" | "DocumentCategory" | "DocumentGeoData" | "DocumentReach" | "DocumentSignificance" | "DocumentPopularity" | "DocumentDateHour" | "DocumentMentionedUrl" | "StarWars" | "FamousActors" | undefined;
export declare const getChipText: (text?: string, textMapping?: Record<string, string>) => string | undefined;
export declare const searchWithinTypes: string[];
export declare function determineMaxLength(content: string | undefined): number;
//# sourceMappingURL=utils.d.ts.map