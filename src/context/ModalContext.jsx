import { createContext, useContext, useState } from "react";
import { TableContext } from "./TableContext";

export const ModalContext = createContext(null);

export const ModalContextProvider = ( { children } ) => {

    const { seItemName, setItemValue, setItemStatus } = useContext(TableContext) 

    const [modalVisibility, setModalVisibility] = useState()
    const [modalResourceType, setModalResourceType] = useState('')

    const toggleModalVisibility = (resourceTypeHandler) => {
        setModalVisibility(!modalVisibility);
        resourceTypeHandler? 
        setModalResourceType(resourceTypeHandler) : clearFormData()}
    
    const clearFormData = () => {
        setModalResourceType('');
        seItemName('');
        setItemValue('');
        setItemStatus('');
    }
    const context = { modalVisibility, setModalVisibility, toggleModalVisibility, modalResourceType }

    return (
        <ModalContext.Provider value={context}>
            { children }
        </ModalContext.Provider>
    )
}