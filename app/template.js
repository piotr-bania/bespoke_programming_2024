import Animation_Wrapper from './components/ui/transitions/Animation_Wrapper'

const Template = ({ children }) => {
    return (
        <Animation_Wrapper>
            {children}
        </Animation_Wrapper>
    )
}

export default Template