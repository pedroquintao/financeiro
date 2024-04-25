import { useContext } from "react";
import { Container, Row, Col } from "react-grid-system";
import { DateContext } from "../../context/DateContext";
import styled from "@emotion/styled/macro";

const Date = () => {

  const { years, months, selectedYear, selectedMonth, updateYearHandler, updateMonthHandler, setSelectedYear } = useContext(DateContext)

  const StyledDirectionButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 16px;
    padding: 0.5em;
    margin: 0 2em;
    font-size: 48px;

    &:hover {
      color: ${props => props.theme.colors.dark.d};
    }
  `

  const StyledSelect = styled.select`
   	-webkit-appearance: none;
    -moz-appearance: none;
	  appearance: none;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.neutral.d};
    border: none;
    border-radius: 16px;
    padding: 0.5em;
    margin: 16px;
    font-size: 32px;
    text-align: center;
    width: 150px;

    &:hover {
      background-color:  ${props => props.theme.colors.neutral.c};
    }
  `
    return (<Container> 
              <Col>
                <Row justify="center" align="center">
                  <Col>
                  <StyledDirectionButton onClick={() => updateYearHandler('left')}>{'❮'}</StyledDirectionButton>
                  <StyledSelect value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </StyledSelect>
                  <StyledDirectionButton onClick={() => updateYearHandler('right')}>{'❯'}</StyledDirectionButton>
                  </Col>
                </Row>
                <Row justify="center" align="center">
                  <StyledSelect value={selectedMonth} onChange={updateMonthHandler}>
                    <option value="" disabled hidden>Mês</option>
                    {months.map((mes, index) => (
                      <option key={index} value={mes}>
                        {mes}
                      </option>
                    ))}
                  </StyledSelect>
                </Row>
              </Col>
            </Container>)
}

export default Date;