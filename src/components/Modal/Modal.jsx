import styled from "@emotion/styled";
import { Card } from "../Card/Card";
import { Row, Col, Container } from "react-grid-system";

const StyledBackground = styled.div`
    position: fixed;
    z-index: 2;
    justify-content: center;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 1);
`

const Modal = ( { children, backgroundColor } ) => {
    return (
        <StyledBackground>
            <Container align='center'>
                <Col align='center' lg={8} md={6} sm={2} >

                        <Card backgroundColor={backgroundColor}>
                            { children }
                        </Card>

                </Col>

            </Container>
        </StyledBackground>
    )
}

export default Modal;