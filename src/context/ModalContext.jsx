import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ( { children } ) => {

    const [modalVisibility, setModalVisibility] = useState()
    const [modalResourceType, setModalResourceType] = useState('')

    const toggleModalVisibility = (resourceType) => {
        setModalVisibility(!modalVisibility);
        resourceType ? setModalResourceType(resourceType) : (() => {setModalResourceType('')})()
    }
    
    

    const context = { modalVisibility, setModalVisibility, toggleModalVisibility, modalResourceType }

    return (
        <ModalContext.Provider value={context}>
            { children }
        </ModalContext.Provider>
    )
}