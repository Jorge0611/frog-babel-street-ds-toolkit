import { MouseEvent as ReactMouseEvent } from "react";
interface PanState {
    translateX: number;
    translateY: number;
    prevMouseX: number;
    prevMouseY: number;
    scale: number;
}
interface PanAction {
    type: "PAN_START" | "PAN" | "ZOOM";
    clientX: number;
    clientY: number;
}
export declare const startPan: (event: ReactMouseEvent) => PanAction;
export declare const pan: (event: MouseEvent) => PanAction;
export declare const initialState: PanState;
export interface ImageZoomAndPanProps {
    src: string;
}
export declare function ImageZoomAndPan({ src }: ImageZoomAndPanProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ImageZoomAndPan.d.ts.map