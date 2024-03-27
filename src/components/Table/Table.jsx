import styled from "@emotion/styled";
import { useContext } from "react";
import { TableContext } from "../../context/TableContext";



const StyledTable = styled.table`
    background-color: ${props => props.colorHandler('background')};
    width: 100%;
    border: 2px solid ${props => props.colorHandler('border')};
    border-radius: 0 0 ${props => props.theme.spacing.xs} ${props => props.theme.spacing.xs};
`
const StyledTh = styled.th`
    color: red;
`

const StyledTd = styled.td`
    border-top: 2px solid ${props => props.colorHandler('border')};
    text-align: center;
`
const Table = ({ resourcesType }) => {

    const { table, setTable, colorHandler } = useContext(TableContext)

    return (
        <>
            <StyledTable resourcesType={resourcesType} 
                         colorHandler={colorHandler}>
                <thead>
                    <tr resourcesType={resourcesType} 
                        colorHandler={colorHandler}>
                        <StyledTh>Descrição</StyledTh>
                        <StyledTh>Valor</StyledTh>
                        <StyledTh>Estado</StyledTh>
                    </tr>
                </thead>
                <tbody> 
                    {table.map((row, index) => (
                        <tr key={index}>
                            <StyledTd resourcesType={resourcesType} 
                                      colorHandler={colorHandler}>
                                {row.name}
                            </StyledTd>
                            <StyledTd resourcesType={resourcesType} 
                                      colorHandler={colorHandler}>
                                {row.value}
                            </StyledTd>
                            <StyledTd resourcesType={resourcesType} 
                                      colorHandler={colorHandler}>
                                <input type="checkbox"></input>
                            </StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </>
    )
}

export default Table;