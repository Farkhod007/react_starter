import Styled from './styled-components'

const Picture = (props) => {
    return (
        <>
            <picture>
                <source media="(min-width:750px)" srcSet={props.one}/>
                <source media="(min-width:465px)" srcSet={props.two}/>
                <Styled.img src={props.three} alt="picture"/>
            </picture>
        </>
    )
}
export default Picture;