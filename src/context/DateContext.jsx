import { createContext, useEffect, useState } from "react";

export const DateContext = createContext();

export const DateContextProvider = ({ children }) => {
    
    const [selectedYear, setSelectedYear] = useState('2024')
    const [years, setYears] = useState([selectedYear])
    const [selectedMonth, setSelectedMonth] = useState('Abril')

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
    
    const updateYearHandler = (direction) => {

        if (direction === 'right') {
            const nextYear = (parseInt(selectedYear) + 1).toString();
            console.log('TESTE>>> ', years.map((year) => year));
            setSelectedYear(nextYear);
        
            if (!years.includes(nextYear)) {
            setYears(prevState => [...prevState, nextYear]);
            }
        }

        else if (direction === 'left') {
            const previousYear = (parseInt(selectedYear) - 1).toString();
            console.log('TESTE<<<< ', years.map((year) => year));
            setSelectedYear(previousYear);

            if (!years.includes(previousYear)) {
            setYears(prevState => [previousYear, ...prevState]);
            }
        }

        else {
            console.error('Direção errada!', direction);
        }
    }

    const updateMonthHandler = (event) => {
        setSelectedMonth(event.target.value);
      };
    
    // const createStringTest = () => {
    //     setStringTest(JSON.parse(`{"${year}": {"${month}": {"name": "${itemName}", "value": ${itemValue}, "status": "${itemStatus}"}}}`))
    // }
    useEffect(() => {
        const selectedYearIndex = years.indexOf(selectedYear)
        console.log('________________________________________\n\n')
        console.log('O ano atual é: ', selectedYear)
        console.log('Array de Anos: ', years)
        console.log('O indice do ano atual é', selectedYearIndex)
        console.log('________________________________________\n\n')
  }, [selectedYear, years])

    const context = { years, 
                      months, 
                      selectedYear, 
                      selectedMonth, 
                      updateYearHandler, 
                      updateMonthHandler, 
                      setSelectedYear, 
                      setSelectedMonth  }

    return(
        <DateContext.Provider value={ context }>
            { children }
        </DateContext.Provider>
    )
} 