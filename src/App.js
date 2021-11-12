import SelectBox from './components/SelectBox'

const App = () => {
	return (
		<div>
			<SelectBox
				data={[
					'Afghanistan',
					'Albania',
					'Algeria',
					'American Samoa',
					'Andorra',
					'Uzbekistan',
				]}
				width="300px"
			/>
		</div>
	)
}
export default App
