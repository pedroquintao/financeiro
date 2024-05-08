import { createContext, useContext, useEffect, useState } from 'react'
import { DateContext } from './DateContext';

export const TablesDataBaseContext = createContext(null);

export const TablesDataBaseContextProvider = ({ children }) => {
    
    const { selectedYear, selectedMonth} = useContext(DateContext)

    const [tablesDataBase, setTablesDataBase] = useState({revenue: [], expense: []})
    const [tableVisibility, setTableVisibility] = useState({revenueTableVisibility: false, expenseTableVisibility: false})
    const [itemName, seItemName] = useState('')
    const [itemValue, setItemValue] = useState('')
    const [itemStatus, setItemStatus] = useState(false)
    const [inputNameError, setInputNameError] = useState('')
    const [inputValueError, setInputValueError] = useState('')
    const [selectedRows, setSelectedRows] = useState([])
    
    const clearFormData = () => {
        seItemName('');
        setItemValue('');
        setItemStatus('');
        setInputNameError('');
        setInputValueError('');
    }

    const validateInputs = () => {
        
        setInputNameError('');
        setInputValueError('');

        if (!itemName) {
            setInputNameError('Por favor, preencha o campo "Name"');
        }

        if (!itemValue) {
            setInputValueError('Por favor, preencha o campo "Value"');
        }

        if (!itemName || !itemValue) {
            return false;
        }

        else {
            return true
        }
    }

    const addItem = (tableType) => {

        if(!validateInputs()) {
            return false
        }
        
        if(tableType !== 'revenue' && tableType !== 'expense') {
            console.error('Tipo de tabela inválido: ', tableType);
            return false
        }

        const newData = {
            year: selectedYear,
            month: selectedMonth,
            tableType: tableType,
            name: itemName,
            value: itemValue,
            status: false
            }

        setTablesDataBase( prevState => ({...prevState, [tableType]: [...(prevState[tableType] || []),  newData]}))

        clearFormData();
        return true
    }

    const toggleTableVisibility = (tableType) => { 
        
        if(tableType !== 'revenue' && tableType !== 'expense'){
            console.error('Entrada para tipo de recurso está errada!', tableType);
            return
        }

        setTableVisibility(prevState => ({...prevState, [`${tableType}TableVisibility`]: !prevState[`${tableType}TableVisibility`]}));
        return
    }                                                                                             
    
    const calculateTotals = (currentTable) => {
        const valuesArray = [...currentTable.map(item => item.status === true? item.value : 0)]
        const sumResult = valuesArray.reduce((acc, cur) => parseFloat(acc) + parseFloat(cur), 0)
        return sumResult.toFixed(2)
    }
    const toggleCheckBox = (id, tableType) => {
        setTablesDataBase(prevState => {
            const newTableDataBase = {...prevState};
            newTableDataBase[tableType][id].status = !prevState[tableType][id].status
            return newTableDataBase
        })
    }

    const filterTable = () => {
        const filtredDataBase = {
            revenue: tablesDataBase.revenue.filter(item => item.year === selectedYear && item.month === selectedMonth),
            expense: tablesDataBase.expense.filter(item => item.year === selectedYear && item.month === selectedMonth)
        };
        return filtredDataBase;
    }
    useEffect(() => {console.clear(); console.table(tablesDataBase)}, [tablesDataBase])
    useEffect(() => {console.log('Status: ', itemStatus)}, [itemStatus])
    const context = {
                tablesDataBase,
                tableVisibility,
                itemName, 
                itemValue,
                itemStatus,
                inputNameError,
                inputValueError,
                selectedRows,
                setTablesDataBase,
                setTableVisibility,
                seItemName,
                setItemValue,
                setItemStatus,
                setInputNameError,
                setInputValueError,
                clearFormData,
                addItem,
                toggleTableVisibility,
                calculateTotals,
                filterTable,
                setSelectedRows,
                toggleCheckBox
            }

    return (
        <TablesDataBaseContext.Provider value={context}>
            { children }
        </TablesDataBaseContext.Provider>
    )
}