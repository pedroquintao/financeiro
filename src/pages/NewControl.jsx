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
import { ModalContext } from "../context/ModalContext"
import { Button } from "../components/Button/Button"

const NewControl = () => {

    const { tableVisibility, toggleTableVisibility} = useContext(TableContext)
    const { modalVisibility, setModalVisibility, toggleModalVisibility } = useContext(ModalContext)

    return (
    <Container>
        <Card backgroundColor={ props => props.theme.colors.neutral.a }>
            <Card>
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
                {tableVisibility && 
                    <Table resourcesType={'revenue'}/>
                }
            </Col>
            <Col>
                <ResumeCard resourcesType={'expense'}/>
                {tableVisibility && 
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