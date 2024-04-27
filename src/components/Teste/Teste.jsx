import { useContext } from "react"
import { TableDataContext } from "../../context/TableDataContext"

export const Teste = () => {

    const { 
        selectedYear,
        selectedMonth,
        selectedTableType,
        selectedName,
        selectedValue,
        selectedStatus, 
        setSelectedYear,
        setSelectedMonth,
        setSelectedTableType,
        setSelectedName,
        setSelectedValue,
        setSelectedStatus,
        addItem,
        selectedFilter,
        setSelectedFilter,
        filterItems} = useContext(TableDataContext)

    return(
        <div style={{display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     textAlign: 'center',
                     gap: '8px',
                     margin: '32px auto',
                     width: '150px'
        }}>
            <input type="number"
                   onChange={(e)=> setSelectedYear(e.target.value)}
                   value={selectedYear} />

            <input type="text"
                   onChange={(e)=> setSelectedMonth(e.target.value)}
                   value={selectedMonth}/>

            <input type="text"
                   onChange={(e)=> setSelectedTableType(e.target.value)}
                   value={selectedTableType}/>

            <input type="text"
                   onChange={(e)=> setSelectedName(e.target.value)}
                   value={selectedName}/>

            <input type="number"
                   onChange={(e)=> setSelectedValue(e.target.value)}
                   value={selectedValue}/>

            <input type="checkbox"
                   onChange={(e)=> setSelectedStatus(e.target.value)}
                   value={selectedStatus}/>

            <button onClick={() => addItem()}>ADD</button>

            <input type="text"
                   onChange={(e)=> {setSelectedFilter(e.target.value); filterItems()}}
                   value={selectedFilter}/>
        </div>
    )
}