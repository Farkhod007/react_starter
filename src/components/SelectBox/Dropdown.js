import React from 'react'
import * as Styled from './style-components'

const Dropdown = ({
	options,
	selectedValue,
	changeSelectedHandler,
	name,
	data,
}) => {
	return (
		<Styled.Menu>
			<Styled.Items>
				{options.map((item, index) => (
					<div
						className={
							selectedValue === item
								? `item  ${data.indexOf(item)} selected`
								: `item  ${data.indexOf(item)}`
						}
						key={index}
						onClick={() =>
							changeSelectedHandler(
								item,
								name,
								data.indexOf(item)
							)
						}
					>
						{item}
					</div>
				))}
			</Styled.Items>
		</Styled.Menu>
	)
}

export default Dropdown
