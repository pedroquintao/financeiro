import styled from "@emotion/styled"

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 2px solid ${props => props.theme.colors.dark.b};
    border-radius: ${props => props.theme.spacing.s};
    border-left: 12px solid green;
    padding: 0 ${props => props.theme.spacing.s};
`
const StyledTitle = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing.s};
    align-items: center;
    /* background-color: red; */
    flex-grow: 1;

`

const Resume = () => {
    return (
            <StyledCard>
                <StyledTitle>
                    <h1 style={{color: 'green'}}>$</h1>
                        <div>
                            <h3>Receitas</h3>
                            <p>A receber</p>
                        </div>
                </StyledTitle>

                <div>
                    <h3>R$ 4000,00</h3>
                    <p>R$ 600,00</p>
                </div>
            </StyledCard>

    )
}

export default Resume