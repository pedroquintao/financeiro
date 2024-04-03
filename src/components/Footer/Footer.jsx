import { Container, Row, Col } from 'react-grid-system'
import moneyIcon from './money.png'
import styled from '@emotion/styled'

const FooterDiv = styled.footer`
    background-color: ${prop => prop.theme.colors.dark.a};
`

const StylizedMoneyIcon = styled.img`
    max-width: 100%;
`

export const Footer = () => {
    return (    
    <FooterDiv>    
        <Container>
            <Row align='center'>
                <Col lg={3} md={3} sm={3}>
                    <Row>
                        <figure>
                            <StylizedMoneyIcon src={moneyIcon}/>
                        </figure>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <h1>Financeiro</h1>
                    <p>Desenvolvido por Pedro Quintão, projeto de estudo fictício sem fins comerciais</p>
                </Col>

            </Row>
        </Container>
    </FooterDiv>
    )
}