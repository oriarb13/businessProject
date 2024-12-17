function BtnColor({color,setColor}) {

    return (
        <div>
            <button onClick={()=>setColor(color==='green' ? 'blue' : 'green')} style={{backgroundColor:color}}>change color</button>
        </div>
    );
}

export default BtnColor