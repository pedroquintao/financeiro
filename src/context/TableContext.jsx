import { createContext, useEffect, useState } from 'react'

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const [tables, setTables] = useState({revenueTable: [], expenseTable: []})
    const [tableVisibility, setTableVisibility] = useState({revenueTableVisibility: false, expenseTableVisibility: false})
    const [itemName, seItemName] = useState()
    const [itemValue, setItemValue] = useState()
    const [itemStatus, setItemStatus] = useState()
    const [inputNameError, seinputNameError] = useState()
    const [inputValueError, setinputValueError] = useState()

    const addItem = (name, value, status, tableType) => {

        if (!name) {
            seinputNameError('Por favor, preencha o campo "Name"');
        }
        if (!value) {
            setinputValueError('Por favor, preencha o campo "Value"');
        }

        // Se algum campo estiver vazio, não adiciona o item
        if (!name || !value) {
            return false;
        }
        if(tableType !== 'revenue' || tableType !== 'expense') {
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

    useEffect(() => console.log('tableVisibility: ', tableVisibility), [tableVisibility])


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
                addItem,
                inputNameError,
                inputValueError
            }

    return (
        <TableContext.Provider value={context}>
            { children }
        </TableContext.Provider>
    )
}