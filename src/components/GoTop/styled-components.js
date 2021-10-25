import styled from "styled-components"

const BackTopButton = styled.div`
  position: fixed;
  bottom: 35px;
  right: 35px;

  @media only screen and (max-width: 786px) {
    right: 25px;
    bottom: 25px;
  }
`
const Styled = {
    BackTopButton,
}

export default Styled
