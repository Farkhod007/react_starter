import './App.css'
import Image from './components/Images'
import React from 'react'

const App = () => {
	return (
		<div>
			<Image
				src='./images/1.jpg'
				height='100vh'
				maxWidth='500px'
				width='100%'
			/>
		</div>
	)
}

export default App
