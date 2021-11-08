import styled from 'styled-components'

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: ${(props) => props.maxWidth || '100%'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  
`