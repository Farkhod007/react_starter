import PropTypes from "prop-types";
import Styled from "../styled-components";
import "../../static/css/global.css";
import "../../static/css/reset.css";
import { colors, variants } from "./constatnts";

const Typography = ({ variant, color, children, ...props }) => {
  const { tag, size } = variants[variant];
  const colorValue = colors[color];

  return (
    <Styled.Typography as={tag} size={size} color={colorValue} {...props}>
      {children}
    </Styled.Typography>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

Typography.defaultProps = {
  variant: "bodyOne",
  color: "primary",
};

export default Typography;
