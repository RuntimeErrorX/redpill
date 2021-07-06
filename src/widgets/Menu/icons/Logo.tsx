import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 180 65" {...props}>
      <image width="175" height="60" href={isDark ? '/images/logo/VenetianX Logo - Long Light.png' : '/images/logo/VenetianX Logo - Long Dark.png'}/>
    </Svg>
  )
};

export default Logo;