import { createContext, useEffect, useState } from 'react'

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const [table, setTable] = useState([])
    const [tableVisibility, setTableVisibility] = useState(false)
    const [itemName, seItemName] = useState()
    const [itemValue, setItemValue] = useState()
    const [itemStatus, setItemStatus] = useState()

    const addItem = (name, value, status) => {setTable([...table, {name, value, status}])}
    const toggleTableVisibility = () => {setTableVisibility(!tableVisibility); console.log('tableVisibility= ', tableVisibility)}
    
    const colorHandler = (handlerType) => {
        switch(handlerType) {
            case 'border':
            case 'title':
                return props => props.resourcesType === 'revenue' ? 'green' 
                      : props.resourcesType === 'expense' ? '#b44d4d' 
                      : 'black'
            case 'background':
                return props => props.resourcesType === 'revenue' ? 'white' 
                      : props.resourcesType === 'expense' ? '#fff3f3' 
                      : 'black'
            case 'hover':
                return props => props.resourcesType === 'revenue' ? '#f1fff1' 
                      : props.resourcesType === 'expense' ? '#ffeeee' 
                      : 'black'
            default:
                console.log('Wrong input!')
        }
    }
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
                toggleTableVisibility,
                seItemName,
                setItemValue,
                setItemStatus,
                addItem,
                colorHandler
            }

    return (
        <TableContext.Provider value={context}>
            { children }
        </TableContext.Provider>
    )
}