import './App.css'
import Ratio from './components/Ratio'
import React from 'react'
import Picture from './components/Picture'

const App = () => {
	return (
		<div>
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
					height="500px"
				/>
			</Ratio>
		</div>
	)
}

export default App
