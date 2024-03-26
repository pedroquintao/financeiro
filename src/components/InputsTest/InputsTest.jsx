import { useContext } from "react"
import { TableContext } from "../../context/TableContext";

export const InputsTest = () => {

    const { itemName, itemValue, itemStatus, seItemName, setItemValue, setItemStatus, addItem } = useContext(TableContext)
    
    return (
        <form onSubmit={e => {e.preventDefault(); addItem(itemName, itemValue, itemStatus)}}>
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
            <button>Ok</button>
        </form>
    )
}