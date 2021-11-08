import './App.css'
import Picture from './components/Picture'

const App = () => {
	return (
		<div>
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
				height="100vh"
			/>
		</div>
	)
}

export default App
