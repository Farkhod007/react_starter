import styled from 'styled-components'

const Typography = styled.p`
	font-size: ${(props) => props.size};
	color: ${(props) => props.color};
	line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
`

const Styled = {
	Typography,
}

export default Styled
