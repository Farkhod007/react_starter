import styled from 'styled-components'
import Image from '../Image'

export const Img = styled(Image)`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
`