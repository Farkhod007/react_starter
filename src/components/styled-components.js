import styled from "styled-components";

const Typography = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;

const Styled = {
  Typography,
};

export default Styled;
