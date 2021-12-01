import * as Styled from './style-components'
import PropTypes from 'prop-types'

const Space = ({ children, ...props }) => {
	return <Styled.Space {...props}>{children}</Styled.Space>
}

Space.propTypes = {
	size: PropTypes.number,
	direction: PropTypes.string,
	align: PropTypes.string,
	wrap: PropTypes.string,
}

Space.defaultProps = {
	size: 24,
	direction: 'horizontal',
	align: 'flex-start',
	wrap: 'nowrap',
}

export default Space
