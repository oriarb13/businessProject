import { fetchUsers } from "../utils/API.jsx";
import { useState,useEffect } from "react";
const UserList=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const getUsers = async ()=>{
            const data= await fetchUsers()
            setUsers(data)
        }
        getUsers()
        
    },[])
    console.log(users);
    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

    )
}

export default UserList