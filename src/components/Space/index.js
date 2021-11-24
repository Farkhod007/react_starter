import * as Styled from './styled-components'
import PropTypes from 'prop-types'

const Space = ({ children, ...props }) => {
	return <Styled.Space {...props}>{children}</Styled.Space>
}

Space.propTypes = {
	size: PropTypes.number,
	direction: PropTypes.string,
}

Space.defaultProps = {
	size: 8,
	direction: 'horizontal',
}

export default Space
