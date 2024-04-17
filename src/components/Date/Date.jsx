import { useEffect, useState } from "react";

const Date = () => {

    const [selectedDate, setSelectedDate] = useState('');

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('2022')

    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const years = [
      '2020', '2021', '2022', '2023','2024','2025','2026'
    ]
    
    // const handleYearChange = (direction) => {
    //   if(direction !== 'right' && direction !== 'left') {
    //     console.error('Direção errada!', direction)
    //   }

    //   const selectedYearIndex = years.indexOf(selectedYear)
    //   direction === 'right' ? sele
    // }

    const executaTeste = () => {
          // setSelectedYear(() => {
            const newYearInt = parseInt(selectedYear) + 1
            const newYearString = newYearInt.toString()
            setSelectedYear(newYearString)
            console.log('Ano anterior: ', selectedYear, ' novo ano é: ', newYearString)
          // })
        }

        useEffect(() => {
              const selectedYearIndex = years.indexOf(selectedYear)
              console.log('O ano atual é: ', selectedYear)
              console.log('O indice é ', selectedYearIndex, ' o correto deveria ser: 4')
        }, [selectedYear])

    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };

    return (<>  
              <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="" disabled hidden>Mês</option>
                {months.map((mes, index) => (
                  <option key={index} value={mes}>
                    {mes}
                  </option>
                ))}
              </select>
              <button onClick={() => executaTeste()}>TESTE</button>
            </>)
}

export default Date;