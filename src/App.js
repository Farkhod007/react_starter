import Typography from './components/Typography'
import './App.css'
import Picture from './components/Picture'

const App = () => {
	return (
		<div>
			<Typography variant='h1'>This is a heading one</Typography>
			<Typography variant='h2' color='papayawhip'>
				This is a heading one
			</Typography>
			<Typography variant='bodyOne' color='secondary'>
				This is a heading one
			</Typography>
			<Picture one='./images/1.jpg' two='./images/2.jpg' three='./images/3.jpg' />
		</div>
	)
}

export default App
