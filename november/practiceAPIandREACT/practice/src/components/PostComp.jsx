import { fetchPostById } from "../utils/API.jsx"
import { useState,useEffect } from "react"

const PostComp=({id})=>{
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const SpecificProduct= async()=>{
            const data= await fetchPostById(id)
            setProduct(data)            
        }
        SpecificProduct()
    },[id])
    return(
        <div>
            <h1>{product.title}</h1>
            <p>{product.body}</p>
        </div>
    )
}
export default PostComp