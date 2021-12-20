import { useState } from 'react'
import * as Styled from "./style-components"
import PropTypes from 'prop-types'
import { withTheme } from "styled-components"

const Modal = ({ visible, hide, children, ...props }) => {
  return (
    <>
      {visible && (
        <Styled.Modal {...props} >
          <button onClick={hide}>X</button>
          {children}
        </Styled.Modal>
      )}
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
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
  visible: false,
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