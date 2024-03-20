import styled from "@emotion/styled"

const StyledDiv = styled.div`
    padding: ${props => props.theme.spacing.l};
    border-radius: ${props => props.theme.spacing.s};
    background-color: ${props => props.theme.colors.neutral.a};
    margin: ${props => props.theme.spacing.l} 0;
`

export const Card = ({ children, backgroundColor}) => {
    return (
        <StyledDiv style={{backgroundColor : backgroundColor}}>
            { children }
        </StyledDiv>
    )
}