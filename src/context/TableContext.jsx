import { createContext, useEffect, useState } from 'react'

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const [tables, setTables] = useState({revenueTable: [], expenseTable: []})
    const [tableVisibility, setTableVisibility] = useState({revenueTableVisibility: false, expenseTableVisibility: false})
    const [itemName, seItemName] = useState()
    const [itemValue, setItemValue] = useState()
    const [itemStatus, setItemStatus] = useState()

    const addItem = (name, value, status, tableType) => {if(tableType === 'revenue') {
                                                            setTables(prevState => ({...prevState, revenueTable: [...tables.revenueTable, {name, value, status}]}));
                                                            console.log(`A linha ${name}, ${value}, ${status} foi adicionada à tabela: %cREVENUE`, 'color: green');
                                                            return;
                                                            }
                                                        if(tableType === 'expense') {
                                                            setTables(prevState => ({...prevState, expenseTable: [...tables.expenseTable, {name, value, status}]}));
                                                            console.log(`A linha ${name}, ${value}, ${status} foi adicionada à tabela: %cEXPENSE`, 'color: #b44d4d');
                                                            return;
                                                        }
                                                        else {
                                                            console.log('Entrada para tipo de recurso está errada!', tableType);
                                                            return
                                                      }
                                                    }
    const toggleTableVisibility = (tableType) => {if(tableType === 'revenue') {
                                                        setTableVisibility(prevState => ({...prevState, revenueTableVisibility: !tableVisibility.revenueTableVisibility}));
                                                        return
                                                  }
                                                  if(tableType === 'expense') {
                                                        setTableVisibility(prevState => ({...prevState, expenseTableVisibility: !tableVisibility.expenseTableVisibility}));
                                                        return
                                                  }
                                                  else {
                                                        console.log('Entrada para tipo de recurso está errada!', tableType);
                                                        return
                                                  }
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
            }

    return (
        <TableContext.Provider value={context}>
            { children }
        </TableContext.Provider>
    )
}