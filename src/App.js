import Typography from './components/Typography'
import './App.css'
import React from 'react'
import './App.css'
import Picture from './components/Picture'

const App = () => {
	return (
		<>
			<Typography variant="h1">This is a heading one</Typography>
			<Typography variant="h2" color="papayawhip">
				This is a heading one
			</Typography>
			<Typography variant="bodyMedium" color="secondary">
				This is a heading one
			</Typography>
			<Typography variant="bodySmall" color="orange">
				This is a heading one
			</Typography>
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
		</>
	)
}

export default App
