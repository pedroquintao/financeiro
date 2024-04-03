import styled from "@emotion/styled"

const StyledDiv = styled.div`
    padding: ${props => props.theme.spacing.l};
    border-radius: ${props => props.theme.spacing.s};
    background-color: ${props => props.backgroundColor};
    margin: ${props => props.theme.spacing.l} 0;
`

export const Card = ({ children, backgroundColor = 'white'}) => {
    return (
        <StyledDiv backgroundColor={ backgroundColor}>
            { children }
        </StyledDiv>
    )
}