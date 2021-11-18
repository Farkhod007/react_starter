import React, { useState } from "react";
import Styled from "./styled-component";
import { colors, bgcolors } from "./constants";

const Tooltip = ({ color, bgcolor, direction = 'top', ...props }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const colorValue = colors[color];
  const bgcolorValue = bgcolors[bgcolor];

  return (
    <Styled.ToolTipWrap
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      
      {props.children}
      {active && (
        <Styled.TooltipTip
          color={colorValue}
          bgcolor={bgcolorValue}
          brcolor={bgcolorValue}
          direction={direction}
        >
          
          {props.content}
        </Styled.TooltipTip>
      )}
    </Styled.ToolTipWrap>
  );
};

export default Tooltip;
