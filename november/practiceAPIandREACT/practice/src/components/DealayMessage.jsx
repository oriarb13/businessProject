import { useState,useEffect } from "react"
const DelayMessage=()=>{
    const [message, setMessage] = useState('');
    useEffect(()=>{
        setTimeout(()=>{
            setMessage('delayed message!')
        },3000)
    },[])
    return(
        <div>
            {message}
        </div>
    )
}

export default DelayMessage