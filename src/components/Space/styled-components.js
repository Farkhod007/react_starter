import styled from 'styled-components'

export const Space = styled.div`
	display: flex;
	flex-direction: ${(props) =>
		props.direction === 'horizontal' ? 'row' : 'column'};
	gap: ${(props) => props.size + 'px'};
`
