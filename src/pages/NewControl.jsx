import { Col, Container, Row } from "react-grid-system"
import { Card } from "../components/Card/Card"
import Table from "../components/Table/Table"
import ResumeCard from "../components/ResumeCard/ResumeCard"
import { Date } from "../components/Date/Date"
import { Balance } from "../components/Balance/Balance"
import { InputsTest } from "../components/InputsTest/InputsTest"

const NewControl = () => {
    return (
    <Container>
        <Card>
            <Card>
                <Row justify="center">
                    <Date />
                </Row>
                <Row justify="center" align="start">
                    <Balance />
                </Row>
            <Row justify="center">
                <InputsTest />
            </Row>
            </Card>
            <Row>
                <Col>
                    <ResumeCard cardType={'revenue'}/>
                </Col>
                <Col>
                    <ResumeCard cardType={'expense'}/>
                </Col>
            </Row>
        </Card>
    </Container>
    )
}

export default NewControl