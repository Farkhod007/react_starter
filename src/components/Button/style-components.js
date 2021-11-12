import styled from 'styled-components'

export const Button = styled.button`
	width: ${(props) => props.width || '100%'};
	height: ${(props) => props.height || '100%'};
	background: ${(props) => props.background || 'transparent'};
	border: ${(props) => props.border || 'none'};
	color: ${(props) => props.color || ''};
	border-radius: ${(props) => props.radius || 'unset'};
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: ${(props) => props.size || ' '};
`
// export const P = styled.p`
// 	color: ${(props) => props.color || ''};
// 	padding: 0;
// 	margin: 0;
// `
