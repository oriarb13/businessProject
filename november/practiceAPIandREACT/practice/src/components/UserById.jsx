import { useState } from "react"

const UserById = ()=>{
    const [chosen,setChosen]=useState({})
    const [chosen1,setChosen1]=useState({})

    const handleChose=(e)=>{
        e.preventDefault()
        setChosen1(chosen)

    }
    return(
        <div>
            <form onSubmit={handleChose}>
                <input type="text" placeholder="enter name"  value={chosen} onChange={(e) => setChosen(e.target.value)}/>
                <button type="submit">enter the name</button>
            </form>
        </div>

    )
}

export default UserById