import * as Styled from './styled-components'

const Picture = ({ data, fallback, alt, ...rest }) => {
	return (
		<picture>
			{data && data.map((item, index) => (
				<source key={index} srcSet={item.src} media={item.media} sizes={item.sizes} type='image/jpeg' />
			))}
			<Styled.Img src={fallback} alt={alt} {...rest} />
		</picture>
	)
}
export default Picture