import { createContext, useState } from "react";
import Data from '../assets/Data'
export const DataContext = createContext()
const DataContextProvider = (props)=>{
    const [Search, setSearch] = useState(false)
    const [doSearch, setdoSearch] = useState('')
    const value = {
        Data,
        Search,
        setSearch,
        doSearch, setdoSearch
    }
    return(
        <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
    )
}
export default DataContextProvider;