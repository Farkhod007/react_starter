<<<<<<< HEAD
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
=======
import styled from 'styled-components'

export const Space = styled.div`
	display: flex;
	gap: ${(props) => props.size + 'px'};
	flex-direction: ${(props) =>
		props.direction === 'horizontal ' ? 'row' : 'column'};
	align-items: ${(props) =>
		props.direction === 'horizontal' ? props.align : 'start'};
	flex-wrap: ${(props) => props.wrap};
`
>>>>>>> 4d4385e3f0f60652684e477abe2251ab9bc126d4
