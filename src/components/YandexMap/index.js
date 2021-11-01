import { useEffect, useRef } from 'react'

const YandexMap = () => {
	const mapRef = useRef(null)

	useEffect(() => {
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.src =
			'https://api-maps.yandex.ru/2.1/?apikey=166f5be8-db0b-452d-9de6-594ab5f8e9a3&lang=en_US'
		script.async = 'async'
		document.head.appendChild(script)

		window.ymaps.ready(initMap)
	}, [])


	const initMap = () => {
		let map = new window.ymaps.Map(mapRef.current, {
			center: [55.76, 37.64],
			zoom: 7,
		})
		map.behaviors.disable(['scrollZoom'])
	}

	return <div ref={mapRef} style={{ width: '600px', height: '400px' }}></div>
}

export default YandexMap
