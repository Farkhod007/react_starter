import './App.css'
import Images from './components/Images'
import React from 'react'

const App = () => {
	return (
		<div>
			<div className='card'>
				<Images
					id={'img'}
					alt={'my inages'}
					src={'/images/1.jpg'}
					maxwidth='300px'
					width='300px'
					height='250px'
				/>
			</div>
		</div>
	)
}

export default App
