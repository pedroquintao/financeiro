import { useContext } from "react"
import { TableContext } from "../../context/TableContext";

export const InputsTest = () => {

    const { seItemName, setItemValue, setItemStatus } = useContext(TableContext)
    
    return (
        <>
            <input  placeholder="Name" 
                    onChange={e => {seItemName(e.target.value)}} 
                    />
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