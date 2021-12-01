import Typography from './components/Typography'
import GoogleMap from './components/GoogleMap'
import YandexMap from './components/YandexMap'
import Space from './components/Space'
import './App.css'

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
			<GoogleMap />
			{/* <YandexMap /> */}
			<Space size={48} direction="vertical" align="end" wrap="wrap">
				<div>div</div>
				<div style={{ width: "95%", border: "1px solid green" }}>div</div>
				<div>div</div>
				<div>div</div>
			</Space>
		</>
	)
}

export default App
