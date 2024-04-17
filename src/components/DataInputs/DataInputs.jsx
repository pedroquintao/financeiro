import { useContext } from "react"
import { TableContext } from "../../context/TableContext";
import { Container, Row, Col } from "react-grid-system";
import styled from "@emotion/styled";
import { ColorHandlerContext } from "../../context/ColorHandlerContext";
import { ModalContext } from "../../context/ModalContext";

const StyledLabel = styled.label`
    margin-top: ${props => props.theme.spacing.s};
`

const StyledInput = styled.input`
    padding: 0 1em;
    height: 3em;
    width: 200px;
    border: 1px solid ${props => props.colorHandler('border')};
    border-radius: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.s};
    &:hover {
        background-color: ${props => props.theme.colors.neutral.d}
    }
`

export const InputsTest = () => {

    const {itemName, itemValue, itemStatus, seItemName, setItemValue, setItemStatus, inputNameError, inputValueError } = useContext(TableContext)
    const {colorHandler} = useContext(ColorHandlerContext)
    const { modalResourceType } = useContext(ModalContext)

    return (

        <Container style={{padding: '40px', margin: '40px'}}>
            <Row>
                <Col>
                    <StyledLabel>Name</StyledLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StyledInput  type="text"
                                  placeholder="Salario"
                                  value={itemName}
                                  onChange={(e) => seItemName(e.target.value)}
                                  colorHandler={colorHandler}
                                  resourcesType={modalResourceType}
                            />
            <Row>
                <Col>
                    {inputNameError && <span style={{ color: 'red' }}>{inputNameError}</span>}
                </Col>
            </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StyledLabel>Value</StyledLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StyledInput  type="number"
                                  placeholder="4000,00" 
                                  value={itemValue}
                                  onChange={e => {setItemValue(e.target.value)}}
                                  colorHandler={colorHandler}
                                  resourcesType={modalResourceType}
                    />
            <Row>
                <Col>
                    {inputValueError && <span style={{ color: 'red' }}>{inputValueError}</span>}
                </Col>
            </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input  type="checkbox"
                                placeholder="Status" 
                                value={itemStatus}
                                onChange={e => {setItemStatus(e.target.value)}} 
                    />
                </Col>
            </Row>
        </Container>

    )
}