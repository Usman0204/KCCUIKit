import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <rect width="32" height="32" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0" transform="scale(0.03125)"/>
      </pattern>
      <image id="image0" width="32" height="32" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </Svg>
  );
};

export default Icon;
