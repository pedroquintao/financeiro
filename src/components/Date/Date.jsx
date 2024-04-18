import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

const Date = () => {

  
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2022');
  const [years, setYears] = useState([selectedYear])
  const [selectedDate, setSelectedDate] = useState('');

  const Dates = {years: `${years.map((year) => {return year})}:`}

    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];


    const executaTeste = (direction) => {

            switch(direction) {

              case 'right':
                const yearPlusOne = parseInt(selectedYear) + 1
                const yearPlusOneString = yearPlusOne.toString()
                setSelectedYear(yearPlusOneString)

                if(!years.find((element) => element === yearPlusOneString)){
                  setYears(prevState => [...prevState, yearPlusOneString])
                }

                break

              case 'left':
                const yearMinusOne = parseInt(selectedYear) - 1
                const yearMinusOneString = yearMinusOne.toString()
                setSelectedYear(yearMinusOneString)

                if(!years.find((element) => element === yearMinusOneString)){
                  setYears(prevState => [yearMinusOneString, ...prevState ])
                }

                break

              default:
                console.error('Direção errada!', direction)
                break
            }
          // })
        }

        useEffect(() => {
              const selectedYearIndex = years.indexOf(selectedYear)
              console.log('O ano atual é: ', selectedYear)
              console.log('Array de Anos: ', years)
              console.log('O indice do ano atual é', selectedYearIndex)
        }, [selectedYear, years])

    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };

    return (<Container> 
              <Row justify="center" align="center">
                <Col justify="center" align="center">
                      <button onClick={() => executaTeste('left')}>{'<'}</button>
                      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                        {years.map((year, index) => (
                          <option key={index} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <button onClick={() => executaTeste('right')}>{'>'}</button>
                </Col>
              </Row>
              <Row>
                <Col>
                      <select value={selectedMonth} onChange={handleMonthChange}>
                        <option value="" disabled hidden>Mês</option>
                        {months.map((mes, index) => (
                          <option key={index} value={mes}>
                            {mes}
                          </option>
                        ))}
                      </select>
                </Col>
              </Row>
              <button onClick={() => console.table('Dates: ', Dates)}>TESTE</button>
            </Container>)
}

export default Date;