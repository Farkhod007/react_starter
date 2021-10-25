import styled from "styled-components"

const Images = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media only screen and (max-width: 786px) {
    width: 35px;
    height: 35px;
  }
`

const Styled = {
    Images,
}

export default Styled