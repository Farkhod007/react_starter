import * as Styled from "./style-components"
import PropTypes from 'prop-types'
import { withTheme } from "styled-components"
const Modal = ({ children, ...props }) => {
  return (
    <Styled.Modal {...props} >
      {children}
    </Styled.Modal>
  )

}

Modal.propTypes = {
  width: PropTypes.number,
  padding: PropTypes.number,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.number,
  align: PropTypes.string,
  // direction: PropTypes.string,
  // align: PropTypes.string,
  // wrap: PropTypes.string,
}
Modal.defaultProps = {
  size: 200,
  padding: 0,
  border: 0,
  color: 'black',
  bgcolor: 'white',
  align: 'left',
  // direction: 'horizontal',
  // align: 'start',
  // wrap: 'nowrap',
}
export default Modal