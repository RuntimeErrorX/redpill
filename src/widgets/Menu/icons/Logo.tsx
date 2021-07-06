import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <image width="125" height="60" href={isDark ? '/images/logo/VenetianX.png' : '/images/logo/VenetianX.png'}/>
  )
};

export default Logo;