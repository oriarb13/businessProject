import { useSearchParams } from "react-router-dom"
const  QueryPrint = ()=>{
    const [searchParams,setSearchParams]=useSearchParams()
    const searchParamsObj= Object.fromEntries(searchParams)

    console.log(searchParams);
    
    return(
        <div>
            queryprint
        </div>

    )
}
export default QueryPrint