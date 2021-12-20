<<<<<<< HEAD
import * as Styled  from "./style-components"
import  PropTypes from 'prop-types'
const Space = ({children, ...props}) =>{
    return  <Styled.Wrapper> 
     <Styled.Space {...props} >
       {children}
    </Styled.Space>
    </Styled.Wrapper>

}

Space.propTypes = {
    size:PropTypes.number,
    direction: PropTypes.string,
    align: PropTypes.string,
    wrap:PropTypes.string,
}
Space.defaultProps = {
    size: 24,
    direction: 'horizontal',
    align:'start',
    wrap:'nowrap',
}
export default Space
=======
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
>>>>>>> 4d4385e3f0f60652684e477abe2251ab9bc126d4
