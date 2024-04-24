import { createContext, useContext, useEffect, useState } from 'react'
import { DateContext } from './DateContext';

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const { years } = useContext(DateContext)

    const [tables, setTables] = useState({ revenueTable: [], expenseTable: [] })
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

    const addItem = (name, value, status, tableType) => {

        setInputNameError('');
        setInputValueError('');

        if (!name) {
            setInputNameError('Por favor, preencha o campo "Name"');
        }
        if (!value) {
            setInputValueError('Por favor, preencha o campo "Value"');
        }

        if (!name || !value) {
            return false;
        }
        
        if(tableType !== 'revenue' && tableType !== 'expense') {
            console.error('Tipo de tabela inválido: ', tableType);
            return false
        }

        const newItem = { name, value, status }

        setTables(prevState => ({...prevState, [`${tableType}Table`]: [...prevState[`${tableType}Table`], newItem]}))

        const color = tableType === 'revenue' ? 'green' : '#b44d4d'

        console.log(`A linha ${name}, ${value}, ${status} foi adicionada à tabela: %c${tableType.toUpperCase()}`, `color: ${color}`)

        return true
    }

    const toggleTableVisibility = (tableType) => { 
        
        if(!tableType){
            console.log('Entrada para tipo de recurso está errada!', tableType);
            return
        }

        setTableVisibility(prevState => ({...prevState, [`${tableType}TableVisibility`]: !prevState[`${tableType}TableVisibility`]}));
        return
    }

    // useEffect(() => console.log('tableVisibility: ', tableVisibility), [tableVisibility])


    const context = {
                tables,
                tableVisibility,
                itemName, 
                itemValue,
                itemStatus,
                setTables,
                setTableVisibility,
                toggleTableVisibility,
                seItemName,
                setItemValue,
                setItemStatus,
                clearFormData,
                addItem,
                inputNameError,
                inputValueError,
            }

    return (
        <TableContext.Provider value={context}>
            { children }
        </TableContext.Provider>
    )
}