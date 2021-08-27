import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160" height="48" viewBox="0 0 160 48" {...props}>
     <image id="kuswap-logo" width="160" height="48" xlinkHref="data:image/png;base64,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"/>

    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);