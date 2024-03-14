import { Col, Container, Row } from "react-grid-system"
import { Card } from "../components/Card/Card"
import Table from "../components/Table/Table"
import Resume from "../components/Resume/Resume"

const NewControl = () => {
    return (
    <Container>
        <Card>
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