import React, { useState } from 'react'

import Dropdown from './Dropdown'
import * as Styled from './style-components'

const CustomSelect = ({ data, value, name }) => {
	const [selectedValue, setSelectedValue] = useState(value)
	const [showDropdown, setShowDropdown] = useState(false)

	const changeSelectedHandler = (item) => {
		setSelectedValue(item)
		setShowDropdown(false)
	}

	return (
		<div className="form__group">
			<Styled.Dropdown>
				<Styled.Selected
					onClick={() => setShowDropdown(!showDropdown)}
					className={showDropdown === true ? 'active' : 'Selected'}
				>
					{selectedValue ? selectedValue : name}
				</Styled.Selected>
				{showDropdown && (
					<Dropdown
						options={data}
						selectedValue={selectedValue}
						changeSelectedHandler={changeSelectedHandler}
						name={name}
						data={data}
					/>
				)}
			</Styled.Dropdown>
		</div>
	)
}

export default CustomSelect
