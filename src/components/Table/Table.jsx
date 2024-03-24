import styled from "@emotion/styled";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const StyledTable = styled.table`
    background-color: white;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.dark.b};
    border-radius: ${props => props.theme.spacing.xs};
    /* border-left: 12px solid green; */


`
const StyledTr = styled.tr`
    /* background-color: red; */
`

const StyledTd = styled.td`
    border-top: 2px solid ${props => props.theme.colors.neutral.a};
    text-align: center;
`
const Table = ({ backgroundColor }) => {

    const { table, setTable } = useContext(UserContext)

    return (
        <>
            <StyledTable style={{backgroundColor: backgroundColor}}>
                <thead>
                    <StyledTr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Estado</th>
                    </StyledTr>
                </thead>
                <tbody>
                    {table.map((row, index) => (
                        <StyledTr key={index}>
                            <StyledTd>{row.name}</StyledTd>
                            <StyledTd>{row.value}</StyledTd>
                            <StyledTd><input type="checkbox"></input></StyledTd>
                        </StyledTr>
                    ))}
                </tbody>
            </StyledTable>
        </>
    )
}

export default Table;