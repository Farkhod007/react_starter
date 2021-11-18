import styled from "styled-components";

const ToolTipWrap = styled.div`
  display: inline-block;
  position: relative;
`;

const TooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${(props) => props.color};
  background: ${(props) => props.bgcolor};
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  &:before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  ${(props) =>
    props.direction === "top"
      ? `
  top: calc(30px * -1);
    &:before {
      top: 100%;
      border-top-color: ${props.brcolor};
    }
  `
      : null}

  ${(props) =>
    props.direction === "right"
      ? `
    left: calc(100% + 30px);
    top: 50%;
    transform: translateX(0) translateY(-50%);

    &:before {
      left: calc(6px * -1);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-right-color: ${props.brcolor};
    }
  
  `
      : null}

    ${(props) =>
    props.direction === "bottom"
      ? `
    bottom: calc(30px * -1);

&:before {
  bottom: 100%;
  border-bottom-color: ${props.brcolor};
}
    `
      : null}
  

  ${(props) =>
    props.direction === "left"
      ? `
    left: auto;
    right: calc(100% + 30px);
    top: 50%;
    transform: translateX(0) translateY(-50%);

    &:before {
      left: auto;
      right: calc(6px * -2);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-left-color: ${(props) => props.brcolor};
    }
  `
      : null}
`;

const Styled = {
  ToolTipWrap,
  TooltipTip,
};

export default Styled;
