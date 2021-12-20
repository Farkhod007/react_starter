import styled from "styled-components"
export const Space = styled.div`
display: flex;
gap:${props => props.size + 'px' };
/* flex-direction: ${props =>props.direction === 'horizontal ' ? 'row' : 'column' }; */
align-items: ${props => props.align};
flex-wrap: ${props => props.wrap};
/* column-gap:25px; */

`

export const Wrapper = styled.div`
background-color: yellow;
height:300px;
`