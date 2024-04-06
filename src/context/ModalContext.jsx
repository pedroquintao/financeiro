import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ( { children } ) => {

    const [modalVisibility, setModalVisibility] = useState()

    const toggleModalVisibility = () => {setModalVisibility(!modalVisibility)}

    const context = { modalVisibility, setModalVisibility, toggleModalVisibility }

    return (
        <ModalContext.Provider value={context}>
            { children }
        </ModalContext.Provider>
    )
}