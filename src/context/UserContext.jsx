import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    
    const [itemName, seItemName] = useState()
    const [itemValue, setItemValue] = useState()
    const [itemStatus, setItemStatus] = useState()
    const [table, setTable] = useState([])

    const addItem = (name, value, status) => {setTable([...table, {name, value, status}])}

    // const setPerfil = (perfil) => {setUsuario(estadoAnterior => {return {...estadoAnterior,perfil}})}

    useEffect(() => console.log('table: ', table), [table])

    const context = {
                table,
                itemName, 
                itemValue,
                itemStatus,
                setTable,
                seItemName,
                setItemValue,
                setItemStatus,
                addItem
            }

    return (
        <UserContext.Provider value={context}>
            { children }
        </UserContext.Provider>
    )
}