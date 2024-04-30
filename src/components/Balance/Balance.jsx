import { useContext } from "react"
import { TablesDataBaseContext } from "../../context/TablesDataBaseContext"

export const Balance = () => {

    const { filterTable, calculateTotals } = useContext(TablesDataBaseContext)

    const currentRevenueTotal = filterTable('revenue')
    const currentExpenseTotal = calculateTotals(filterTable('expense'))
    const Total = (currentRevenueTotal - currentExpenseTotal)
    // const 
    return (
        <>
            <h2 onClick={() => console.log(calculateTotals(filterTable('revenue')))}>{Total}</h2>
        </>
    )
}