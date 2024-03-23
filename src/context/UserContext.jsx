import { createContext, useState } from 'react'

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

    const [name, setName] = useState()
    const [amount, setAmount] = useState()
    const [status, setStatus] = useState()
    
    const [tableItems, setTableItems] = useState({})

    const addTableItem = (name, amount, status) => {

        const newTableItem = {
            // id: id,
            name: name,
            amount: amount,
            status: status
        }

        console.table()

        setTableItems({...tableItems, newTableItem})

        console.table(tableItems)
    }

    // const context = {
    //     name,
    //     amount,
    //     status,
    //     setName,
    //     setAmount,
    //     setStatus,
    //     tableItems,
    //     setTableItems,
    //     addTableItem
    // }
    
    return (
        <UserContext.Provider value={{ 
            name,
            amount,
            status,
            setName,
            setAmount,
            setStatus,
            tableItems,
            setTableItems,
            addTableItem }}>
            { children }
        </UserContext.Provider>
    )
}