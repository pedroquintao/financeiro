import { createContext, useContext, useEffect, useState } from 'react'
import { DateContext } from './DateContext';
import { ModalContext } from './ModalContext';

export const TableContext = createContext(null);

export const TableContextProvider = ({ children }) => {
    
    const { selectedYear, 
            selectedMonth,
            years,
            months } = useContext(DateContext)
    const { modalVisibility } = useContext(ModalContext)

    const initialTables = {
        2024: {
            Abril: {
                        revenueTable: [{
                                name: 1,
                                value: 1,
                                status: ''
                        }],
                        expenseTable: [{
                                    name: 1,
                                    value: 1,
                                    status: ''
                            }]
            }
        }
        // years: [{2024: {
        //     Abril: {
        //                 revenueTable: [{
        //                         name: 1,
        //                         value: 1,
        //                         status: ''
        //                 }],
        //                 expenseTable: [{
        //                             name: 1,
        //                             value: 1,
        //                             status: ''
        //                     }]
        //     }
        // }}]
    }


    const [tables, setTables] = useState(initialTables)
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

        
        setTables( prevState => {
            
            const updatedTables = { ...prevState };
            const updatedYear = updatedTables[`${selectedYear}`];
            const updatedMonth = updatedYear[`${selectedMonth}`];
            const newItem = { name: itemName, value: itemValue, status: itemStatus };

            updatedMonth[`${tableType}Table`] = [...updatedMonth[`${tableType}Table`], newItem];

            console.log(`A linha ${JSON.stringify(newItem)} foi adicionada à tabela: %c${tableType.toUpperCase()}`, `color: ${tableType === 'revenue' ? 'green' : '#b44d4d'}`);

            return updatedTables;
        })


        return true
    }

    const toggleTableVisibility = (tableType) => { 
        
        if(tableType !== 'revenue' && tableType !== 'expense'){
            console.log('Entrada para tipo de recurso está errada!', tableType);
            return
        }

        setTableVisibility(prevState => ({...prevState, [`${tableType}TableVisibility`]: !prevState[`${tableType}TableVisibility`]}));
        return
    }
    useEffect(() => {clearFormData(); console.log('ESTADO DO MODAL: ', modalVisibility)}, [modalVisibility]);
    // useEffect(() => {setTables(prevState => ({...prevState, years.map}))}, [selectedYear]);
    // useEffect(() => {}, [selectedMonth])

    useEffect(() => console.log('tables: ', tables), [tables])


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