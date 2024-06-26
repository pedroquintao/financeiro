import styled from "@emotion/styled";
import { useContext } from "react";
import { TablesDataBaseContext } from "../../context/TablesDataBaseContext";
import { Button } from "../Button/Button";
import { ColorHandlerContext } from "../../context/ColorHandlerContext";
import { ModalContext } from "../../context/ModalContext";

const StyledTable = styled.table`
    background-color: ${props => props.colorHandler('background')};
    width: 100%;
    border: 2px solid ${props => props.colorHandler('border')};
    border-top: 0;
    border-radius: 0 0 ${props => props.theme.spacing.xs} ${props => props.theme.spacing.xs};
`
const StyledTable2 = styled.table`
    background-color: ${props => props.colorHandler('background')};
    width: 100%;
    border: 2px solid ${props => props.colorHandler('border')};
    border-top: 0;
    padding: 0.5em 1em;
    /* border-radius: 0 0 ${props => props.theme.spacing.xs} ${props => props.theme.spacing.xs}; */
`
const StyledTr = styled.tr`
    color: ${props => props.colorHandler('border')};
`
const StyledTd = styled.td`
    border-top: 2px solid ${props => props.colorHandler('border')};
    text-align: center;
`
const Table = ({ resourcesType }) => {

    const { tablesDataBase, calculateTotals, toggleCheckBox, filterTable } = useContext(TablesDataBaseContext)
    const { colorHandler } = useContext(ColorHandlerContext)
    const { toggleModalVisibility } = useContext(ModalContext)

    const currentTable = filterTable()[resourcesType]

    return (
        <>
            <StyledTable2 resourcesType={resourcesType} 
                         colorHandler={colorHandler}>
                <thead>
                    <tr>
                        <th>
                            <Button onClick={() => toggleModalVisibility(resourcesType)}
                                    buttonType="primary"
                                    resourcesType={resourcesType}>
                                        Adicionar
                            </Button>
                        </th>
                    </tr>
                </thead>
            </StyledTable2>
            <StyledTable resourcesType={resourcesType} 
                         colorHandler={colorHandler}>
                <thead>
                    <StyledTr resourcesType={resourcesType} 
                              colorHandler={colorHandler}>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Estado</th>
                    </StyledTr>
                </thead>
                <tbody> 
                    {currentTable.map((row, index) => (
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
                                <input type="checkbox"
                                       onChange={() => {
                                        toggleCheckBox(index, resourcesType)}}
                                        // value={itemStatus}
                                        ></input>
                            </StyledTd>
                        </tr>
                    ))}
                    <StyledTr resourcesType={resourcesType} 
                              colorHandler={colorHandler}>
                        <StyledTd resourcesType={resourcesType} 
                                  colorHandler={colorHandler}>
                            <h3>
                                Total
                            </h3>
                        </StyledTd>
                        <StyledTd resourcesType={resourcesType} 
                                  colorHandler={colorHandler}></StyledTd>
                    <StyledTd resourcesType={resourcesType} 
                              colorHandler={colorHandler}>
                            <h3>
                                R$ {calculateTotals(currentTable)}
                            </h3>
                        </StyledTd>
                    </StyledTr>
                </tbody>
            </StyledTable>
        </>
    )
}

export default Table;