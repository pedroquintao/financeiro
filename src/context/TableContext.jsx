import { createContext, useEffect, useState } from 'react'

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const [tables, setTables] = useState({revenueTable: [], expenseTable: []})
    const [tableVisibility, setTableVisibility] = useState({revenueTableVisibility: false, expenseTableVisibility: false})
    const [itemName, seItemName] = useState()
    const [itemValue, setItemValue] = useState()
    const [itemStatus, setItemStatus] = useState()

    const addItem = (name, value, status, tableType) => {

        
        if(!name || !value) {
            const emptyInput = !name && !value ? 'name e value' : !name ? 'name' : !value ? 'value' : '';
            window.alert(`Preencher o(os) campo(s): ${emptyInput}`);
            return
        }

        if(!tableType) {
            console.error('O tipo de tabela não foi especificado');
            return
        }

        if(tableType !== 'revenue' || tableType !== 'expense') {
            console.error('Tipo de tabela inválido: ', tableType);
            return
        }

        const newItem = { name, value, status }

        setTables(prevState => ({...prevState, [`${tableType}Table`]: [...prevState[`${tableType}Table`], newItem]}))

        const color = tableType === 'revenue' ? 'green' : '#b44d4d'

        console.log(`A linha ${name}, ${value}, ${status} foi adicionada à tabela: %c${tableType.toUpperCase()}`, `color: ${color}`)
    }

    const toggleTableVisibility = (tableType) => { if(!tableType){

        console.log('Entrada para tipo de recurso está errada!', tableType);
        return
    }
        // if(tableType === 'revenue') {
                                                        setTableVisibility(prevState => ({...prevState, [`${tableType}TableVisibility`]: !prevState[`${tableType}TableVisibility`]}));
                                                        return
                                                  }
                                                //   if(tableType === 'expense') {
                                                //         setTableVisibility(prevState => ({...prevState, expenseTableVisibility: !tableVisibility.expenseTableVisibility}));
                                                //         return
                                                //   }
                                                //   else {
                                                //   }
                                                
                                                    

    

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
            }

    return (
        <TableContext.Provider value={context}>
            { children }
        </TableContext.Provider>
    )
}