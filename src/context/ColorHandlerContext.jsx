import { createContext } from "react";

export const ColorHandlerContext = createContext(null);

const colorHandler = (handlerType) => {
    switch(handlerType) {
        case 'solid':
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
            return props => props.buttonType === 'primary' || props.buttonType === 'secondary' ? 
                        (props => props.resourcesType === 'revenue' ? '#1f9c1f' 
                        : props.resourcesType === 'expense' ? '#d86666' 
                        : 'black') : 
                        (props => props.resourcesType === 'revenue' ? '#f1fff1' 
                        : props.resourcesType === 'expense' ? '#ffeeee' 
                        : 'black')

        default:
            return props => props.resourcesType === 'revenue' ? 'green' 
                  : props.resourcesType === 'expense' ? '#b44d4d' 
                  : 'black'
    }
}

const context = { colorHandler }

export const ColorHandlerContextProvider = ({ children }) => {
    return(
        <ColorHandlerContext.Provider value={context}>
            { children }
        </ColorHandlerContext.Provider>
    )
}