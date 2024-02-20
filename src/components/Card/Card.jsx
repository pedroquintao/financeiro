import styled from "@emotion/styled"

const DivEstilizada = styled.div`
    padding: ${props => props.theme.spacing.l};
    border-radius: ${props => props.theme.spacing.s};
    background-color: ${props => props.theme.colors.neutral.a};
    /* border: 2px solid ${props => props.theme.colors.dark.a}; */
    /* box-shadow: 10px 10px 25px ${props => props.theme.colors.dark.a}; */
    margin: 40px 0;
`

export const Card = ({ children }) => {
    return (
        <DivEstilizada>
            { children }
        </DivEstilizada>
    )
}