import SelectBox from './components/SelectBox'
import Button from './components/Button'

const App = () => {
	return (
		<div style={{ margin: '50px' }}>
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
			<Button
				type="submit"
				width="100px"
				height="40px"
				border=" none"
				background="#000"
				color="white"
				children="hello"
				radius="5px"
				size="20px"
				icon={<i className="fas fa-arrow-alt-circle-right" />}
				handleClick={() =>
					console.log('You clicked on the pink circle!')
				}
			/>
		</div>
	)
}
export default App
