import styled from "@emotion/styled";


const StyledTable = styled.table`
    background-color: white;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.dark.b};
    border-radius: ${props => props.theme.spacing.s};
    border-left: 12px solid green;


`
const StyledTr = styled.tr`
    /* background-color: red; */
`

const StyledTd = styled.td`
    border-top: 2px solid ${props => props.theme.colors.neutral.a};
    text-align: center;
`
const Table = () => {
    const tableOn = false;
    return (
        <>
            {tableOn && <StyledTable>
                <StyledTr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Estado</th>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Salário</StyledTd>
                    <StyledTd>R$4000,00</StyledTd>
                    <StyledTd><input type="checkbox"></input></StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Salário</StyledTd>
                    <StyledTd>R$4000,00</StyledTd>
                    <StyledTd><input type="checkbox"></input></StyledTd>
                </StyledTr>
            </StyledTable>}
        </>
    )
}

export default Table;