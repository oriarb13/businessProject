import PostComp from "./PostComp.jsx";
import { useState } from "react";
const Form= ()=>{
    const [id, setId] = useState(''); 
    const [submittedId, setSubmittedId] = useState(''); //רק בסאבמיט 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmittedId(id)
    };
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="enter id" onChange={(e) => setId(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
        <PostComp id={submittedId}/>
        </div>
    )
}
export default Form
