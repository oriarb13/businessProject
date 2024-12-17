const Counter=({count,setCount})=>{
        return(
        <div>
            count is {count}
            <button onClick= {()=>setCount (count+1)}>click</button>
        </div>
    )
}
export default Counter