import React from "react";
import { Tooltip } from "./Tooltip/Tooltip";
import { Typography } from "./Typography/Typography";
export interface TruncateTextProps {
    text: string;
    maxLength: number;
    tooltipProps?: React.ComponentProps<typeof Tooltip>;
    typographyProps?: React.ComponentProps<typeof Typography>;
}
export declare const TruncateText: React.FC<TruncateTextProps>;
export default TruncateText;
//# sourceMappingURL=TruncateText.d.ts.map