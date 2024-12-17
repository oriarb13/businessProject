import GetUser from "./GetUser.jsx";
import { useState } from "react";
const UserForm=()=>{
    const [subId,setSubId]=useState(0)
    const [Id1,setId1]=useState(0)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubId(Id1)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter user id" onChange={(e)=>setId1(e.target.value)}/>
                <button>enter user</button>
            </form>
            <GetUser subId={subId}/>
        </div>

    )
}

export default UserForm