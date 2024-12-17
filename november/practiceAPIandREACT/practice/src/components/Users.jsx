import { useEffect,useState } from "react"
import { fetchUsers } from "../utils/API1.jsx"
const Users= ()=>{
const [users,setUsers] = useState([])

useEffect(()=>{
    const getAllUsers=async()=>{
        const data = await fetchUsers()
        setUsers(data)
    }
    getAllUsers()
},[])
console.log(users);


return (
 <ul>
    {users.map((user)=>{
        console.log(user.name);
     return   <li  key={user.username}>{user.name}</li>
    })}
 </ul>
)
}

export default Users