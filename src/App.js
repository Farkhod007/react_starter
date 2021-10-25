import Typography from './components/Typography'
import './App.css'
import BackTop from './components/GoTop'

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
			<p style={{margin: "0 0 1100px 0"}}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
				necessitatibus, neque. Blanditiis corporis cumque deserunt, error eum fugit, hic magnam maxime molestiae
				molestias perferendis porro quod, sequi sunt veritatis voluptatem?
			</p>
			<BackTop />
		</div>
	)
}

export default App
