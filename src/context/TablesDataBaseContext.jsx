import { createContext, useContext, useEffect, useState } from 'react'
import { DateContext } from './DateContext';
import { ModalContext } from './ModalContext';

export const TablesDataBaseContext = createContext(null);

export const TablesDataBaseContextProvider = ({ children }) => {
    
    const { selectedYear, selectedMonth} = useContext(DateContext)

    const [tablesDataBase, setTablesDataBase] = useState([])
    const [tableVisibility, setTableVisibility] = useState({revenueTableVisibility: false, expenseTableVisibility: false})
    const [itemName, seItemName] = useState('')
    const [itemValue, setItemValue] = useState('')
    const [itemStatus, setItemStatus] = useState('')
    const [inputNameError, setInputNameError] = useState('')
    const [inputValueError, setInputValueError] = useState('')

    
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

        setTablesDataBase( prevState => {
            
            const newData = {
                year: selectedYear,
                month: selectedMonth,
                tableType: tableType,
                name: itemName,
                value: itemValue,
                status: itemStatus
                }

            return [...prevState, newData];
        })
        clearFormData();
        return true
    }

    const filterTable = (tableType) => {
        const filtredTable = tablesDataBase.filter(element => (element.year === selectedYear 
                                                               && element.month === selectedMonth 
                                                               && element.tableType === tableType))                                             
        return filtredTable
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
        let sum = 0;
        currentTable.map(row => sum += parseFloat(row.value))
        const totalText = `R$ ${sum}`
        return totalText
    }

    const context = {
                tablesDataBase,
                tableVisibility,
                itemName, 
                itemValue,
                itemStatus,
                inputNameError,
                inputValueError,
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
                filterTable
            }

    return (
        <TablesDataBaseContext.Provider value={context}>
            { children }
        </TablesDataBaseContext.Provider>
    )
}