import { useContext } from "react"
import { TablesDataBaseContext } from "../../context/TablesDataBaseContext"

export const Balance = () => {
    const {filterTable, calculateTotals} = useContext(TablesDataBaseContext)

    const calculateBalance = () => {
        const balance = calculateTotals(filterTable().revenue) - calculateTotals(filterTable().expense)
        return balance
}

    return (
        <>
            <h1>R${calculateBalance()}</h1>
        </>
    )
}