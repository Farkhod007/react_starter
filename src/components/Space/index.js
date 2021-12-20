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