import React, { useState } from 'react'
import CustomSelect from './CustomSelect'
import * as Styled from './style-components'

const SelectBox = ({ data, ...rest }) => {
	const [formData] = useState({
		countryTwo: {
			value: 'Uzbekistan',
		},
	})
	return (
		<Styled.Container {...rest}>
			<form className="form">
				<CustomSelect data={data} value={formData.countryTwo.value} />
			</form>
		</Styled.Container>
	)
}

export default SelectBox
