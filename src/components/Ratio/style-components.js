import styled from 'styled-components'

export const Ratio = styled.div`
  max-width: 100%;
  position: relative;
  padding-top: calc(100% *  (${(props) => props.ratio ** -1}));
`
export const Div = styled.div`
  position:  absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`