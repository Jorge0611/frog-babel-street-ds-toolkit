import React from "react";
import { peopleFormType, peopleFormValidationType } from "../../Search";
import { peopleSearchOptionsType } from "../../Search";
import { stateCodeType } from "../../data/state_codes";
interface IVehicleSearchOptionProps {
    inputTextStyleProps: any;
    peopleFormState: peopleFormType;
    peopleFormValidationState: peopleFormValidationType;
    peopleSearchOptionsState: peopleSearchOptionsType;
    updateVehicleStateCode: (event: React.SyntheticEvent, value: stateCodeType) => void;
    updateVIN: (event: React.ChangeEvent<HTMLInputElement>) => void;
    updatePlateNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputKeyUp: (event: React.KeyboardEvent<HTMLInputElement>, name: string) => void;
}
export declare const statesUnavailableForPlateNumber: string[];
export declare const VehicleSearchOption: (props: IVehicleSearchOptionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=VehicleSearchOption.d.ts.map