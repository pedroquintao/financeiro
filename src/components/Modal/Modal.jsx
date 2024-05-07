import styled from "@emotion/styled";
import { Card } from "../Card/Card";
import { Row, Col } from "react-grid-system";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Button } from "../Button/Button";
import { TablesDataBaseContext } from "../../context/TablesDataBaseContext";


const StyledBackground = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    &:hover {
        background-color: #1f0000e1;
    }
`

const StyledCard = styled.div`
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const StyledCloseButton = styled.div`
    color: ${props => props.theme.colors.dark.c};
    font-size: 5rem;
    &:hover {
        color: ${props => props.theme.colors.dark.a};
        cursor: pointer;
    }
`

const Modal = ( { children, backgroundColor } ) => {

    const { modalResourceType, toggleModalVisibility } = useContext(ModalContext)
    const { addItem } = useContext(TablesDataBaseContext)
    // const { createStringTest } = useContext(DateContext)


    return (
        <>
            <StyledCard>
                <Card backgroundColor={backgroundColor}>
                    <Row className="BOTAO FECHA">
                        <StyledCloseButton style={{position: "absolute", top: '1rem', right: '1rem'}} onClick={() => toggleModalVisibility()}>&times;</StyledCloseButton>
                    </Row>
                    <Row className="AREA DO INPUT">
                        { children }
                    </Row>
                    <Row className="BOTOES">
                        <Col>
                            <Button onClick={() => {if(addItem(modalResourceType)){
                                                            toggleModalVisibility();
                                                        }}} 
                                    buttonType='primary' 
                                    resourcesType={modalResourceType}>
                                        Aceitar
                            </Button>
                        </Col>
                        <Col align='right'>
                            <Button onClick={() => toggleModalVisibility() } 
                                    buttonType='secondary' 
                                    resourcesType={modalResourceType}>
                                        Cancelar
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </StyledCard>
            <StyledBackground onClick={() => toggleModalVisibility()} />
        </>
    )
}

export default Modal;