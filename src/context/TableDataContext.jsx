import { createContext, useContext, useEffect, useState } from "react";

export const TableDataContext = createContext();

export const TableDataContextProvider = ({ children }) => {

    const [selectedYear, setSelectedYear] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedTableType, setSelectedTableType] = useState();
    const [selectedName, setSelectedName] = useState();
    const [selectedValue, setSelectedValue] = useState();
    const [selectedStatus, setSelectedStatus] = useState();
    const [dataBase, setDataBase] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [filtredArray, setFiltredArray] = useState();

    const addItem = () => {

        const newData = {
            year: selectedYear,
            month: selectedMonth,
            tableType: selectedTableType,
            name: selectedName,
            value: selectedValue,
            status: selectedStatus
            }

        setDataBase(prevState => [...prevState, newData])
        console.log('A linha: ',newData, 'foi adicionada ao banco de dados\nO banco de dados atuale é:', dataBase)
    }

    const filterItems = () => {
        setFiltredArray(dataBase.filter(obj => obj.name === selectedFilter));
    }

    useEffect(() => {console.table(dataBase)}, [dataBase])
    useEffect(() => {console.table(filtredArray)}, [filtredArray])

    const context = {
                    selectedYear,
                    selectedMonth,
                    selectedTableType,
                    selectedName,
                    selectedValue,
                    selectedStatus, 
                    setSelectedYear,
                    setSelectedMonth,
                    setSelectedTableType,
                    setSelectedName,
                    setSelectedValue,
                    setSelectedStatus,
                    addItem,
                    selectedFilter,
                    setSelectedFilter,
                    filterItems };

    return(
        <TableDataContext.Provider value={context}>
            { children }
        </TableDataContext.Provider>
    )
}