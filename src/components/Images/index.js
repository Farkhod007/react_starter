import * as Styled from './style-components'

const Image = ({  src, alt , ...rest}) => {
	return (
		<>
			<Styled.Img {...rest}
				src={src} alt={alt}
			/>
		</>
	)
}
export default Image;