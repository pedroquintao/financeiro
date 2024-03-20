import styled from "@emotion/styled"
import { useState } from "react"
import Table from "../Table/Table"

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: ${props => props.theme.spacing.s};
    padding: 0 ${props => props.theme.spacing.s};
`
const StyledTitle = styled.div`
    display: flex;
    gap: ${props => props.theme.spacing.s};
    align-items: center;
    flex-grow: 1;

`


const ResumeCard = ({ type }) => {

    const [tableVisibility, setTableVisibility] = useState(false)

    const toggleTableVIsibility = () => {setTableVisibility(!tableVisibility)}

    return (
        <>
            {type === 'expense' ? 
            
                    (<>
                            <StyledCard onClick={() => toggleTableVIsibility()}
                                        style={{border: '2px solid #b44d4d',
                                                borderLeft: '12px solid #b44d4d',
                                                backgroundColor: '#fff3f3'
                                                }}>
                                <StyledTitle>
                                    <h1 style={{color: '#b44d4d'}}>$</h1>
                                        <div>
                                            <h3>Despesas</h3>
                                            <p>A pagar</p>
                                        </div>
                                </StyledTitle>

                                <div>
                                    <h3>R$ 4000,00</h3>
                                    <p>R$ 600,00</p>
                                </div>
                            </StyledCard>
                            {tableVisibility && <Table backgroundColor={'#fff3f3'}/>}
                    </>)

                    :

                    (<>
                            <StyledCard onClick={() => toggleTableVIsibility()}
                                        style={{border: '2px solid green',
                                                borderLeft: `12px solid green`,
                                                backgroundColor: 'white'
                                                }}>
                                <StyledTitle>
                                    <h1 style={{color: type}}>$</h1>
                                        <div>
                                            <h3>Receitas</h3>
                                            <p>A receber</p>
                                        </div>
                                </StyledTitle>

                                <div>
                                    <h3>R$ 4000,00</h3>
                                    <p>R$ 600,00</p>
                                </div>
                            </StyledCard>
                            {tableVisibility && <Table backgroundColor={'white'}/>}
                    </>)
                }
        </>
    )
}

export default ResumeCard