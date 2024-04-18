import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

const Date = () => {

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2022');
  const [years, setYears] = useState([selectedYear])
  const [selectedDate, setSelectedDate] = useState('');

    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];


    const updateSelectedYear = (direction) => {

            switch(direction) {

              case 'right':
                const nextYear = (parseInt(selectedYear) + 1).toString()
                setSelectedYear(nextYear)

                if(!years.includes(nextYear)){
                  setYears(prevState => [...prevState, nextYear])
                }

                break

              case 'left':
                const previousYear = (parseInt(selectedYear) - 1).toString()
                setSelectedYear(previousYear)

                if(!years.includes(previousYear)){
                  setYears(prevState => [previousYear, ...prevState ])
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
                      <button onClick={() => updateSelectedYear('left')}>{'<'}</button>
                      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                        {years.map((year, index) => (
                          <option key={index} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <button onClick={() => updateSelectedYear('right')}>{'>'}</button>
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
              {/* <button onClick={() => console.table('Dates: ', Dates)}>TESTE</button> */}
            </Container>)
}

export default Date;