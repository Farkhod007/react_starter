import React from 'react'
import * as Styled from './style-components'

const Ratio = ({ children, ...rest }) => {
	return (
		<Styled.Ratio {...rest}>
			<Styled.Div>
				{children}
			</Styled.Div>
		</Styled.Ratio>
	)
}
export default Ratio