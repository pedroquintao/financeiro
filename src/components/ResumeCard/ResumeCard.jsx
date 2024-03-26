import styled from "@emotion/styled"
import { useContext } from "react"
import Table from "../Table/Table"
import { TableContext } from "../../context/TableContext"

const colorHandler = (handlerType) => {
    switch(handlerType) {
        case 'border':
        case 'title':
            return props => props.cardType === 'revenue' ? 'green' 
                  : props.cardType === 'expense' ? '#b44d4d' 
                  : 'black'
        case 'background':
            return props => props.cardType === 'revenue' ? 'white' 
                  : props.cardType === 'expense' ? '#fff3f3' 
                  : 'black'
        default:
            console.log('Wrong input!')
    }
}

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${colorHandler('background')};
    border: 2px solid ${colorHandler('border')};
    border-left: 12px solid ${colorHandler('border')};;
    border-radius: ${props => props.theme.spacing.s};
    padding: 0 ${props => props.theme.spacing.s};
`

const StyledTitle = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing.s};
    align-items: center;
    flex-grow: 1;
    color: ${colorHandler('title')};
`

const ResumeCard = ({ cardType }) => {

    const { tableVisibility, toggleTableVIsibility } = useContext(TableContext)

    return (
        <>
            <StyledCard onClick={() => toggleTableVIsibility()} cardType={cardType}>
                <StyledTitle cardType={cardType}>
                    <h1>$</h1>
                    <div>
                        <h3>
                            { cardType === 'revenue' ? 'Receitas' 
                            : cardType === 'expense' ? 'Despesas'
                            : 'ERROR!'}
                        </h3>
                        <p>
                            { cardType === 'revenue' ? 'A receber' 
                            : cardType === 'expense' ? 'A pagar'
                            : 'ERROR!'}
                        </p>
                    </div>
                </StyledTitle>

                <div>
                    <h3>
                        { cardType === 'revenue' ? '4000,00' 
                        : cardType === 'expense' ? '2000,00'
                        : 'ERROR!'}
                    </h3> 
                    <p>
                        { cardType === 'revenue' ? '500,00' 
                        : cardType === 'expense' ? '100,00'
                        : 'ERROR!'}
                    </p>
                </div>
            </StyledCard>
            {tableVisibility && <Table />}
        </>
    )
}

export default ResumeCard