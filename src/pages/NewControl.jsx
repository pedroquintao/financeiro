import { Col, Container, Row } from "react-grid-system"
import { Card } from "../components/Card/Card"
import Table from "../components/Table/Table"
import ResumeCard from "../components/ResumeCard/ResumeCard"
import { Date } from "../components/Date/Date"
import { Balance } from "../components/Balance/Balance"
import { InputsTest } from "../components/InputsTest/InputsTest"
import { TableContext } from "../context/TableContext"
import { useContext } from "react"
import Modal from "../components/Modal/Modal"

const NewControl = () => {

    const { tableVisibility, toggleTableVIsibility } = useContext(TableContext)

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
                    <Modal backgroundColor="#F00">
                        <InputsTest />
                    </Modal>
                </Row>
            </Card>
            <Row>
                <Col>
                    <ResumeCard resourcesType={'revenue'}/>
                    <Table resourcesType={'revenue'}/>
                </Col>
                <Col>
                    <ResumeCard resourcesType={'expense'}/>
                    <Table resourcesType={'expense'}/>
                </Col>
            </Row>
        </Card>
    </Container>
    )
}

export default NewControl