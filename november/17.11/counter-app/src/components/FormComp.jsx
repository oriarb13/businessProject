const FormComp =(props)=>{
    const updateChoice=(e)=>{
        props.setUserChoice111(+e.target.innerText)
        props.setDidUserSubmit(true)
    }
    return(
        <div>
            <span onClick={updateChoice}>1</span>
            <span onClick={updateChoice}>2</span>
            <span onClick={updateChoice}>3</span>
            <span onClick={updateChoice}>4</span>
            <span onClick={updateChoice}>5</span>
        </div>
    )
}
export default FormComp