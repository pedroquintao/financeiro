import { useContext } from "react"
import { TableContext } from "../../context/TableContext";
import { Container, Row, Col } from "react-grid-system";

export const InputsTest = () => {

    const {itemName, itemValue, itemStatus, seItemName, setItemValue, setItemStatus, inputNameError, inputValueError } = useContext(TableContext)
    
    return (

        <Container style={{backgroundColor: 'green', padding: '40px', margin: '40px'}}>
            <Col>
                <Row>
                    <input  type="text"
                            placeholder="Salario"
                            value={itemName}
                            onChange={(e) => seItemName(e.target.value)}
                        />
                </Row>
                <br />
                <Row>
                    {inputNameError && <span style={{ color: 'red' }}>{inputNameError}</span>}
                </Row>
                <br />
                <Row>
                    <input  type="number"
                            placeholder="4000,00" 
                            value={itemValue}
                            onChange={e => {setItemValue(e.target.value)}} 
                    />
                </Row>
                <br />
                <Row>
                    {inputValueError && <span style={{ color: 'red' }}>{inputValueError}</span>}
                </Row>
                <br />
                <Row>
                    <input  type="checkbox"
                            placeholder="Status" 
                            value={itemStatus}
                            onChange={e => {setItemStatus(e.target.value)}} 
                    />
                </Row>
            </Col>
        </Container>

    )
}