import { useRef, useEffect, useState } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

const GoogleMap = () => {
	const ref = useRef(null)
	const [map, setMap] = useState()

	useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center: { lat: -34.397, lng: 150.644 },
					zoom: 8,
				})
			)
		}
	}, [ref, map])

	return (
		<Wrapper apiKey="AIzaSyBhCC7Er3OuuKbr9vnSHaq27ACeZ7pCU2I">
			<div ref={ref} />
		</Wrapper>
	)
}

export default GoogleMap
