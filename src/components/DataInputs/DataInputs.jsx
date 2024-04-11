import { useContext } from "react"
import { TableContext } from "../../context/TableContext";

export const InputsTest = () => {

    const {itemName, itemValue, itemStatus, seItemName, setItemValue, setItemStatus, inputNameError, inputValueError } = useContext(TableContext)
    
    return (
        <>
            <input
                    type="text"
                    placeholder="Name"
                    value={itemName}
                    onChange={(e) => seItemName(e.target.value)}
                />
                {inputNameError && <span style={{ color: 'red' }}>{inputNameError}</span>}
            <input  placeholder="Value" 
                    type="number"
                    onChange={e => {setItemValue(e.target.value)}} 
            />
            <input  placeholder="Status" 
                    type="checkbox"
                    onChange={e => {setItemStatus(e.target.value)}} 
            />
        </>
    )
}