import styled from "@emotion/styled"
import { useContext } from "react"
import { TableContext } from "../../context/TableContext"

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.colorHandler('background')};
    border: 2px solid ${props => props.colorHandler('border')};
    border-left: 12px solid ${props => props.colorHandler('border')};;
    border-radius: ${props => props.theme.spacing.s};
    padding: 0 ${props => props.theme.spacing.s};

    &:hover {
        background-color: ${props => props.colorHandler('hover')}
    }
`

const StyledTitle = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing.s};
    align-items: center;
    flex-grow: 1;
    color: ${props => props.colorHandler('title')};
`

const ResumeCard = ({ resourcesType }) => {

    const { colorHandler } = useContext(TableContext)

    return (
        <>
            <StyledCard resourcesType={resourcesType}
                        colorHandler={colorHandler}>
                <StyledTitle resourcesType={resourcesType}
                             colorHandler={colorHandler}>
                    <h1>$</h1>
                    <div>
                        <h3>
                            { resourcesType === 'revenue' ? 'Receitas' 
                            : resourcesType === 'expense' ? 'Despesas'
                            : 'ERROR!'}
                        </h3>
                        <p>
                            { resourcesType === 'revenue' ? 'A receber' 
                            : resourcesType === 'expense' ? 'A pagar'
                            : 'ERROR!'}
                        </p>
                    </div>
                </StyledTitle>

                <div>
                    <h3>
                        { resourcesType === 'revenue' ? '4000,00' 
                        : resourcesType === 'expense' ? '2000,00'
                        : 'ERROR!'}
                    </h3> 
                    <p>
                        { resourcesType === 'revenue' ? '500,00' 
                        : resourcesType === 'expense' ? '100,00'
                        : 'ERROR!'}
                    </p>
                </div>
            </StyledCard>
        </>
    )
}

export default ResumeCard