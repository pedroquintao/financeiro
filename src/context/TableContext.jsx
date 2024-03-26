import { createContext, useEffect, useState } from 'react'

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const [table, setTable] = useState([])
    const [tableVisibility, setTableVisibility] = useState(false)
    const [itemName, seItemName] = useState()
    const [itemValue, setItemValue] = useState()
    const [itemStatus, setItemStatus] = useState()

    const addItem = (name, value, status) => {setTable([...table, {name, value, status}])}
    const toggleTableVIsibility = () => {setTableVisibility(!tableVisibility)}
    // const setPerfil = (perfil) => {setUsuario(estadoAnterior => {return {...estadoAnterior,perfil}})}

    useEffect(() => console.log('table: ', table), [table])

    const context = {
                table,
                tableVisibility,
                itemName, 
                itemValue,
                itemStatus,
                setTable,
                setTableVisibility,
                toggleTableVIsibility,
                seItemName,
                setItemValue,
                setItemStatus,
                addItem
            }

    return (
        <TableContext.Provider value={context}>
            { children }
        </TableContext.Provider>
    )
}