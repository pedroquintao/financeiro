import { Container, Row, Col } from 'react-grid-system'
import moneyIcon from './money.png'
import styled from '@emotion/styled'

const HeaderDiv = styled.header`
    background-color: ${prop => prop.theme.colors.dark.a};
`

const StylizedMoneyIcon = styled.img`
    max-width: 100%;
`

export const Header = () => {
    return (
        <HeaderDiv>    
            <Container>
                <Row align='center' justify='between'>
                    <Col lg={3} md={3} sm={3}>
                        <Row>
                        <figure>
                            <StylizedMoneyIcon src={moneyIcon}/>
                        </figure>

                        </Row>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <h1>FinApp!</h1>
                    </Col>
                    <Col style={{textAlign: 'right'}} lg={3} md={3} sm={3}>
                        <p>Login</p>
                    </Col>
                </Row>
            </Container>
        </HeaderDiv>
    )
}

