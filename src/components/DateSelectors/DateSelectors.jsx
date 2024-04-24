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
    font-weight: 700;
    font-size: 48px;

    &:hover {
      background-color: red;
    }
  `

  const StyledSelect = styled.select`
    display: flex;
    /* justify-content: center; */
    text-align: center;
    background-color: transparent;
    border: none;
    border-radius: 16px;
    /* padding: 1em 3em 1em 2em; */
    font-size: 24px;

    &:hover {
      background-color: yellow;
    }
  `
    return (<Container> 
              <Col>
                <Row justify="center" align="center">
                  <StyledDirectionButton onClick={() => updateYearHandler('left')}>{'❮'}</StyledDirectionButton>
                  <StyledSelect value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </StyledSelect>
                  <StyledDirectionButton onClick={() => updateYearHandler('right')}>{'❯'}</StyledDirectionButton>
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