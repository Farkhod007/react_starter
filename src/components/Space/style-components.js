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
