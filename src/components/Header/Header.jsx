import { Container, Row, Col } from 'react-grid-system'
import moneyIcon from './money.png'
// import styled from '@emotion/styled'

// const StylizedMoneyIcon = styled.img`
    
// `

export const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>teste</h1>
                </Col>
                <Col>
                    <h1>HEADER!</h1>
                </Col>
            </Row>
        </Container>
    )
}

