import Typography from './components/Typography'
import './App.css'
import Ratio from './components/Ratio'
import React from 'react'
import Picture from './components/Picture'
import Image from './components/Images'
import Button from './components/Button'

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
			<Ratio ratio={16 / 9}>
				<Picture
					data={[
						{
							src: './images/3.jpg',
							media: '(min-width: 900px)',
						},
						{
							src: './images/2.jpg',
							media: '(min-width: 800px)',
						},
					]}
					fallback="./images/1.jpg"
					alt="Alt text"
					width="100%"
					height="100%"
				/>
				<Button background="yellow" color="dark" width="200px">
					Hello
				</Button>
			</Ratio>
		</>
	)
}

export default App
