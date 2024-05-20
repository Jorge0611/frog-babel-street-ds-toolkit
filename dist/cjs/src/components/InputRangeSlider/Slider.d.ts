import * as React from "react";
import { SliderProps as MuiSliderProps, SliderValueLabelProps as MuiSliderValueLabelProps } from "@mui/material";
export type InputRangeSliderProps = MuiSliderProps & MuiSliderValueLabelProps & {
    leftSliderIcon?: React.ReactNode;
    rightSliderIcon?: React.ReactNode;
};
export declare function ContinuousSlider(props: InputRangeSliderProps): import("react/jsx-runtime").JSX.Element;
export declare function ContinuousIconSlider(props: InputRangeSliderProps): import("react/jsx-runtime").JSX.Element;
export declare function Slider(props: InputRangeSliderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Slider {
    var displayName: string;
}
//# sourceMappingURL=Slider.d.ts.map