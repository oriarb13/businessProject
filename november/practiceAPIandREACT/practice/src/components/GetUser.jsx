import { useState,useEffect } from "react";
import { fetchUser } from "../utils/API.jsx";
const GetUser=({subId})=>{
    const [user,setUser]=useState({})
    useEffect(()=>{
        const get1User=async()=>{
            const data= await fetchUser(subId)
            setUser(data)
        }
        get1User()
    },[subId])
    return(
        <div>
            {user.name}
            {user.email}
        </div>
    )
}

export default GetUser