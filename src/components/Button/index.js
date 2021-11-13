import * as Styled from './style-components'

const Button = ({ type, children, handleClick, icon, img, ...rest }) => {
	return (
		<Styled.Button type={type} {...rest} onClick={handleClick}>
			{children}
		</Styled.Button>
	)
}
export default Button
