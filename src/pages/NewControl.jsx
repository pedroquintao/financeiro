import { Col, Container, Row } from "react-grid-system"
import { Card } from "../components/Card/Card"
import Table from "../components/Table/Table"
import ResumeCard from "../components/ResumeCard/ResumeCard"
import Date from "../components/DateSelectors/DateSelectors"
import { Balance } from "../components/Balance/Balance"
import { InputsTest } from "../components/DataInputs/DataInputs"
import { TableContext } from "../context/TableContext"
import { useContext } from "react"
import Modal from "../components/Modal/Modal"
import { ModalContext } from "../context/ModalContext"

const NewControl = () => {

    const { tableVisibility} = useContext(TableContext)
    const { modalVisibility } = useContext(ModalContext)

    return (
    <Container>
        <Card backgroundColor={ props => props.theme.colors.neutral.a }>
            <Card backgroundColor={ props => props.theme.colors.neutral.a }>
                <Row justify="center">
                    <Date />
                </Row>
                <Row justify="center" align="start">
                    <Balance />
                </Row>
            </Card>
        <Row>
            <Col>
                <ResumeCard resourcesType={'revenue'}/>
                {tableVisibility.revenueTableVisibility && 
                    <Table resourcesType={'revenue'}/>
                }
            </Col>
            <Col>
                <ResumeCard resourcesType={'expense'}/>
                {tableVisibility.expenseTableVisibility && 
                    <Table resourcesType={'expense'}/>
                }
            </Col>
        </Row>
        </Card>
        {modalVisibility && 
            <Modal backgroundColor={props => props.theme.colors.neutral.c}>
                <InputsTest />
            </Modal>
            }
    </Container>
    )
}

export default NewControl