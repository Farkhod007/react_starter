import React from 'react'
import './App.css'
import Picture from './components/Picture'

const App = () => {
	return (
		<div>
			<Picture
				const data={[
				{
					src: './images/1.jpg',
					media: '(min-width: 600px) and (max-width: 1000px)',
				},
				{
					src: './images/2.jpg, ./images/2.jpg 2x',
					media: '(min-width: 320px) and (max-width: 600px)',
				},
			]}
				fallback='./images/3.jpg'
				width='100%'
				height='300'
			/>
		</div>
	)
}

export default App
