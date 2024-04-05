import styled from "@emotion/styled";
import { Card } from "../Card/Card";
import { Row, Col, Container } from "react-grid-system";

const StyledBackground = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.95);
`

const StyledCard = styled.div`
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Modal = ( { children, backgroundColor } ) => {
    return (
        <>
            <Container>
                <StyledCard>
                    <Card backgroundColor={backgroundColor}>
                        <Col>
                            <Row align="center" justify="end">
                                <h1>X</h1>
                            </Row>
                            <Row>
                                { children }
                            </Row>
                        </Col>
                    </Card>
                </StyledCard>
            </Container>
            <StyledBackground>
            </StyledBackground>
        </>
    )
}

export default Modal;