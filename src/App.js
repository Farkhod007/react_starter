<<<<<<< HEAD
import Typography from './components/Typography'
import GoogleMap from './components/GoogleMap'
import YandexMap from './components/YandexMap'
=======
>>>>>>> 8a6b1ca235013a6919d2ff2c70d29ec772286f04
import './App.css'
import Ratio from './components/Ratio'
import React from 'react'
import Picture from './components/Picture'

const App = () => {
	return (
<<<<<<< HEAD
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
			<GoogleMap />
			<YandexMap />
		</>
=======
		<div>
			<Ratio ratio={16/9}>
				<Picture
					data={[
						{
							src: "./images/3.jpg",
							media: "(min-width: 900px)",
						},
						{
							src: "./images/2.jpg",
							media: "(min-width: 800px)",
						},
					]}
					fallback="./images/1.jpg"
					alt="Alt text"
					width="100%"
					height="100%"
				/>
			</Ratio>
		</div>
>>>>>>> 8a6b1ca235013a6919d2ff2c70d29ec772286f04
	)
}

export default App
