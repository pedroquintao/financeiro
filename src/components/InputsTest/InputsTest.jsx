import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext";

export const InputsTest = () => {

    const {
        name,
        amount,
        status,
        setName,
        setAmount,
        setStatus,
        tableItems,
        setTableItems,
        addTableItem
    } = useContext(UserContext)
    
    return (
        <form onSubmit={e => {e.preventDefault(); console.table({name, amount, status})}}>
            <input placeholder="Name" onChange={e => {setName(e.target.value)}} />
            <input placeholder="Amount" onChange={e => {setAmount(e.target.value)}} type="number"/>
            <input placeholder="status" onChange={e => {setStatus(e.target.value)}} type="checkbox"/>
            <button>Ok</button>
        </form>
    )
}