import Styled from './style-components'

const Images = ({ id, src, alt, width ='100%', height = '100%', maxwidth = '100%' }) => {
	return (
		<>
			<Styled.Img
				id={id} src={src} alt={alt}
				style={{maxWidth: maxwidth , width: width , height:height }}
			/>
		</>
	)
}
export default Images