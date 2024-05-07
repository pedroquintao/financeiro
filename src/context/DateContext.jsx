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