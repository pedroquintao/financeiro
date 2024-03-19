import { Col, Container, Row } from "react-grid-system"
import { Card } from "../components/Card/Card"
import Table from "../components/Table/Table"
import Resume from "../components/Resume/Resume"
import { Date } from "../components/Date/Date"
import { Balance } from "../components/Balance/Balance"

const NewControl = () => {
    return (
    <Container>
        <Card>
            <Row justify="center">
                <Date />
            </Row>
            <Row justify="center">
                <Balance />
            </Row>
            <Row>
                <Col>
                    <Resume />
                    <Table />
                </Col>
                <Col>
                    <Resume />
                    <Table />
                </Col>
            </Row>
        </Card>
    </Container>
    )
}

export default NewControl