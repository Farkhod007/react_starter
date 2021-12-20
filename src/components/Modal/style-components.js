import styled from "styled-components"
export const Modal = styled.div`
height: auto;
text-align:center;
position:absolute;
top:50%;
left:50%;
transform:translate(-50% , -50%);
width:${props => props.size + 'px'};
padding:${props => props.padding + 'px'};
background-color:${props => props.bgcolor};
color:${props => props.color};
border-radius:${props => props.border + 'px'};
text-align:${props => props.align};
 /* display: flex;
 gap:${props => props.size + 'px'};
  flex-direction: ${props => props.direction === 'horizontal ' ? 'row' : 'column'}; */
/* align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
 column-gap:25px; */
`

